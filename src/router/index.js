import React from 'react';
import { Routes, Route } from "react-router-dom";

import { ScrollToTop } from '../components';

// Pages
import Home from '../pages/Home';
import NotFound from '../pages/error/NotFound';

// Apps
import AppCalendar from '../pages/AppCalendar';
import KanbanBasic from '../pages/kanban/KanbanBasic';
import KanbanCustom from '../pages/kanban/KanbanCustom';
import Chats from '../pages/apps/chat/Chats';

// User management
import UserList from '../pages/user-manage/UserList';
import UserCards from '../pages/user-manage/UserCards';
import UserProfile from '../pages/user-manage/UserProfile';
import UserEdit from '../pages/user-manage/UserEdit';

// Auth pages
import AuthRegister from '../pages/auths/AuthRegister';
import AuthLogin from '../pages/auths/AuthLogin';
import AuthReset from '../pages/auths/AuthReset';

function Router() {
    return (
        <ScrollToTop>
            <Routes>
                {/* Home */}
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* Apps */}
                <Route path="apps">
                    <Route path="calendar" element={<AppCalendar />} />
                    <Route path="kanban/basic" element={<KanbanBasic />} />
                    <Route path="kanban/custom" element={<KanbanCustom />} />
                    <Route path="chats" element={<Chats />} />
                </Route>

                {/* User Management */}
                <Route path="user-manage">
                    <Route path="user-list" element={<UserList />} />
                    <Route path="user-cards" element={<UserCards />} />
                    <Route path="user-profile/:id" element={<UserProfile />} />
                    <Route path="user-edit/:id" element={<UserEdit />} />
                </Route>

                {/* Auth Pages */}
                <Route path="auths">
                    <Route path="auth-register" element={<AuthRegister />} />
                    <Route path="auth-login" element={<AuthLogin />} />
                    <Route path="auth-reset" element={<AuthReset />} />
                </Route>

                {/* Error Page */}
                <Route path="not-found" element={<NotFound />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </ScrollToTop>
    );
}

export default Router;
