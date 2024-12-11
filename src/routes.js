import React from "react";
import { createBrowserRouter } from "react-router-dom";
import MainPage from "./page/mainPage/MainPage";
import TeamPage from "./page/mainPage/TeamPage";
import LoginPage from "./page/member/loginPage";
import SignUpPage from "./page/member/signUpPage";
import Header from './global/Header/Header';
import Sidebar from './global/Sidebar/Sidebar';
import ChatRoom from "./page/chat/ChatRoom4";
import MyCalendar from "./global/myCalendar/MyCalendar";
import TeamCalendar from "./page/calendar/TeamCalendar";
import CreateNoticePage from "./page/notice/CreateNoticePage";
import NoticePage from "./page/notice/NoticePage";
import NoticeDetailsPage from "./page/notice/NoticeDetailsPage";
import EditNoticePage from "./page/notice/EditNoticePage";
import OAuth2Redirect from "./page/member/Oauth2Redirect";
import Comment from "./page/notice/Comment";
import { PreventLoggedInAccess } from "./ProtectedRoute";

// 라우트 상수 정의
export const ROUTES = {
    HOME: '/',
    TEAM_HOME: '/team/home',
    LOGIN: '/login',
    SIGNUP: '/signup',
    TEAM_MAIN: '/team/main',
    TEAM_VIEW: '/team/view',
    CALENDAR: '/calendar',
    CHAT_ROOM: '/chat/',
    NOTICES: '/notices',
    NOTICE_CREATE: '/notice',
    NOTICE_DETAILS: '/notice/details',
    NOTICE_EDIT: '/notice/edit',
    OAUTH2_REDIRECT: '/oauth2-jwt-header',
    COMMENTS: '/comments/:noticeId',
    MY_CALENDAR: '/my-calendar'
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

// 스크롤 안되게 설정
const ChatLayout = ({ children }) => (
    <div className="app">
        <Header />
        <div className="app-body">
            <Sidebar />
            <div className="main-chat">{children}</div>
            <MyCalendar />
        </div>
    </div>
);

// 라우터 정의
const router = createBrowserRouter([
    // 메인 페이지
    { path: ROUTES.TEAM_HOME, element: <HeaderLayout><MainPage /></HeaderLayout> },

    // 로그인 및 회원가입
    {
        path: ROUTES.HOME,
        element: (
            <PreventLoggedInAccess>
                <LoginPage />
            </PreventLoggedInAccess>
        ),
    },
    {
        path: ROUTES.SIGNUP,
        element: (
            <PreventLoggedInAccess>
                <SignUpPage />
            </PreventLoggedInAccess>
        ),
    },

    // 팀 관련 경로
    { path: ROUTES.TEAM_MAIN, element: <Layout><MainPage /></Layout> },
    { path: ROUTES.TEAM_VIEW, element: <Layout><TeamPage /></Layout> },

    // 캘린더 관련 경로
    { path: ROUTES.CALENDAR, element: <Layout><TeamCalendar /></Layout> },

    // 채팅방 관련 경로
    { path: ROUTES.CHAT_ROOM, element: <ChatLayout><ChatRoom /></ChatLayout> },

    // 공지사항 관련 경로
    { path: ROUTES.NOTICES, element: <Layout><NoticePage /></Layout> },
    { path: ROUTES.NOTICE_CREATE, element: <Layout><CreateNoticePage /></Layout> },
    { path: ROUTES.NOTICE_DETAILS, element: <Layout><NoticeDetailsPage /></Layout> },
    { path: ROUTES.NOTICE_EDIT, element: <Layout><EditNoticePage /></Layout> },

    // 댓글 페이지
    { path: ROUTES.COMMENTS, element: <Layout><Comment /></Layout> },

    // OAuth2 리다이렉트
    { path: ROUTES.OAUTH2_REDIRECT, element: <OAuth2Redirect /> },

    {path: ROUTES.MY_CALENDAR, element: <Layout><MyCalendar /></Layout>,},
]);

export default router;
