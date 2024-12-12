import React, {createContext, useContext, useEffect, useState} from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({
        email: "",
        nickname: "",
        profileImageUrl: "",
        userId: "",
        loginType: ""
    });

    useEffect(() => {
        const storedUser = sessionStorage.getItem("user");
        const loggedIn = sessionStorage.getItem("isLoggedIn");

        if (loggedIn === "true" && storedUser) {
            setUser(JSON.parse(storedUser));
            setIsLoggedIn(true);
        }
    }, []);

    const updateAuthState = (userData, loginState) => {
        setUser(userData);
        setIsLoggedIn(loginState);

        sessionStorage.setItem("user", JSON.stringify(userData));
        sessionStorage.setItem("isLoggedIn", loginState.toString());
    };

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
        <AuthContext.Provider  value={{ isLoggedIn, setIsLoggedIn, user, setUser, updateAuthState }}>
            {children}
        </AuthContext.Provider>
    );
};

// 커스텀 훅
export const useAuth = () => {
    return useContext(AuthContext);
};
