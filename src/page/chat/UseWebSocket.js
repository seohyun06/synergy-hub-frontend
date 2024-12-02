import { useEffect, useState, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Client } from '@stomp/stompjs';
import SockJS from 'sockjs-client';

const useWebSocket = (
    chatRoomId,
    onMessageReceived,
    onMessagesReceived,
    onMessageDeleted,
    userId,
    nickname
) => {
    const [client, setClient] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        if (!chatRoomId || !userId || !nickname) return;

        const stompClient = new Client({
            webSocketFactory: () => new SockJS('http://localhost:8080/ws'),
            connectHeaders: {
                user: userId.toString(),
            },
            onConnect: () => {
                console.log('STOMP connected');

                // 메시지 수신
                stompClient.subscribe(`/topic/messages/${chatRoomId}`, (message) => {
                    const parsedMessage = JSON.parse(message.body);
                    if (typeof onMessageReceived === 'function') {
                        onMessageReceived(parsedMessage);
                    }
                });

                // 채팅방 별 메시지 조회
                stompClient.subscribe(`/topic/messages/${chatRoomId}`, (message) => {
                    const parsedMessages = JSON.parse(message.body);
                    if (typeof onMessagesReceived === 'function') {
                        onMessagesReceived(parsedMessages);
                    }
                });

                // 메시지 삭제
                stompClient.subscribe(`/topic/message-deletions/${chatRoomId}`, (message) => {
                    const deletedMessageId = JSON.parse(message.body);
                    if (typeof onMessageDeleted === 'function') {
                        onMessageDeleted(deletedMessageId);
                    }
                });
            },
            onStompError: (frame) => {
                console.error('Broker error: ' + frame.headers['message']);
                console.error('Details: ' + frame.body);
            },
        });

        stompClient.activate();
        setClient(stompClient);

        return () => {
            if (stompClient.active) {
                stompClient.deactivate();
            }
        };
    }, [chatRoomId, userId, nickname, onMessageReceived, onMessagesReceived, onMessageDeleted]);

    // 메시지 전송
    const sendMessage = useCallback(
        (messageText, type = 'TALK') => {
            if (client && client.active) {
                const message = {
                    message: messageText,
                    type: type,
                    nickname: nickname,
                };

                client.publish({
                    destination: `/app/chat/message/sendMessage/${chatRoomId}`,
                    body: JSON.stringify(message),
                    headers: { user: userId.toString() },
                });
            }
        },
        [client, chatRoomId, userId, nickname]
    );

    // 채팅방 별 메시지 조회 요청
    const fetchMessagesByRoom = useCallback(() => {
        if (client && client.active) {
            client.publish({
                destination: `/app/chat/message/getMessagesByRoom/${chatRoomId}`,
                headers: { user: userId.toString() },
            });
        }
    }, [client, chatRoomId, userId]);

    // 메시지 삭제
    const deleteMessage = useCallback(
        (messageId) => {
            if (client && client.active) {
                client.publish({
                    destination: `/app/chat/message/deleteMessage/${chatRoomId}`,
                    body: JSON.stringify({ id: messageId }),
                    headers: { user: userId.toString() },
                });
            }
        },
        [client, chatRoomId, userId]
    );

    return {
        sendMessage,
        fetchMessagesByRoom,
        deleteMessage,
    };
};

export default useWebSocket;
