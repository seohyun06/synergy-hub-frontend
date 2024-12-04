import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import useWebSocket from './UseWebSocket'; // WebSocket Hook
import './ChatRoom.css'; // 스타일을 위한 CSS 파일

const ChatRoom = () => {
    const { teamId } = useParams(); // URL에서 teamId 가져오기
    const navigate = useNavigate();

    const [chatRoom, setChatRoom] = useState(null); // 채팅방 정보 상태
    const [messages, setMessages] = useState([]); // 채팅 메시지 상태
    const [messageInput, setMessageInput] = useState(''); // 입력 메시지 상태
    const chatBodyRef = useRef(null); // 채팅창 스크롤 제어

    // WebSocket Hook에서 필요한 함수와 콜백 가져오기
    const { sendMessage, deleteMessage } = useWebSocket(
        chatRoom?.roomId,
        (message) => {
            console.log('Received message:', message);
            setMessages((prevMessages) => [...prevMessages, message]); // 새 메시지를 메시지 목록에 추가
        },
        null, // 메시지 업데이트는 사용하지 않음
        (deletedMessageId) => {
            setMessages((prevMessages) =>
                prevMessages.filter((msg) => msg.id !== deletedMessageId)
            ); // 삭제된 메시지 제거
        }
    );

    // 팀 ID에 기반한 채팅방 정보 로드
    const loadChatRoom = useCallback(async () => {
        try {
            const response = await fetch(`/chat/room/get/${teamId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
            });
            if (!response.ok) throw new Error('Failed to load chat room');
            const roomData = await response.json();
            setChatRoom(roomData);
        } catch (error) {
            console.error('Error loading chat room:', error);
            alert('채팅방 정보를 가져오지 못했습니다.');
        }
    }, [teamId]);

    // 채팅 메시지를 로드하는 함수
    const loadChatMessages = useCallback(async () => {
        if (!chatRoom) return;
        try {
            const response = await fetch(`/chat-message-history/${chatRoom.roomId}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('access')}` },
            });
            if (!response.ok) throw new Error('Failed to load chat messages');
            const chatMessages = await response.json();
            setMessages(chatMessages);
            // 채팅창 스크롤을 맨 아래로 이동
            if (chatBodyRef.current) {
                chatBodyRef.current.scrollTop = chatBodyRef.current.scrollHeight;
            }
        } catch (error) {
            console.error('Error loading chat messages:', error);
        }
    }, [chatRoom]);

    useEffect(() => {
        loadChatRoom(); // 팀 ID에 해당하는 채팅방 정보 로드
    }, [loadChatRoom]);

    useEffect(() => {
        loadChatMessages(); // 채팅 메시지 로드
    }, [loadChatMessages]);

    // 메시지 전송 처리 함수
    const handleSendMessage = () => {
        const trimmedMessage = messageInput.trim();
        if (trimmedMessage === '') return; // 빈 메시지 처리 방지

        const tempMessage = {
            id: `temp-${Date.now()}`,
            text: trimmedMessage,
            sent: true,
            isTemp: true,
        };

        setMessages((prevMessages) => [...prevMessages, tempMessage]); // 임시 메시지를 추가
        sendMessage({ message: trimmedMessage }); // WebSocket으로 메시지 전송
        setMessageInput(''); // 입력창 초기화
    };

    return (
        <div className="chat-room-container">
            {/* 채팅방 헤더 */}
            <div className="chat-room-header">
                <button onClick={() => navigate('/chat')} className="back-button">
                    ← 뒤로
                </button>
                {/*<h2>{chatRoom ? `채팅방: ${chatRoom.teamName}` : '로딩 중...'}</h2>*/}
            </div>

            {/* 채팅 메시지 목록 */}
            <div className="chat-body" ref={chatBodyRef}>
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`chat-message ${msg.sent ? 'sent' : 'received'}`}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* 메시지 입력창 */}
            <div className="chat-input-container">
                <input
                    type="text"
                    value={messageInput}
                    onChange={(e) => setMessageInput(e.target.value)}
                    placeholder="메시지를 입력하세요..."
                    onKeyUp={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <button onClick={handleSendMessage} className="send-button">
                    전송
                </button>
            </div>
        </div>
    );
};

export default ChatRoom;
