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
import Comment from "./page/notice/Comment";
// src/routes.js
export const ROUTES = {
    HOME: '/',
    CALENDAR: '/calendar',
    CHAT: '/chat',
    NOTICES: '/notices',
};
// Layout 컴포넌트
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
// HeaderLayout 컴포넌트 (헤더만 표시)
const HeaderLayout = ({ children }) => (
    <div className="app">
        <Header />
        <div className="main-content-full">{children}</div>
    </div>
);
// 라우터 정의
const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <HeaderLayout>
                <MainPage />
            </HeaderLayout>
        ),
    },
    {
        path: "/team/:id",
        element: (
            <Layout>
                <TeamPage />
            </Layout>
        ),
    },
    {
        path: "/login",
        element: (
            <LoginPage />
        ),
    },
    {
        path: "/signup",
        element: (
            <SignUpPage />
        ),
    },
    {
        path: "/chat",
        element: (
            <Layout>
                <Chat />
            </Layout>
        ),
    },
    {
        path: "/chat/:chatRoomId",
        element: (
            <Layout>
                <ChatRoom />
            </Layout>
        ),
    },
    {
        path: "/team-chat/:teamId",
        element: (
            <Layout>
                <TeamChatPage />
            </Layout>
        ),
    },
    {
        path: "//team/:id/calendar",
        element: (
            <Layout>
                <TeamCalendar />
            </Layout>
        ),
    },
    {
        path: "/notice",
        element: (
            <Layout>
                <CreateNoticePage />
            </Layout>
        ),
        query: "team={teamId}",
    },
    {
        path: "/notices",
        element: (
            <Layout>
                <NoticePage />
            </Layout>
        ),
        query: "team={teamId}",
    },
    {
        path: "/notice/details",
        element: (
            <Layout>
                <NoticeDetailsPage />
            </Layout>
        ),
        query: "team={teamId}&notice={noticeId}",
    },
    {
        path: "/notice/edit",
        element: (
            <Layout>
                <EditNoticePage />
            </Layout>
        ),
        query: "team={teamId}&notice={noticeId}",
    },
    {
        path: "/oauth2-jwt-header",  // 수정 페이지 경로 추가
        element: (
            <OAuth2Redirect />
        ),
    },
    {
        path: "/comments/:noticeId",  // 댓글 페이지 경로 추가
        element: (
            <Layout>
                <Comment /> {/* 댓글 페이지 컴포넌트 */}
            </Layout>
        ),
    },
]);
export default router;