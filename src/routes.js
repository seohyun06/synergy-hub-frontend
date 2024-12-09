// src/routes.js
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/mainPage/MainPage";
import TeamPage from "./page/mainPage/TeamPage";
import LoginPage from "./page/member/loginPage";
import SignUpPage from "./page/member/signUpPage";
import Header from './global/Header/Header';
import Sidebar from './global/Sidebar/Sidebar';
import Chat from "./page/chat/Chat";
import ChatRoom from "./page/chat/ChatRoom";
import MyCalendar from "./global/myCalendar/MyCalendar";
import TeamCalendar from "./page/calendar/TeamCalendar";
import CreateNoticePage from "./page/notice/CreateNoticePage";
import NoticePage from "./page/notice/NoticePage";
import NoticeDetailsPage from "./page/notice/NoticeDetailsPage";
import EditNoticePage from "./page/notice/EditNoticePage";
import OAuth2Redirect from "./page/member/Oauth2Redirect";
import TeamChatPage from "./page/chat/TeamChatPage";

// 라우트 상수 정의
export const ROUTES = {
    HOME: '/',
    LOGIN: '/login',
    SIGNUP: '/signup',
    TEAM_MAIN: '/team/main',
    TEAM_VIEW: '/team/view',
    CALENDAR: '/calendar',
    CHAT: '/chat',
    CHAT_ROOM: '/chat/room',
    NOTICES: '/notices',
    NOTICE_CREATE: '/notice',
    NOTICE_DETAILS: '/notice/details',
    NOTICE_EDIT: '/notice/edit',
    OAUTH2_REDIRECT: '/oauth2-jwt-header',
};

// 레이아웃 컴포넌트 정의
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
    { path: ROUTES.HOME, element: <HeaderLayout><MainPage /></HeaderLayout> },
    { path: ROUTES.LOGIN, element: <LoginPage /> },
    { path: ROUTES.SIGNUP, element: <SignUpPage /> },
    { path: `${ROUTES.TEAM_MAIN}?member=:memberId`, element: <Layout><MainPage /></Layout> },
    { path: `${ROUTES.TEAM_VIEW}?team=:teamId`, element: <Layout><TeamPage /></Layout> },
    { path: `${ROUTES.CALENDAR}?team=:teamId`, element: <Layout><TeamCalendar /></Layout> },
    { path: ROUTES.CHAT, element: <Layout><Chat /></Layout> },
    { path: `${ROUTES.CHAT_ROOM}?team=:teamId&chatRoom=:chatRoomId`, element: <Layout><ChatRoom /></Layout> },
    { path: `${ROUTES.NOTICES}?team=:teamId`, element: <Layout><NoticePage /></Layout> },
    { path: `${ROUTES.NOTICE_CREATE}?team=:teamId`, element: <Layout><CreateNoticePage /></Layout> },
    { path: `${ROUTES.NOTICE_DETAILS}?team=:teamId&notice=:noticeId`, element: <Layout><NoticeDetailsPage /></Layout> },
    { path: `${ROUTES.NOTICE_EDIT}?team=:teamId&notice=:noticeId`, element: <Layout><EditNoticePage /></Layout> },
    { path: ROUTES.OAUTH2_REDIRECT, element: <OAuth2Redirect /> },
]);

export default router;
