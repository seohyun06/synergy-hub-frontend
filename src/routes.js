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

// 라우터 정의
const router = createBrowserRouter([
    {
        path: "/",
        element: <MainPage />, // MainPage는 Layout 없이 렌더링
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
            <Layout>
                <LoginPage />
            </Layout>
        ),
    },
    {
        path: "/signup",
        element: (
            <Layout>
                <SignUpPage />
            </Layout>
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
        path: "/teamCalendar",
        element: (
            <Layout>
                <TeamCalendar />
            </Layout>
        ),
    },
]);

export default router;
