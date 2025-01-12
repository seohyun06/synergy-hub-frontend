// src/routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/mainPage/MainPage";
import TeamPage from "./page/mainPage/TeamPage";
import LoginPage from "./page/member/loginPage";
import SignUpPage from "./page/member/signUpPage";
import Header from './global/Header/Header';
import Sidebar from './global/Sidebar/Sidebar';
import ChatRoom from "./page/chat/ChatRoom";
import MyCalendar from "./global/myCalendar/MyCalendar";
import TeamCalendar from "./page/calendar/TeamCalendar";
import CreateNoticePage from "./page/notice/CreateNoticePage";
import NoticePage from "./page/notice/NoticePage";
import NoticeDetailsPage from "./page/notice/NoticeDetailsPage";
import EditNoticePage from "./page/notice/EditNoticePage";
import OAuth2Redirect from "./page/member/Oauth2Redirect";
import Comment from "./page/notice/Comment"

// 라우트 상수 정의
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    TEAM_MAIN: '/team/main',
    TEAM_VIEW: '/team/view',
    CALENDAR: '/calendar',
    CHAT_ROOM: '/chat/:chatRoomId',
    NOTICES: '/notices',
    NOTICE_CREATE: '/notice',
    NOTICE_DETAILS: '/notice/details',
    NOTICE_EDIT: '/notice/edit',
    OAUTH2_REDIRECT: '/oauth2-jwt-header',
    COMMENTS: '/comments/:noticeId'
};

// 공통 레이아웃 정의
const Layout = ({ children }) => (
    <div className="app">
        <Header />
        <div className="app-body">
            <Sidebar />
            <div className="main-content">{children}</div>
            <MyCalendar />
        </div>
    </div>
);

const HeaderLayout = ({ children }) => (
    <div className="app">
        <Header />
        <div className="main-content-full">{children}</div>
    </div>
);

// 라우터 정의
const router = createBrowserRouter([
    // 메인 페이지
    { path: ROUTES.HOME, element: <HeaderLayout><MainPage /></HeaderLayout> },

    // 로그인 및 회원가입
    { path: ROUTES.LOGIN, element: <LoginPage /> },
    { path: ROUTES.SIGNUP, element: <SignUpPage /> },

    // 팀 관련 경로
    { path: `${ROUTES.TEAM_MAIN}?member=:memberId`, element: <Layout><MainPage /></Layout> },
    { path: `${ROUTES.TEAM_VIEW}?team=:teamId`, element: <Layout><TeamPage /></Layout> },

    // 캘린더 관련 경로
    { path: `${ROUTES.CALENDAR}?team=:teamId`, element: <Layout><TeamCalendar /></Layout> },

    // 채팅방 관련 경로
    { path: ROUTES.CHAT_ROOM, element: <Layout><ChatRoom /></Layout> },

    // 공지사항 관련 경로
    { path: ROUTES.NOTICES, element: <Layout><NoticePage /></Layout> },
    { path: ROUTES.NOTICE_CREATE, element: <Layout><CreateNoticePage /></Layout> },
    { path: ROUTES.NOTICE_DETAILS, element: <Layout><NoticeDetailsPage /></Layout> },
    { path: ROUTES.NOTICE_EDIT, element: <Layout><EditNoticePage /></Layout> },

    // 댓글 페이지
    { path: ROUTES.COMMENTS, element: <Layout><Comment /></Layout> },

    // OAuth2 리다이렉트
    { path: ROUTES.OAUTH2_REDIRECT, element: <OAuth2Redirect /> },
]);

export default router;
