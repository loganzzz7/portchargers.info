import React, { useState } from "react";
import './SubscribeForm.css'

function SubscribeForm() {
    const [subscribeFormData, setSubscribeFormData] = useState({
        email: '',
        firstName: '',
        lastName: ''
    });
    
    // const [submitErrorMsg, setSubmitErrorMsg] = useState('');

    const onFormChange = (event) => {
        const { name, value } = event.target;
        setSubscribeFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const onFormSubmit = async (event) => {
        event.preventDefault();

        // need await for promise
        const response = await fetch('http://localhost:8080/addSubscriber', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: subscribeFormData.email,
                firstName: subscribeFormData.firstName,
                lastName: subscribeFormData.lastName
            }),
        })

        console.log(
            `Successfully added contact as an audience member. The contact's id is ${response.id}.`
        );

        // if (email.trim() === '') {
        //     setSubmitErrorMsg('Email is required');
        // } else {
        //     const emailRegex = /^[\w\-.]+@([\w-]+\.)+[\w-]{2,4}$/igm;
        //     if(!emailRegex.test(email)) {
        //         setSubmitErrorMsg('Invalid Email Address');
        //     }
        // }
    };

    return (
        <>
            <form onSubmit={onFormSubmit} className="subscribeFormContent">
                {/* <div className="errorMessage">
                    <p>{submitErrorMsg}</p>
                </div> */}
                <div className="emailAddTxtAndInput">
                    <div className="emailAddField">
                        <p className="nLInputName">Email Address</p>
                        <p id="mustFill">*</p>
                    </div>
                    <input type="email" name="email" id="email" placeholder="Enter your email address"
                        required value={subscribeFormData.email} onChange={onFormChange} />
                </div>
                <div className="firstLastNameField">
                    <div className="firstNField">
                        <p className="nLInputName">First Name</p>
                        <input type="text" name="firstName" id="fName" placeholder="Enter firstname"
                            value={subscribeFormData.firstName} onChange={onFormChange} />
                    </div>
                    <div className="lastNField">
                        <p className="nLInputName">Last Name</p>
                        <input type="text" name="lastName" id="lName" placeholder="Enter lastname"
                            value={subscribeFormData.lastName} onChange={onFormChange} />
                    </div>
                </div>
                <div className="newsLetterSub">
                    <button type="submit" className="newsLetterSubBtn">Subscribe</button>
                </div>
            </form>
        </>
    );
}

export default SubscribeForm;