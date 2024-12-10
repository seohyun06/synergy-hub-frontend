import React, { useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWebSocket from './UseWebSocket';
import './ChatRoom.css';
import { useAuth } from "../../global/AuthContext";


const ChatRoom = () => {
    const { chatRoomId } = useParams();
    const navigate = useNavigate();
    const { isLoggedIn, user } = useAuth(); // 로그인 상태와 사용자 정보 가져오기
    console.log("Auth Context 상태:", { isLoggedIn, user });

    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const chatBodyRef = useRef(null);

    
    // useRef로 user 정보를 참조
    const userRef = useRef(user);

    // user 값이 변경될 때 userRef 업데이트
    useEffect(() => {
        userRef.current = user;
    }, [user]);

    // 회원 정보 
    const userNickname = user.nickname;
    const userEmail = user.email;
    const userProfile = user.profileImageUrl;
    console.log("userNickname1: ", userNickname);

     // userRef를 통해 항상 최신 user.nickname 참조
     const currentNickname = userRef.current.nickname;

    const { sendMessage } = useWebSocket(
        chatRoomId,
        (message) => {
            console.log("수신된 메시지:", message);

            // const currentNickname = user.nickname;

            if (message.nickname !== userNickname) {
                console.log("message.nickname: ", message.nickname);
                console.log("userNickname: ", userNickname);

                console.log("상대방 메세지:", message);
                setMessages((prevMessages) => [
                    ...prevMessages,
                    {
                        id: message.messageId,
                        text: message.message,
                        // sent: message.nickname === "currentUserNickname",
                        sender: message.nickname,
                        timestamp: message.createdAt,
                    },
                ]);
            }
            console.log(messages);
        }
    );

    const handleSendMessage = async () => {
        const trimmedMessage = messageInput.trim();
        if (trimmedMessage === '') return;

        console.log("sendMessage sender:", userNickname);
        const tempMessage = {
            id: `temp-${Date.now()}`,
            text: trimmedMessage,
            // sent: true,
            sender: userNickname,
            isTemp: true,
        };

        setMessages((prevMessages) => [...prevMessages, tempMessage]);
        setIsSending(true);

        try {
            await sendMessage({ text: trimmedMessage });
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


    // 메시지 렌더링 함수
    const msgBox = messages.map((item, idx) => {
        if (item.sender !== userNickname) {
            return (
                <div key={item.id || `temp-${idx}`} className="chat-message received">
                    <div className="other-profile">
                        <img src={userProfile} alt="프로필" />
                    </div>
                    <div className="other-msg">{item.sender}</div>
                    <div className="other-msg">{item.text}</div>
                    <span className="msg-date">{item.timestamp}</span>
                </div>
            );
        } else {
            return (
                <div key={item.id || `temp-${idx}`} className="chat-message sent">
                    <div className="my-msg">{item.text}</div>
                    <span className="msg-date">{item.timestamp}</span>
                </div>
            );
        }
    });


    return (
        <div className="chat-room-container">
            <div className="chat-room-header">
                <button onClick={() => navigate('/chat')} className="back-button">
                    ← 뒤로
                </button>
                <h2>채팅방 {chatRoomId}</h2>
            </div>

            {/* <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg, index) => (
                    <div
                        key={msg.id || `temp-${index}`}
                        className={`chat-message. ${msg.sent ? 'sent' : 'received'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div> */}
            <div className="chat-body" ref={chatBodyRef}>
                {msgBox}
            </div>


            <div className="chat-input-container">
                <input
                    type="text"
                    value={messageInput.content}
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
