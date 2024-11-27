import React, { useEffect, useState } from "react";
import WebSocketService from "./WebSocketService";
import { useParams } from "react-router-dom";

const ChatRoom = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const [user] = useState({ sender: "User", senderEmail: "user@example.com" }); // 임시 사용자 정보

    useEffect(() => {
        WebSocketService.connect(roomId, (chatMessage) => {
            setMessages((prevMessages) => [...prevMessages, chatMessage]);
        });

        return () => {
            WebSocketService.disconnect();
        };
    }, [roomId]);

    const handleSendMessage = () => {
        if (message.trim() !== "") {
            WebSocketService.sendMessage(roomId, user.sender, user.senderEmail, message);
            setMessage("");
        }
    };

    return (
        <div>
            <h1>Chat Room {roomId}</h1>
            <div id="chatting">
                {messages.map((msg, index) => (
                    <div key={index} className={msg.senderEmail === user.senderEmail ? "chatting_own" : "chatting"}>
                        <strong>{msg.sender}:</strong> {msg.message}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type your message..."
            />
            <button onClick={handleSendMessage}>Send</button>
        </div>
    );
};

export default ChatRoom;

