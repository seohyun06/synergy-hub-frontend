import { useState, useEffect, useRef } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import './ChatRoom.css';


const ChatRoom4 = () => {

    const { chatRoomId } = useParams();
    const navigate = useNavigate();

    // console.log("roomId:", chatRoomId);
    const chatBodyRef = useRef(null);


    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isSending, setIsSending] = useState(false);

    const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false); // 연결 상태 확인
    const [chatList, setChatList] = useState([])
    const [newChat, setNewChat] = useState('')
    const clientRef = useRef(null)


    useEffect(() => {

        const authToken = localStorage.getItem('accessToken'); // 인증 토큰 가져오기
        console.log("액세스 토큰 : ", authToken);

        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'), // WebSocket 엔드포인트

            debug: (str) => console.log(str), // 디버그 메시지 출력

            connectHeaders: {
                Authorization: `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
            },

            onConnect: () => {
                console.log(new Date());
                stompClient.subscribe(`/topic/messages/` + chatRoomId, (message) => {
                    if (message.body) {
                        const newChat = JSON.parse(message.body);
                        setMessages((prevMessages) => [...prevMessages, newChat]);
                    }
                    console.log("newCHat = ", JSON.parse(message.body));
                });
            },

            beforeConnect: () => {
                console.log("beforeConnect");
            },

        })

        stompClient.activate();
        // clientRef.current = stompClient
        setClient(stompClient);


        return () => {
            stompClient.deactivate()
        };

    }, [chatRoomId]);

    const handleChange = (event) => {
        setNewChat(event.target.value)
    }

    const handleSubmit = event => {

        if (event) {
            event.preventDefault(); // Prevent default form submission
        }
        if (messageInput.trim() !== '') {
            const newChatObj = { text: messageInput }
            const msg = JSON.stringify({
                message: newChatObj,
                type: 'TALK', // 메시지 타입 (예: TALK)
            })

            console.log("msg :", msg);

            // 4. 메시지 보내기(퍼블리시)
            if (client) {
                client.publish({
                    destination: `/app/chat/message/sendMessage/${chatRoomId}`,
                    body: msg
                })
            } else {
                console.error('WebSocket 클라이언트가 활성 상태가 아니거나 연결되지 않았습니다.');
            }
        }
        setNewChat('')
    }

    useEffect(() => {
        if (chatBodyRef.current) {
            chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
        }
    }, [messages]);

    return (
        <div className="chat-room-container">
            <div className="chat-room-header">
                <h2>CHAT</h2>
            </div>
        
            <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg, index) => (
                    <div
                        key={msg.id || `temp-${index}`}
                        className={msg.userEmail !== localStorage.getItem('userEmail') 
                            ? 'chat-message received' 
                            : 'chat-message sent'}
                    >
                        {msg.userEmail !== localStorage.getItem('userEmail') && (
                            <div className="user-info">
                                <img 
                                    src={msg.userProfile || 'default-profile.png'} 
                                    alt={`${msg.nickname}'s profile`} 
                                    className="profile-image"
                                />
                                <span className="user-name">{msg.nickname}</span>
                            </div>
                        )}
                        <div className="message-content">
                            {msg.message}
                        </div>
                    </div>
                ))}
            </div>
        
            <div className="chat-input-container">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button onClick={handleSubmit} className="send-button" disabled={isSending}>
                    {isSending ? "전송 중..." : "전송"}
                </button>
            </div>
        </div>
    );


};

// return (
//     <>
//         <div>
//             {chatList.map(chat => (
//                 <div key={crypto.randomUUID()}>
//                     <span>{chat.message}</span>
//                 </div>
//             ))}
//         </div>
//         <form onSubmit={handleSubmit}>
//             <input
//                 type='text'
//                 placeholder='메시지를 입력하세요'
//                 value={newChat}
//                 onChange={handleChange}
//             />
//             <button type='submit'>send</button>
//         </form>
//     </>
// )

export default ChatRoom4;