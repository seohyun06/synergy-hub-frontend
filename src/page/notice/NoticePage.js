import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import './NoticePage.css';

function NoticePage() {
  const [notices, setNotices] = useState([]); // 공지사항 목록 상태
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  useEffect(() => {
    fetch('http://localhost:8080/notices') // 공지사항 목록 API 호출
      .then((response) => response.json())
      .then((data) => setNotices(data))
      .catch((error) => console.error('공지사항 데이터를 불러오는 중 오류 발생:', error));
  }, []);

  const handleCreateNotice = () => navigate('/notice/create'); // 새 공지사항 작성 페이지로 이동

  const handleDeleteNotice = (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      fetch(`http://localhost:8080/notices/${id}`, { method: 'DELETE' })
        .then((response) => {
          if (response.ok) {
            setNotices(notices.filter((notice) => notice.id !== id)); // 삭제 후 상태 업데이트
            alert('공지사항이 삭제되었습니다.');
          } else {
            alert('공지사항 삭제에 실패했습니다.');
          }
        })
        .catch((error) => {
          console.error('삭제 요청 중 오류:', error);
          alert('삭제 도중 오류가 발생했습니다.');
        });
    }
  };

  const formatDate = (dateArray) => {
    if (!dateArray || dateArray.length < 6) return '';
    const [year, month, day, hour, minute] = dateArray;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}
            ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  return (
    <div className="container-fluid">
      <div className="row">
        <main className="col-12 px-4">
          <div className="d-flex justify-content-between align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">공지사항</h1>
            <button className="btn btn-primary" onClick={handleCreateNotice}>+</button>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>글 제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                  <th>삭제</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice) => (
                  <tr key={notice.id}>
                    <td
                      className="clickable-title"
                      onClick={() => navigate(`/notice/${notice.id}`)} // 제목 클릭 시 상세 페이지로 이동
                    >
                      {notice.title}
                    </td>
                    <td>{notice.memberNickname}</td>
                    <td>{formatDate(notice.createdAt)}</td>
                    <td>
                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDeleteNotice(notice.id)}
                      >
                        삭제
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NoticePage;
