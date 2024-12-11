import React, { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null); // 초기값 명확히 설정

    // JWT 상태 복원 로직
    useEffect(() => {
        const token = localStorage.getItem("accessToken");

        if (token && !isLoggedIn && !user) {
            try {
                const payload = JSON.parse(atob(token.split(".")[1]));
                console.log("JWT 유효:", payload);

                if (payload?.username) {
                    setIsLoggedIn(true);
                    setUser({
                        email: payload.username,
                        nickname: payload.nickname || "Guest",
                        profileImageUrl: payload.profileImageUrl || "",
                        role: payload.role || "ROLE_USER",
                    });

                    console.log("로그인 성공: 사용자 정보 복원 완료");
                } else {
                    console.error("JWT 페이로드 구조가 예상과 다릅니다.");
                    resetAuthState();
                }
            } catch (error) {
                console.error("JWT 디코딩 오류:", error);
                resetAuthState();
            }
        } else if (!token) {
            console.log("JWT 토큰이 없습니다.");
            resetAuthState();
        }
    }, []);

    // 상태 초기화 함수
    const resetAuthState = () => {
        setIsLoggedIn(false);
        setUser(null); // 상태 초기화 시 null로 설정
        console.log("상태 초기화 완료");
    };

    // 상태 변경 시 로그 출력
    useEffect(() => {
        console.log("로그인 상태 업데이트됨:", isLoggedIn);
        console.log("사용자 정보 업데이트됨:", user);
    }, [isLoggedIn, user]);

    return (
        <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser }}>
            {children}
        </AuthContext.Provider>
    );
};

// 커스텀 훅
export const useAuth = () => {
    return useContext(AuthContext);
};
