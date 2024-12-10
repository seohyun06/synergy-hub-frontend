import { useEffect, useState, useCallback } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import { ROUTES } from "../../global/Links";
import { useAuth } from "../../global/AuthContext";



const useWebSocket = (chatRoomId, onMessageReceived, onMessageDeleted) => {
    const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false); // 연결 상태 확인
    const [authToken, setAuthToken] = useState(localStorage.getItem('accessToken')); // 액세스 토큰 상태 관리

    const { isLoggedIn, setIsLoggedIn, user, setUser } = useAuth();


    useEffect(() => {
        if (!chatRoomId) return;

        const authToken = localStorage.getItem('accessToken'); // 인증 토큰 가져오기
        console.log("액세드 토큰 : ", authToken);

        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'), // WebSocket 엔드포인트
            debug: (str) => console.log(str), // 디버그 메시지 출력
            connectHeaders: {
                Authorization: `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
            },
            onConnect: () => {
                console.log('WebSocket 연결 성공');
                setIsConnected(true); // 연결 상태 업데이트

                // 메시지 수신 구독
                stompClient.subscribe(`/topic/messages/${chatRoomId}`, (message) => {
                    const parsedMessage = JSON.parse(message.body);
                    if (onMessageReceived) onMessageReceived(parsedMessage);
                });

                // 메시지 삭제 구독
                stompClient.subscribe(`/topic/message-deletions/${chatRoomId}`, (message) => {
                    const deletedMessageId = JSON.parse(message.body);
                    if (onMessageDeleted) onMessageDeleted(deletedMessageId);
                });
            },
            onDisconnect: () => {
                console.log('WebSocket 연결 종료');
                setIsConnected(false); // 연결 상태 업데이트
            },
            onStompError: (frame) => {
                console.error('STOMP 에러:', frame.headers['message']);
                console.error('상세 내용:', frame.body);
                // if (frame.headers['message'] === 'Unauthorized') {
                    handleReissue(); // 401 Unauthorized 처리
                // }
            },
        });

        stompClient.activate();
        setClient(stompClient);

        return () => {
            if (stompClient.active) {
                stompClient.deactivate();
                console.log('WebSocket 연결 종료');
            }
        };
    }, [chatRoomId, authToken]);

    // const handleReissue = async () => {
    //     try {
    //         const response = await fetch(ROUTES.REISSUE.link, {
    //             method: 'POST',
    //             credentials: 'include', // 쿠키 포함
    //         });

    //         if (response.ok) {
    //             const token = response.headers.get("Authorization");
    //             if (token) {
    //                 const newToken = token.split(" ")[1];
    //                 localStorage.setItem("accessToken", newToken);
    //                 setAuthToken(newToken); // 새로운 토큰을 상태에 저장하여 useEffect를 트리거
    //                 console.log('새로운 토큰 발급 성공:', newToken);
                    
    //                 // 클라이언트를 비활성화하고 새로운 클라이언트를 활성화
    //                 if (client && client.active) {
    //                     client.deactivate();
    //                 }
    //                 const newClient = new Client({
    //                     webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
    //                     debug: (str) => console.log(str),
    //                     connectHeaders: {
    //                         Authorization: `Bearer ${newToken}`, // 새로운 토큰 사용
    //                     },
    //                     onConnect: () => {
    //                         console.log('WebSocket 재연결 성공');
    //                         setIsConnected(true);
    //                     },
    //                     onDisconnect: () => {
    //                         console.log('WebSocket 재연결 종료');
    //                         setIsConnected(false);
    //                     },
    //                 });
    //                 newClient.activate(); // 새로운 클라이언트 활성화
    //                 setClient(newClient); // 새로운 클라이언트를 상태에 저장
    //             } else {
    //                 alert("reissue 오류");
    //             }
    //         } else {
    //             console.error('토큰 재발급 실패:', response.status);
    //         }
    //     } catch (error) {
    //         console.error('재발급 요청 중 오류 발생:', error);
    //     }
    // };

    const handleReissue = async () => {
        try {
            const response = await fetch('/reissue', {
                method: 'POST',
                credentials: 'include', // 쿠키 포함
            });

            if (response.ok) {


                const token = response.headers.get("Authorization"); 
                    
                if (token) {
                    const newToken = token.split(" ")[1];
            
                    localStorage.setItem("accessToken", newToken);
                    console.log('새로운 토큰 발급 성공:', newToken);
                    client.activate(); // 필요 시 재연결
                } else {
                    alert("reissue 오류");
                }

            } else {
                console.error('토큰 재발급 실패:', response.status);
            }
        } catch (error) {
            console.error('재발급 요청 중 오류 발생:', error);
        }
    };

    const sendMessage = useCallback(

        (messageContent) => {
            console.log(messageContent);
            if (isConnected && client && client.active) {
                client.publish({
                    destination: `/app/chat/message/sendMessage/${chatRoomId}`,
                    body: JSON.stringify({
                        message: messageContent,
                        type: 'TALK', // 메시지 타입 (예: TALK)
                    }),
                });
            } else {
                console.error('WebSocket 클라이언트가 활성 상태가 아니거나 연결되지 않았습니다.');
            }
        },
        [client, chatRoomId, isConnected]
    );

    // const sendMessage = () => {
    //     if (chat === "") {
    //         return;
    //     }

    //     if (isConnected && client && client.active) {
    //         client.publish({
    //             destination: `/app/chat/message/sendMessage/${chatRoomId}`,
    //             body: JSON.stringify({
    //                 message: chat,
    //                 type: 'TALK', // 메시지 타입 (예: TALK)
    //             }),
    //         });
    //     } else {
    //         console.error('WebSocket 클라이언트가 활성 상태가 아니거나 연결되지 않았습니다.');
    //     }
    // };

    const deleteMessage = useCallback(
        (messageId) => {
            if (isConnected && client && client.active) {
                client.publish({
                    destination: `/app/chat/message/deleteMessage/${chatRoomId}`,
                    body: JSON.stringify({
                        id: messageId,
                    }),
                });
            } else {
                console.error('WebSocket 클라이언트가 활성 상태가 아니거나 연결되지 않았습니다.');
            }
        },
        [client, chatRoomId, isConnected]
    );

    return { sendMessage, deleteMessage, isConnected }; // 연결 상태를 반환
};

export default useWebSocket;
