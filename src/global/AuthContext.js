import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        profileImageUrl: "",
    });

    // 앱 초기 로드 시 JWT 확인
    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token) {
            try {
                // JWT 디코딩 시 사용자 정보 복원 (jwt-decode 라이브러리 사용 가능)
                const payload = JSON.parse(atob(token.split(".")[1]));
                setIsLoggedIn(true);
                setUser({
                    email: payload.email || "unknown",
                    nickname: payload.nickname || "Guest",
                    profileImageUrl: payload.profileImageUrl || "",
                });
                console.log("JWT 유효:", payload);
            } catch (error) {
                console.error("JWT 디코딩 오류:", error);
                localStorage.removeItem("accessToken");
                resetAuthState();
            }
        } else {
            resetAuthState();
        }
    }, []);

    // 상태 초기화
    const resetAuthState = () => {
        setIsLoggedIn(false);
        setUser({
            email: "",
            nickname: "",
            profileImageUrl: "",
        });
    };

    // 상태 변경 시 로그 출력
    useEffect(() => {
        console.log("로그인 상태:", isLoggedIn);
        console.log("사용자 정보:", user);
    }, [isLoggedIn, user]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
