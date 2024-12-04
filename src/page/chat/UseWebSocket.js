import { useEffect, useState, useCallback } from 'react';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useWebSocket = (chatRoomId, onMessageReceived, onMessageDeleted) => {
    const [client, setClient] = useState(null);
    const [isConnected, setIsConnected] = useState(false); // 연결 상태 확인

    useEffect(() => {
        if (!chatRoomId) return;

        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'), // WebSocket 엔드포인트
            debug: (str) => console.log(str), // 디버그 메시지 출력
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
                setIsConnected(false); // 연결 상태 업데이트
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
    }, [chatRoomId]);

    const sendMessage = useCallback(
        (messageContent) => {
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
