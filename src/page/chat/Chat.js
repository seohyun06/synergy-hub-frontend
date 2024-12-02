import React from 'react';
import './Chat.css';

const ChatUI = () => {
    const messages = [
        { id: 1, sender: 'OP', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", time: '8:00 PM', isMe: false },
        { id: 2, sender: 'Me', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", time: '8:00 PM', isMe: true },
        { id: 3, sender: 'OP', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", time: '8:00 PM', isMe: false },
        { id: 4, sender: 'Me', text: "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,", time: '8:00 PM', isMe: true },
    ];

    return (
        <div className="chat-container">
            <header className="chat-header">
                <h3>4팀</h3>
            </header>
            <div className="chat-body">
                {messages.map((msg) => (
                    <div key={msg.id} className={`message ${msg.isMe ? 'me' : 'other'}`}>
                        {!msg.isMe && <div className="avatar">{msg.sender}</div>}
                        <div className="message-content">
                            <p>{msg.text}</p>
                            <span className="time">{msg.time}</span>
                        </div>
                    </div>
                ))}
            </div>
            <footer className="chat-footer">
                <input type="text" placeholder="Digite a mensagem" className="chat-input" />
                <button className="send-button">▶</button>
            </footer>
        </div>
    );
};

export default ChatUI;
