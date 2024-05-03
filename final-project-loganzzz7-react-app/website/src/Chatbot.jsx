import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeadset } from "@fortawesome/free-solid-svg-icons";
import './Chatbox.css'
import { useState } from "react";

// chatbot popup tut: https://safwan-du16.medium.com/chat-popups-on-react-ever-reuseable-components-f9c99a7ac94
// wanted to use dialogflow + kommunicate but I think that it might have been too simple?
function Chatbot() {
    const [chatBoxOpen, setChatBoxOpen] = useState(false);
    const [messagesSent, setMessagesSent] = useState([]); // track msg history
    const [newMessage, setNewMessage] = useState(''); // new user msg

    const onChatBtnClick = () => {
        setChatBoxOpen(!chatBoxOpen);
    }

    const onUserInputChange = (event) => {
        setNewMessage(event.target.value);
    }

    const enterKeyPress = (event) => {
        if (event.key == 'Enter') {
            event.preventDefault();
            onSendMessage(); // allow to send msg when press enter key
        }
    }

    const onSendMessage = async () => {
        const messageInputed = newMessage;
        setMessagesSent([...messagesSent, { text: newMessage, from: 'user' }]); // add usermsg to msg hist
        // clear after send
        setNewMessage('');

        try {
            const response = await fetch('http://localhost:8080/messageBot', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    message: messageInputed
                }),
            });

            const data = await response.json();
            console.log(data);
            setMessagesSent(messages => [...messages, { text: data.reply, from: 'bot' }]); // gets set response from dialogflow
        } catch (error) {
            console.error('Error:', error);
        }
    }

    return (
        <>
            <div className="chatbotFAB">
                <button onClick={onChatBtnClick}> <FontAwesomeIcon icon={faHeadset} /> </button>
            </div>
            {chatBoxOpen && (
                <div className="chatBox">
                    <div className="chatMessages">
                        {messagesSent.map((msg, index) => (
                            <div key={index} className={`message ${msg.from}`}>
                                {/* ran out of time to swap a pic in for user and another pic in for FAQbot */}
                                {msg.from === 'user' ? 'User:' : 'FAQ bot:' }&nbsp;{msg.text}
                            </div>
                        ))}
                    </div>
                    <div className="sendMessage">
                        <input type="text" value={newMessage} onChange={onUserInputChange}
                            onKeyDown={enterKeyPress} />
                        <button onClick={onSendMessage}>Send</button>
                    </div>
                </div>
            )}
        </>
    );
}

export default Chatbot;