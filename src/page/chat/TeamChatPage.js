import React, { useState, useEffect, useCallback, useRef } from "react";
import useWebSocket from "./UseWebSocket";
import { useNavigate, useParams } from "react-router-dom";

const TeamChatPage = () => {
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState("");
    const navigate = useNavigate();
    const { teamId } = useParams(); // URL 파라미터 가져오기
    const chatBodyRef = useRef(null);

    // 메시지 수신 처리
    const handleMessageReceived = useCallback((message) => {
        setMessages((prevMessages) => [...prevMessages, message]);
        scrollToBottom();
    }, []);

    // 메시지 업데이트 처리
    const handleMessageUpdated = useCallback((updatedMessage) => {
        setMessages((prevMessages) =>
            prevMessages.map((msg) =>
                msg.id === updatedMessage.id ? { ...msg, text: updatedMessage.message } : msg
            )
        );
    }, []);

    // 메시지 삭제 처리
    const handleMessageDeleted = useCallback((deletedMessageId) => {
        setMessages((prevMessages) =>
            prevMessages.filter((msg) => msg.id !== deletedMessageId)
        );
    }, []);

    // WebSocket 훅 사용
    const { sendMessage, deleteMessage, getMessages } = useWebSocket(
        teamId,
        handleMessageReceived,
        handleMessageUpdated,
        handleMessageDeleted
    );

    // 메시지 전송 핸들러
    const handleSendMessage = () => {
        const newMessage = messageInput.trim();
        if (newMessage) {
            sendMessage({ message: newMessage, teamId });
            setMessageInput("");
        }
    };

    const scrollToBottom = () => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    };

    return (
        <div className="team-chat-page">
            <header className="team-chat-header">
                <h2>Team Chat Room: {teamId}</h2>
                <button onClick={() => navigate("/")}>홈으로</button>
            </header>
            <div className="team-chat-body" ref={chatBodyRef}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`message ${msg.senderId === teamId ? "sent" : "received"}`}
                    >
                        <span className="sender">{msg.senderNickname}</span>
                        <p>{msg.message}</p>
                    </div>
                ))}
            </div>
            <div className="team-chat-input">
                <input
                    type="text"
                    placeholder="메시지를 입력하세요..."
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    onKeyUp={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button onClick={handleSendMessage}>전송</button>
            </div>
        </div>
    );
};

export default TeamChatPage;
