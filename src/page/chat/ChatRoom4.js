import { useState, useEffect, useRef } from 'react'
import { useSearchParams, useParams, useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import axios from 'axios';
import './ChatRoom.css';


const ChatRoom4 = () => {

    const [searchParams] = useSearchParams();
    const navigate = useNavigate();

    //teamId와 chatRoomId 동기화
    const teamId = searchParams.get("team");
    const chatRoomId = teamId ? parseInt(teamId, 10) : null;

    // console.log("roomId:", chatRoomId);
    const chatBodyRef = useRef(null);
    const authToken = localStorage.getItem('accessToken'); // 인증 토큰 가져오기
    const [messages, setMessages] = useState([]);
    const [messageInput, setMessageInput] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [client, setClient] = useState(null);

    const [isFirstEnterMessageSent, setIsFirstEnterMessageSent] = useState(false); // ENTER 메시지 전송 여부 상태


    useEffect(() => {

        const authToken = localStorage.getItem('accessToken'); // 인증 토큰 가져오기
        console.log("액세스 토큰 : ", authToken);

        const stompClient = new Client({
            webSocketFactory: () => new SockJS(`${process.env.REACT_APP_API_URL}/ws`), // WebSocket 엔드포인트

            debug: (str) => console.log(str), // 디버그 메시지 출력

            connectHeaders: {
                Authorization: `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
            },

            onConnect: () => {

                const storedUser = sessionStorage.getItem("user"); // localStorage에서 "user" 가져오기
                // if (storedUser) {
                    const user = JSON.parse(storedUser); // JSON 문자열을 JavaScript 객체로 변환
                    const nickname = user.nickname; // nickname 필드 접근
                // }

                // 첫 번째 메시지만 전송하도록 조건 확인
                if (!isFirstEnterMessageSent) {
                    const joinMessage = JSON.stringify({
                        message: { text: `${nickname}님이 팀에 참여하였습니다.` },
                        type: 'ENTER',
                    });

                    stompClient.publish({
                        destination: `/app/chat/message/sendMessage/${chatRoomId}`,
                        body: joinMessage,
                    });

                    console.log('JOIN 메시지 전송');
                    setIsFirstEnterMessageSent(true); // 메시지 전송 후 상태를 true로 변경
                }


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


    useEffect(() => {

        const fetchChatHistory = async () => {
            try {
                console.log("채팅 기록 요청");

                const response = await axios.get(`${process.env.REACT_APP_API_URL}/chat/messageHistory/${chatRoomId}`, {
                    headers: {
                        Authorization: `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
                    },
                });

                // createdAt 값을 formatTime으로 변환
                const formattedMessages = response.data.map((msg) => ({
                    ...msg,
                    createdAt: formatArrayToISO(msg.createdAt), // createdAt 값을 포맷된 문자열로 변환
                }));

                // console.log("format", formattedMessages);
                setMessages(formattedMessages);
            } catch (error) {
                console.error("채팅 기록을 가져오는 중 오류 발생", error);
            }
        };

        if (chatRoomId) {
            fetchChatHistory();
        }
    }, [chatRoomId, authToken]); // authToken이 변경될 가능성이 있다면 의존성 배열에 추가



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
        setMessageInput('')
    }


    const formatTime = (dateString) => {
        const date = new Date(dateString);
        const hours = String(date.getHours()).padStart(2, '0');
        const minutes = String(date.getMinutes()).padStart(2, '0');
        return `${hours}:${minutes}`;
    };

    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        return new Date(dateString).toLocaleDateString(undefined, options);
    };

    const formatArrayToISO = (dateArray) => {
        const [year, month, day, hour, minute, second, nanoseconds] = dateArray;

        // 밀리초는 나노초를 천 단위로 나눠서 계산
        const milliseconds = Math.floor(nanoseconds / 1_000_000);

        // ISO 8601 문자열 생성
        return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}.${String(milliseconds).padStart(3, '0')}`;
    };

    const storedUser = sessionStorage.getItem("user"); 
        const user = JSON.parse(storedUser);
        const userEmail = user.email; 

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
                {messages.map((msg, index) => {

                    const isReceived = msg.userEmail !== userEmail;
                    // const showUserInfo = index === 0 || messages[index - 1].userEmail !== msg.userEmail; // 이전 메시지가 다른 사용자이면 `user-info`를 표시

                    const showUserInfo =
                        index === 0 ||
                        messages[index - 1]?.type === 'ENTER' ||
                        messages[index - 1]?.userEmail !== msg.userEmail; // 이전 메시지의 사용자와 다를 때만 표시

                    const currentDate = new Date(msg.createdAt).toDateString();
                    const prevDate =
                        index > 0 ? new Date(messages[index - 1].createdAt).toDateString() : null;
                    const showDate = index === 1 || msg.type === 'ENTER';
                    // const showDate = index === 0 || currentDate !== prevDate;


                    // 'ENTER' 메시지가 현재 사용자의 메시지라면 무시
                    if (msg.type === 'ENTER' && !isReceived) {
                        return null;
                    }

                    if (isReceived && msg.type === 'ENTER') {
                        return (
                            <div key={msg.id || `temp-${index}`} className="enter-message">
                                {msg.message}
                            </div>
                        );
                    }

                    return (
                        <div
                            key={msg.id || `temp-${index}`}
                            className={`chat-message-container ${isReceived ? 'received' : 'sent'}`}
                        >
                            {
                                showDate && (
                                    <div className="date-divider">
                                        {new Date(msg.createdAt).toLocaleDateString()}
                                        {/* {currentDate}  */}
                                    </div>
                                )
                            }

                            {isReceived && showUserInfo && (
                                <div className="user-info">
                                    <img
                                        src={msg.userProfile || 'https://i.namu.wiki/i/Bge3xnYd4kRe_IKbm2uqxlhQJij2SngwNssjpjaOyOqoRhQlNwLrR2ZiK-JWJ2b99RGcSxDaZ2UCI7fiv4IDDQ.webp'}
                                        alt={`${msg.nickname}'s profile`}
                                        className="profile-image"
                                    />
                                    <span className="user-name">{msg.nickname}</span>
                                </div>
                            )}

                            <div className={`chat-message ${isReceived ? 'received' : 'sent'}`}>
                                <div className="message-content">
                                    {msg.message}
                                </div>
                                <div className="message-date">
                                    {formatTime(msg.createdAt)} {/* 포맷된 날짜 */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="chat-input-container">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    aria-placeholder="메시지 입력창"
                    onKeyUp={(e) => e.key === 'Enter' && handleSubmit()}
                />
                <button
                    onClick={handleSubmit}
                    className="send-button"
                    disabled={isSending}
                    aria-label="메시지 전송 버튼"
                >
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