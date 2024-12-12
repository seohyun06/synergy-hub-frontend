import React, { useCallback, useState, useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import * as StompJs from '@stomp/stompjs';
import SockJS from 'sockjs-client';
import styles from "./ChatRoom.module.css";
import './ChatRoom.css';
import { useAuth } from "../../global/AuthContext";

// import {
//     CameraIcon,
//     ChevronLeftIcon,
//     MegaphoneIcon,
// } from "@heroicons/react/24/outline";
// import { ArrowUpCircleIcon } from "@heroicons/react/24/solid";


const ChatRoomFix = () => {
    const { chatRoomId } = useParams();
    const navigate = useNavigate();
    const { user } = useAuth();
    const param = useParams();
    const chatroomId = param.chatRoomId;
    const [authToken, setAuthToken] = useState("");

    console.log("액세스 토큰 : ", authToken);

    // user 닉네임 가져오기
    const userNickname = user.nickname;
    const userProfile = user.profileImageUrl;

    const nickName = localStorage.getItem('userNickname');



    let [client, changeClient] = useState(null);
    const [chat, setChat] = useState(""); // 입력된 chat을 받을 변수
    const [chatList, setChatList] = useState([]); // 채팅 기록

    const connect = () => {
        try {
            const clientdata = new StompJs.Client({
                webSocketFactory: () => new SockJS(`${process.env.REACT_APP_API_URL}/ws`),
                connectHeaders: {
                    Authorization: `Bearer ${authToken}`, // 헤더에 인증 토큰 추가
                },
                debug: function (str) {
                    console.log(str);
                },
                reconnectDelay: 5000, // 자동 재연결
                heartbeatIncoming: 4000,
                heartbeatOutgoing: 4000,
            });
    
            // 구독
            clientdata.onConnect = function () {
                clientdata.subscribe('/topic/messages/' + chatroomId, callback);
            };
    
            clientdata.activate(); // 클라이언트 활성화
            changeClient(clientdata); // 클라이언트 갱신
        } catch (err) {
            console.log(err);
        }
    };

    const sendChat = () => {
        if (chat === "") {
            return;
        }

        client.publish({
            destination: '/app/chat/message/sendMessage/' + chatroomId,
            body: JSON.stringify({
                type: 'TALK',
                sender: userNickname,
                channelId: chatroomId,
                message: { text: chat },
            }),
        });

        setChat("");
    };


    // 내가 보낸 메시지, 받은 메시지에 각각의 스타일을 지정해 주기 위함
    const msgBox = chatList.map((item, idx) => {
        if (item.sender !== userNickname) {
            return (
                <div key={idx} className={styles.otherchat}>
                    <div className={styles.otherimg}>
                        <img src={userProfile} alt="" />
                    </div>
                    <div className={styles.othermsg}>
                        <span>{item.message}</span>
                    </div>
                    <span className={styles.otherdate}>{item.date}</span>
                </div>
            );
        } else {
            return (
                <div key={idx} className={styles.mychat}>
                    <div className={styles.mymsg}>
                        <span>{item.message}</span>
                    </div>
                    <span className={styles.mydate}>{item.date}</span>
                </div>
            );
        }
    });


    return (
        <>
            {/* {JSON.stringify(user)} */}
            {/* <GlobalStyle/> */}
            <div className={styles.container}>
                {/* 상단 네비게이션 */}
                <div className={styles.topbar}>
                    <ChevronLeftIcon
                        onClick={() => {
                            navigate("/chatlist ");
                        }}
                    />
                    <span>상대방 이름</span>
                    <MegaphoneIcon onClick={() => navigate(`/report/1`)} />
                </div>

                {/* 채팅 리스트 */}
                <div className={styles.chatbox}>{msgBox}</div>

                {/* 하단 입력폼 */}
                <form className={styles.sendzone} onSubmit={handleSubmit}>
                    {/* <input type="file" accept='image/*'/>  */}
                    <CameraIcon className={styles.cameraicon} />
                    <div className={styles.inputbar}>
                        <div>
                            <input
                                type="text"
                                id="msg"
                                value={chat}
                                placeholder="메시지 보내기"
                                className={styles.input}
                                onChange={onChangeChat}
                                onKeyDown={(ev) => {
                                    if (ev.keyCode === 13) {
                                        sendChat();
                                    }
                                }}
                            />
                        </div>
                        <ArrowUpCircleIcon
                            value="전송"
                            className={styles.sendbtn}
                            onClick={sendChat}
                        />
                    </div>
                </form>
            </div>
        </>
    );

}

export default ChatRoomFix