import React, { useState, useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { Stomp } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const ChatRoom = () => {
    const { roomId } = useParams();
    const [messages, setMessages] = useState([]);
    const [message, setMessage] = useState("");
    const sender = "John Doe"; // 보내는 사람 이름
    const senderEmail = "john.doe@example.com"; // 보내는 사람 이메일
    const stompClient = useRef(null);

    // STOMP 연결
    useEffect(() => {
        const socket = new SockJS("/ws-stomp");
        stompClient.current = Stomp.over(socket);

        stompClient.current.connect({}, () => {
            console.log("Connected to STOMP");

            // 구독 설정
            stompClient.current.subscribe(`/room/${roomId}`, (chatMessage) => {
                const newMessage = JSON.parse(chatMessage.body);
                setMessages((prevMessages) => [...prevMessages, newMessage]);
            });
        });

        // 컴포넌트 언마운트 시 연결 해제
        return () => {
            if (stompClient.current) {
                stompClient.current.disconnect();
                console.log("Disconnected from STOMP");
            }
        };
    }, [roomId]);

    // 메시지 보내기
    const sendChat = () => {
        if (message.trim() !== "") {
            const chatMessage = {
                sender,
                senderEmail,
                message,
            };
            stompClient.current.send(`/send/${roomId}`, {}, JSON.stringify(chatMessage));
            setMessage(""); // 입력 필드 초기화
        }
    };

    return (
        <div className="chat-room">
            <h2>Chat Room: {roomId}</h2>
            <div className="chat-messages">
                {messages.map((msg, index) => (
                    <div
                        key={index}
                        className={msg.senderEmail === senderEmail ? "chat-own" : "chat-other"}
                    >
                        {msg.senderEmail !== senderEmail && <strong>{msg.sender}: </strong>}
                        {msg.message}
                    </div>
                ))}
            </div>
            <div className="chat-input">
                <input
                    type="text"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && sendChat()}
                    placeholder="Type a message..."
                />
                <button onClick={sendChat}>Send</button>
            </div>
        </div>
    );
};

export default ChatRoom;
