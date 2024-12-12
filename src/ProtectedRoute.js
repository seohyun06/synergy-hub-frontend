import React, {useEffect} from "react";
import {Navigate, useNavigate} from "react-router-dom";
import { useAuth } from "./global/AuthContext";

// 로그인된 사용자는 로그인/회원가입 접근 불가
export const PreventLoggedInAccess = ({ children }) => {
    const { isLoggedIn } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            // alert("이미 로그인된 상태입니다.");
            navigate("/team/home", { replace: true });
        }
    }, [isLoggedIn, navigate]);

    return !isLoggedIn && children;
};

// 로그인하지 않은 사용자는 보호된 경로 접근 불가
export const ProtectedRoute = ({ children }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? children : <Navigate to="/login" replace />;
};
