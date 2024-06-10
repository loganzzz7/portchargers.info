import SubscribeForm from './Forms/SubscribeForm'
import './SubscribeAndContact.css'

function SubscribeAndContact() {

    return (
        <>
            <section className="subscribe" id="newsLetter">
                <div className="subscribeBody">
                    <h1>Newsletter</h1>
                    <p className="newsLetterTxt">Subscribe to our newsletters for updates on new menus and promotional offers.
                    </p>
                    <div id="subscribeForm">
                        <SubscribeForm />
                    </div>
                </div>
            </section>
            <section id="contact">
                <p>© PORT LLC</p>
                <div className="contactInfo">
                    <p>123-456-7890</p>
                    <a href="" target="_blank"><i className="bi bi-twitter-x"></i></a>
                    <a href="https://www.linkedin.com/company/portables5/" target="_blank"><i
                        className="bi bi-linkedin"></i></a>
                    <a href="https://www.instagram.com/portchargers" target="_blank"><i className="bi bi-instagram"></i></a>
                </div>
            </section>
        </>
    );
}

export default SubscribeAndContact;