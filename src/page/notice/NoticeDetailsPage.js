import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NoticeDetailsPage.css";

function NoticeDetailsPage() {
  const { id } = useParams(); // URL에서 ID 추출
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const [notice, setNotice] = useState(null); // 공지사항 데이터 상태
  const [error, setError] = useState(null); // 오류 상태 관리
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리
  const noticeId = parseInt(id, 10); // 숫자로 변환

  // 날짜 배열을 포맷팅하는 함수
  const formatDate = (dateArray) => {
    if (!Array.isArray(dateArray) || dateArray.length < 6) return "날짜 정보 없음";
    const [year, month, day, hour, minute, second] = dateArray;

    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} 
      ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };

  useEffect(() => {
    // 잘못된 ID일 경우 처리
    if (isNaN(noticeId)) {
      setError("잘못된 공지사항 ID입니다.");
      setIsLoading(false);
      return;
    }

    // 공지사항 상세 데이터 가져오기
    fetch(`http://localhost:8080/notices/${noticeId}`)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("공지사항을 찾을 수 없습니다.");
            }
            throw new Error("서버에서 데이터를 불러오는 중 문제가 발생했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          setNotice(data);
          setError(null); // 오류 상태 초기화
        })
        .catch((err) => {
          console.error("데이터 불러오기 오류:", err.message);
          setError(err.message);
        })
        .finally(() => setIsLoading(false)); // 로딩 상태 해제
  }, [noticeId]);

  const handleDelete = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login"); // 로그인 페이지로 이동
      return;
    }

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:8080/notices/${noticeId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
          .then((response) => {
            if (response.ok) {
              alert("공지사항이 삭제되었습니다.");
              navigate("/notices");
            } else {
              return response.json().then((data) => {
                throw new Error(data.message || "공지사항 삭제에 실패했습니다.");
              });
            }
          })
          .catch((error) => {
            console.error("삭제 요청 중 오류 발생:", error.message);
            alert(`삭제 중 오류가 발생했습니다: ${error.message}`);
          });
    }
  };



  if (isLoading) {
    return <div>공지사항 데이터를 불러오는 중...</div>; // 로딩 메시지
  }

  if (error) {
    return <div className="error-message">{error}</div>; // 오류 메시지 출력
  }

  return (
      <div className="container-fluid">
        <main className="col-md-10">
          <div className="notice-details">
            <h1 className="notice-title">{notice.title}</h1>
            <div className="notice-meta">
              <span className="notice-author">작성자: {notice.memberNickname}</span>
              <span className="notice-date">
              작성일: {formatDate(notice.createdAt)}
            </span>
            </div>
            <hr />
            <div className="notice-content">{notice.content}</div>
            <div className="notice-actions">
              <button
                  className="btn btn-primary"
                  onClick={() => navigate(`/notice/edit/${noticeId}`)}
              >
                수정
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                삭제
              </button>
            </div>
          </div>
        </main>
      </div>
  );
}

export default NoticeDetailsPage;
