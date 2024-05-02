import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import './Chatbox.css'
import { useState } from "react";

// chatbot popup tut: https://safwan-du16.medium.com/chat-popups-on-react-ever-reuseable-components-f9c99a7ac94
// wanted to use dialogflow + kommunicate but I think that it might have been too simple?
function Chatbot() {
    const onChatBtnClick = () => {

    }

    return (
        <>
        <div className="chatbotFAB">
            <button onClick={onChatBtnClick}> <FontAwesomeIcon icon={faHeadset} /> </button>
        </div>
        </>
    );
}

export default Chatbot;