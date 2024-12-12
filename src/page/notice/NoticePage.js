import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom"; // useLocation 추가
import './NoticePage.css';

function NoticePage() {
  const [notices, setNotices] = useState([]); // 공지사항 목록 상태
  const [page, setPage] = useState(0); // 현재 페이지
  const [size, setSize] = useState(10); // 페이지 크기
  const [totalPages, setTotalPages] = useState(0); // 전체 페이지 수
  const [totalElements, setTotalElements] = useState(0); // 전체 항목 수
  const navigate = useNavigate(); // 페이지 이동을 위한 훅
  const location = useLocation(); // 현재 URL에서 쿼리스트링 읽기

  // 쿼리스트링에서 teamId 추출
  const queryParams = new URLSearchParams(location.search);
  const teamId = queryParams.get("team");

  useEffect(() => {
    if (!teamId) {
      console.error("teamId가 쿼리스트링에 포함되어 있지 않습니다.");
      return;
    }

    const fetchNotices = () => {
      const sortField = "createdAt";
      const sortDirection = "desc";

      const token = localStorage.getItem("accessToken"); // 토큰 확인

      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/"); // 로그인 페이지로 리디렉션
        return;
      }

      fetch(
        `http://localhost:8080/notices/teams/${teamId}/notices?page=${page}&size=${size}&sortField=${sortField}&sortDirection=${sortDirection}`,
        {
          method: 'GET',
          headers: {
            'Authorization': `Bearer ${token}`, // 인증 토큰 추가
            'Content-Type': 'application/json',
          },
        }
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error('인증 실패');
          }
          return response.json();
        })
        .then((data) => {
          setNotices(data.content); // 공지사항 목록 설정
          setTotalPages(data.totalPages); // 전체 페이지 수 설정
          setTotalElements(data.totalElements); // 전체 항목 수 설정
        })
        .catch((error) => {
          console.error("공지사항 데이터를 불러오는 중 오류 발생:", error);
          alert("로그인 정보가 유효하지 않거나 인증에 실패했습니다.");
          navigate("/"); // 인증 실패시 로그인 페이지로 리디렉션
        });
    };

    fetchNotices();
  }, [teamId, page, size, navigate]);

  const handleCreateNotice = () => navigate(`/notice?team=${teamId}`); // teamId 포함

  const handleDeleteNotice = (id) => {
    if (window.confirm("정말로 삭제하시겠습니까?")) {
      const token = localStorage.getItem("accessToken"); // 토큰 확인

      if (!token) {
        alert("로그인이 필요합니다.");
        navigate("/"); // 로그인 페이지로 리디렉션
        return;
      }

      fetch(`http://localhost:8080/notices/${id}`, {
        method: "DELETE",
        headers: {
          'Authorization': `Bearer ${token}`, // 인증 토큰 추가
        },
      })
        .then((response) => {
          if (response.ok) {
            alert("공지사항이 삭제되었습니다.");
            setNotices((prevNotices) => prevNotices.filter((notice) => notice.id !== id)); // 삭제된 공지사항 제거
          } else {
            alert("공지사항 삭제에 실패했습니다.");
          }
        })
        .catch((error) => {
          console.error("삭제 요청 중 오류:", error);
          alert("삭제 도중 오류가 발생했습니다.");
        });
    }
  };

  const formatDate = (dateArray) => {
    if (!Array.isArray(dateArray) || dateArray.length < 6) return "";

    const [year, month, day, hour, minute, second] = dateArray;

    return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}
      ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}:${String(second).padStart(2, "0")}`;
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
            <div className="add-button-container">
              <button className="add-button" onClick={handleCreateNotice}>+</button>
            </div>
          </div>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <thead>
                <tr>
                  <th>No.</th>
                  <th>제목</th>
                  <th>작성자</th>
                  <th>작성일</th>
                </tr>
              </thead>
              <tbody>
                {notices.map((notice, index) => (
                  <tr
                    key={notice.id}
                    className="clickable-row"
                    onClick={() =>
                      navigate(`/notice/details?team=${teamId}&notice=${notice.id}`)
                    }
                  >
                    <td>{page * size + index + 1}</td>
                    <td>{notice.title}</td>
                    <td>{notice.memberNickname}</td>
                    <td>{formatDate(notice.createdAt)}</td>
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
              ◀ 이전
            </button>
            <span className="mx-2">
              {page + 1} / {totalPages}
            </span>
            <button
              className="btn btn-secondary"
              disabled={page + 1 === totalPages}
              onClick={() => handlePageChange(page + 1)}
            >
              다음 ▶
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

export default NoticePage;
