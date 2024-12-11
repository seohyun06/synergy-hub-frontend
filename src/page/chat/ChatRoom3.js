import axios from "axios";
import React, { useEffect, useState, useRef } from "react";
import { Stomp } from "@stomp/stompjs";
import { useParams } from "react-router-dom";
import './ChatRoom.css';

import * as StompJs from '@stomp/stompjs'

const ChatRoom3 = () => {

    const [selectedNumber, setSelectedNumber] = useState([]);

    const numbers = [1, 2, 3, 4, 5]; // 회원 번호를 위한 숫자 배열

    const handleNumberClick = (number) => {
        setSelectedNumber(number);
    };

    const { chatRoomId } = useParams();

    console.log("roomId:", chatRoomId);
    // const roomId = 1;
    // const { chatRoomId } = useParams();


    const stompClient = useRef(null);
    // 채팅 내용들을 저장할 변수
    const [messages, setMessages] = new useState([]);
    // 사용자 입력을 저장할 변수
    const [inputValue, setInputValue] = useState('');
    // 입력 필드에 변화가 있을 때마다 inputValue를 업데이트
    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };
    // 웹소켓 연결 설정
    const connect = () => {
        const authToken = localStorage.getItem('accessToken'); // 인증 토큰 가져오기
        const socket = new WebSocket("ws://localhost:8080/ws");
        stompClient.current = Stomp.over(socket);
        stompClient.current.connect(
            { Authorization: `Bearer ${authToken}` }, // 여기서 헤더로 인증 토큰 전달
            {}, () => {
                stompClient.current.subscribe(`/topic/messages/` + chatRoomId, (message) => {
                    const newMessage = JSON.parse(message.body);
                    setMessages((prevMessages) => [...prevMessages, newMessage]);
                });
            });
    };
    // 웹소켓 연결 해제
    const disconnect = () => {
        if (stompClient.current) {
            stompClient.current.disconnect();
        }
    };
    // 기존 채팅 메시지를 서버로부터 가져오는 함수
    const fetchMessages = () => {
        axios.get("http://localhost:8080/chat/messageList/" + chatRoomId)
            .then(response => { setMessages(response.data) });
    };
    useEffect(() => {
        connect();
        // fetchMessages();
        // 컴포넌트 언마운트 시 웹소켓 연결 해제
        return () => disconnect();
    }, []);

    //메세지 전송
    const sendMessage = () => {
        if (stompClient.current && inputValue) {
            const body = {
                // roomId: roomId,
                message: { text: inputValue },
                // writerId: selectedNumber,
                type: 'TALK',

            };
            stompClient.current.send(`/app/chat/message/sendMessage/` + chatRoomId, {}, JSON.stringify(body));
            setInputValue('');
        }
    };

    return (
        <div>
            <ul>
                <div style={{ display: 'flex' }}>
                    {numbers.map((number, index) => (
                        <div
                            key={index}
                            className={`num-${number}`}
                            onClick={() => handleNumberClick(number)}
                            style={{
                                marginRight: '5px',
                                padding: '5px',
                                width: '40px',
                                height: '25px',
                                border: '1px solid black',
                                borderRadius: '5px',
                                textAlign: 'center',
                            }}
                        >
                            {number}
                        </div>
                    ))}
                    <p style={{ marginTop: '7px' }}>회원 번호: {selectedNumber}</p>
                </div>
                <div>
                    {/* 입력 필드 */}
                    <input
                        type="text"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    {/* 메시지 전송, 메시지 리스트에 추가 */}
                    <button onClick={sendMessage}>입력</button>
                </div>
                {/* 메시지 리스트 출력 */}
                {messages.map((item, index) => (
                    <div key={index} className={`list-items num-${item.writerId}`}>{item.content}</div>
                ))}
            </ul>
        </div>
    );
}
export default ChatRoom3;