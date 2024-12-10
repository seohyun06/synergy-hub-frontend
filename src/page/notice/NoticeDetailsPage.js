import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NoticeDetailsPage.css";

function NoticeDetailsPage() {
    const navigate = useNavigate(); // 페이지 이동을 위한 훅
    const location = useLocation(); // URL에서 쿼리스트링 가져오기
    const [notice, setNotice] = useState(null); // 공지사항 데이터 상태
    const [comments, setComments] = useState([]); // 댓글 리스트 상태
    const [newComment, setNewComment] = useState(""); // 새 댓글 상태
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

    useEffect(() => {
        // 댓글 리스트 가져오기
        if (noticeId) {
            fetch(`http://localhost:8080/comments/notice/${noticeId}`)
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("댓글 데이터를 불러오는 중 오류가 발생했습니다.");
                    }
                    return response.json();
                })
                .then((data) => {
                    setComments(data);
                })
                .catch((err) => {
                    console.error("댓글 불러오기 오류:", err.message);
                });
        }
    }, [noticeId]);

    const handleAddComment = () => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        if (newComment.trim() === "") {
            alert("댓글 내용을 입력해주세요.");
            return;
        }

        fetch(`http://localhost:8080/comments/notice/${noticeId}`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                noticeId: parseInt(noticeId, 10),
                content: newComment,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    return response.json().then((data) => {
                        throw new Error(data.message || "댓글 추가에 실패했습니다.");
                    });
                }
                return response.json();
            })
            .then((newComment) => {
                setComments((prevComments) => [...prevComments, newComment]);
                setNewComment(""); // 입력 필드 초기화
            })
            .catch((error) => {
                console.error("댓글 추가 오류:", error.message);
                alert(`댓글 추가 중 오류가 발생했습니다: ${error.message}`);
            });
    };

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
                    </div>
                </div>
                <hr />
                <div className="comments-section">
                    <h2>댓글</h2>
                    <ul className="comments-list">
                        {comments.map((comment) => (
                            <li key={comment.commentId} className="comment-item">
                                <p>{comment.content}</p>
                                <span className="comment-meta">
                                    작성자: {comment.memberId} | 작성일: {comment.createdAt}
                                </span>
                            </li>
                        ))}
                    </ul>
                    <div className="comment-form">
                        <textarea
                            className="form-control"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="댓글을 입력하세요..."
                        />
                        <button className="btn btn-success" onClick={handleAddComment}>
                            댓글 작성
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NoticeDetailsPage;
