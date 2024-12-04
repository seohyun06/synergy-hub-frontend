import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWebSocket from './UseWebSocket';
import './ChatRoom.css';

const ChatRoom = () => {
    const { chatRoomId } = useParams();
    const navigate = useNavigate();

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const chatBodyRef = useRef(null);

    const { sendMessage } = useWebSocket(
        chatRoomId,
        (message) => {
            setMessages((prevMessages) => [
                ...prevMessages,
                {
                    id: message.messageId,
                    text: message.message,
                    sent: message.nickname === "currentUserNickname",
                    timestamp: message.createdAt,
                },
            ]);
        }
    );

    const handleSendMessage = async () => {
        const trimmedMessage = messageInput.trim();
        if (trimmedMessage === '') return;

        const tempMessage = {
            id: `temp-${Date.now()}`,
            text: trimmedMessage,
            sent: true,
            isTemp: true,
        };

        setMessages((prevMessages) => [...prevMessages, tempMessage]);
        setIsSending(true);

        try {
            await sendMessage({ message: trimmedMessage, type: "TALK" });
        } catch (error) {
            console.error("메시지 전송 실패:", error);
        } finally {
            setIsSending(false);
        }

        setMessageInput('');
    };

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-room-container">
            <div className="chat-room-header">
                <button onClick={() => navigate('/chat')} className="back-button">
                    ← 뒤로
                </button>
                <h2>채팅방 {chatRoomId}</h2>
            </div>

            <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg, index) => (
                    <div
                        key={msg.id || `temp-${index}`}
                        className={`chat-message ${msg.sent ? 'sent' : 'received'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            <div className="chat-input-container">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-button" disabled={isSending}>
                    {isSending ? "전송 중..." : "전송"}
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
