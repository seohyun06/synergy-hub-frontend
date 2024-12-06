import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // 페이지 이동을 위한 훅
import './NoticePage.css';

function NoticePage() {
  const [notices, setNotices] = useState([]); // 공지사항 목록 상태
  const [page, setPage] = useState(0); // 현재 페이지
  const [size, setSize] = useState(10); // 페이지 크기
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [totalElements, setTotalElements] = useState(0); // 전체 항목 수
  const navigate = useNavigate(); // 페이지 이동을 위한 훅

  const fetchNotices = () => {
    const teamId = 1; // 팀 ID를 필요에 따라 수정하세요.
    const sortField = "createdAt";
    const sortDirection = "desc";

    fetch(
        `http://localhost:8080/notices/teams/${teamId}/notices?page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`
    )
        .then((response) => response.json())
        .then((data) => {
          setNotices(data.content); // 공지사항 목록 설정
          setTotalPages(data.totalPages); // 전체 페이지 수 설정
          setTotalElements(data.totalElements); // 전체 항목 수 설정
        })
        .catch((error) => console.error('공지사항 데이터를 불러오는 중 오류 발생:', error));
  };

  useEffect(() => {
    fetchNotices();
  }, [page, size]);

  const handleCreateNotice = () => navigate('/notice/create'); // 새 공지사항 작성 페이지로 이동

  const handleDeleteNotice = (id) => {
    if (window.confirm('정말로 삭제하시겠습니까?')) {
      fetch(`http://localhost:8080/notices/${id}`, { method: 'DELETE' })
          .then((response) => {
            if (response.ok) {
              fetchNotices(); // 삭제 후 데이터 새로고침
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
    if (!Array.isArray(dateArray) || dateArray.length < 6) return '';

    const [year, month, day, hour, minute, second] = dateArray;

    // 날짜를 형식화하여 반환
    const formattedDate = `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')} 
      ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}:${String(second).padStart(2, '0')}`;

    // 변환 과정을 콘솔에 출력
    console.log("Original Date Array:", dateArray);
    console.log("Formatted Date:", formattedDate);

    return formattedDate;
  };



  const handlePageChange = (newPage) => {
    if (newPage >= 0 && newPage < totalPages) {
      setPage(newPage);
    }
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

            {/* 페이지네이션 */}
            <div className="pagination">
              <button
                  className="btn btn-secondary"
                  disabled={page === 0}
                  onClick={() => handlePageChange(page - 1)}
              >
                이전
              </button>
              <span className="mx-2">
              페이지 {page + 1} / {totalPages} (총 {totalElements}개)
            </span>
              <button
                  className="btn btn-secondary"
                  disabled={page + 1 === totalPages}
                  onClick={() => handlePageChange(page + 1)}
              >
                다음
              </button>
            </div>
          </main>
        </div>
      </div>
  );
}

export default NoticePage;
