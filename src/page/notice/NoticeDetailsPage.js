import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NoticeDetailsPage.css";

function NoticeDetailsPage() {
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const location = useLocation(); // URL에서 쿼리스트링 가져오기
  const [notice, setNotice] = useState(null); // 공지사항 데이터 상태
  const [error, setError] = useState(null); // 오류 상태 관리
  const [isLoading, setIsLoading] = useState(true); // 로딩 상태 관리

  // 쿼리스트링에서 team과 notice 값 추출
  const queryParams = new URLSearchParams(location.search);
  const teamId = queryParams.get("team");
  const noticeId = queryParams.get("notice");

  useEffect(() => {
    // 유효하지 않은 쿼리스트링 값 처리
    if (!teamId || !noticeId) {
      setError("유효하지 않은 팀 ID 또는 공지사항 ID입니다.");
      setIsLoading(false);
      return;
    }

    // 공지사항 상세 데이터 가져오기
    fetch(`http://localhost:8080/notices/${noticeId}?team=${teamId}`)
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
  }, [teamId, noticeId]);

  const handleDelete = () => {
    const token = localStorage.getItem("accessToken");
    if (!token) {
      alert("로그인이 필요합니다.");
      navigate("/login");
      return;
    }

    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:8080/notices/${noticeId}?team=${teamId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      })
          .then((response) => {
            if (response.ok) {
              alert("공지사항이 삭제되었습니다.");
              navigate(`/notices?team=${teamId}`);
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

 const handleGoToComment = () => {
   // 댓글 페이지로 이동 (noticeId와 teamId를 쿼리 파라미터로 전달)
   navigate(`/comments/noticeId=${noticeId}&team=${teamId}`);
 };


  if (isLoading) {
    return <div>공지사항 데이터를 불러오는 중...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
      <div className="container-fluid">
        <main className="col-md-10">
          <div className="notice-details">
            <h1 className="notice-title">{notice.title}</h1>
            <div className="notice-meta">
              <span className="notice-author">작성자: {notice.memberNickname}</span>
              <span className="notice-date">작성일: {notice.createdAt}</span>
            </div>
            <hr />
            {notice.imageUrl && (
                <div className="notice-image">
                  <img
                      src={notice.imageUrl}
                      alt="공지사항 이미지"
                      className="img-fluid"
                  />
                </div>
            )}
            <div className="notice-content">{notice.content}</div>
            <div className="notice-actions">
              <button
                  className="btn btn-primary"
                  onClick={() =>
                      navigate(`/notice/edit?team=${teamId}&notice=${noticeId}`)
                  }
              >
                수정
              </button>
              <button className="btn btn-danger" onClick={handleDelete}>
                삭제
              </button>
              {/* 댓글 보기 버튼 추가 */}
              <button className="btn btn-info" onClick={handleGoToComment}>
                댓글 보기
              </button>
            </div>
          </div>
        </main>
      </div>
  );
}

export default NoticeDetailsPage;
