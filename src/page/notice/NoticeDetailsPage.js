import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./NoticeDetailsPage.css";

function NoticeDetailsPage() {
  const { id } = useParams(); // URL에서 ID 추출
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const [notice, setNotice] = useState(null); // 공지사항 데이터 상태
  const [error, setError] = useState(null); // 오류 상태 관리

  useEffect(() => {
    // 공지사항 상세 데이터 가져오기
    fetch(`http://localhost:8080/notices/${id}`)
        .then((response) => {
          if (!response.ok) {
            if (response.status === 404) {
              throw new Error("공지사항을 찾을 수 없습니다.");
            }
            throw new Error("데이터를 불러오는 중 문제가 발생했습니다.");
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
        });
  }, [id]);

  const handleEdit = () => {
    navigate(`/notice/edit/${id}`); // 수정 페이지로 이동
  };

  const handleDelete = () => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      fetch(`http://localhost:8080/notices/${id}`, { method: "DELETE" })
          .then((response) => {
            if (response.ok) {
              alert("공지사항이 삭제되었습니다.");
              navigate("/notices"); // 삭제 후 목록 페이지로 이동
            } else {
              alert("공지사항 삭제에 실패했습니다.");
            }
          })
          .catch((error) => {
            console.error("삭제 요청 중 오류 발생:", error);
            alert("삭제 요청 중 오류가 발생했습니다.");
          });
    }
  };

  const formatDate = (dateArray) => {
    if (!Array.isArray(dateArray) || dateArray.length < 6) return "";
    const [year, month, day, hour, minute, second] = dateArray;
    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")} 
      ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
  };

  if (error) {
    return <div className="error-message">{error}</div>; // 오류 메시지 출력
  }

  if (!notice) {
    return <div>공지사항 데이터를 불러오는 중...</div>; // 로딩 메시지
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
              {notice.updatedAt && (
                  <span className="notice-date">
                수정일: {formatDate(notice.updatedAt)}
              </span>
              )}
            </div>
            {notice.imageUrl && (
                <div className="notice-image">
                  <img src={notice.imageUrl} alt="공지 이미지" className="img-fluid" />
                </div>
            )}
            <hr />
            <div className="notice-content">{notice.content}</div>
            <div className="notice-actions">
              <button className="btn btn-primary" onClick={handleEdit}>
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
