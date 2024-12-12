import axios from "axios";

// 환경 변수에서 baseURL 가져오기
const baseURL = 'http://34.64.235.3:8080';

// Axios 인스턴스 생성
const apiClient = axios.create({
    baseURL,
    headers: {
        "Content-Type": "application/json",
    },
});

// 요청 인터셉터 (예: 인증 토큰 추가)
apiClient.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("accessToken"); // 토큰 가져오기
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Authorization 헤더에 토큰 추가
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// 응답 인터셉터 (예: 에러 처리)
apiClient.interceptors.response.use(
    (response) => response,
    (error) => {
        console.error("API 응답 에러:", error);
        return Promise.reject(error);
    }
);

export default apiClient;
