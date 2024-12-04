import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 추가
import './NoticePage.css';

function NoticePage() {
  const [notices, setNotices] = useState([]);
  const navigate = useNavigate(); // navigate 함수 초기화

  useEffect(() => {
    // 공지사항 목록을 가져오는 API 호출
    fetch('http://localhost:8080/notices') // 실제 API URL
      .then((response) => response.json()) // 응답을 JSON으로 변환
      .then((data) => {
        setNotices(data); // 공지사항 데이터를 상태에 저장
      })
      .catch((error) => {
        console.error('공지사항 데이터를 불러오는 중 오류 발생:', error);
      });
  }, []); // 컴포넌트가 마운트될 때 한 번 실행

  const handleCreateNotice = () => {
    navigate('/notice/create'); // 버튼 클릭 시 CreateNoticePage로 이동
  };

  // 날짜 포맷팅 함수
  const formatDate = (dateArray) => {
    if (!dateArray || dateArray.length < 6) return ''; // 유효성 검사
    const [year, month, day, hour, minute, second] = dateArray;
    return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}
            ${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  };

  // 삭제 요청 함수
  const handleDeleteNotice = (id) => {
    console.log('삭제 버튼 클릭됨, id:', id); // 디버깅용 로그

    if (!window.confirm('정말로 삭제하시겠습니까?')) {
      return; // 사용자가 취소한 경우 삭제하지 않음
    }

    // DELETE 요청
    fetch(`http://localhost:8080/notices/${id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // 삭제 성공 시 상태 업데이트
          setNotices(notices.filter((notice) => notice.id !== id));
          alert('공지사항이 삭제되었습니다.');
        } else {
          console.error('DELETE 요청 실패:', response);
          alert('공지사항 삭제에 실패했습니다.');
        }
      })
      .catch((error) => {
        console.error('삭제 요청 중 오류:', error);
        alert('삭제 도중 오류가 발생했습니다.');
      });
  };

  return (
    <div className="container-fluid">
      <div className="row">
        {/* 메인 콘텐츠 */}
        <main className="col-12 px-4">
          <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
            <h1 className="h2">공지 사항</h1>
            <button className="btn btn-primary" onClick={handleCreateNotice}>+</button>
          </div>

          {/* 공지 사항 테이블 */}
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
                    <td>{notice.title}</td>
                    <td>{notice.memberNickname}</td>
                    <td>{formatDate(notice.createdAt)}</td> {/* 날짜 포맷팅 */}
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
