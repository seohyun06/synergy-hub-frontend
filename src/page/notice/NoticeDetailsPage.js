import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./NoticeDetailsPage.css";

function NoticeDetailsPage() {
    const navigate = useNavigate();
    const location = useLocation();
    const [notice, setNotice] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null); // 현재 수정 중인 댓글 ID
    const [editingContent, setEditingContent] = useState(""); // 수정 중인 댓글 내용
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [showPostDropdown, setShowPostDropdown] = useState(false); // 게시물 드롭다운 상태 관리

    // 쿼리스트링에서 team과 notice 값 추출
    const queryParams = new URLSearchParams(location.search);
    const teamId = queryParams.get("team");
    const noticeId = queryParams.get("notice");

    // 공지사항 상세 데이터 가져오기
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
                console.error("공지사항 데이터 불러오기 오류:", err.message);
                setError(err.message);
            })
            .finally(() => setIsLoading(false)); // 로딩 상태 해제
    }, [teamId, noticeId]);

    // 댓글 리스트 가져오기
    useEffect(() => {
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
                    console.error("댓글 데이터 불러오기 오류:", err.message);
                });
        }
    }, [noticeId]);

    // 댓글 내용에서 줄바꿈 처리 함수
    const formatCommentText = (text) => {
        if (!text) return text;
        return text.split("\n").map((line, index) => (
            <React.Fragment key={index}>
                {line}
                <br />
            </React.Fragment>
        ));
    };

    // 댓글 작성 핸들러
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
            .then(async (response) => {
                if (!response.ok) {
                    const errorText = await response.text();
                    if (response.status === 401 && errorText.includes("Access token expired")) {
                        alert("세션이 만료되었습니다. 다시 로그인해주세요.");
                        navigate("/login");
                    } else {
                        throw new Error(errorText || "댓글 작성에 실패했습니다.");
                    }
                } else {
                    return response.json();
                }
            })
            .then((newCommentData) => {
                setComments((prevComments) => [...prevComments, newCommentData]);
                setNewComment(""); // 입력 필드 초기화
            })
            .catch((error) => {
                console.error("댓글 추가 오류:", error.message);
                alert(`댓글 추가 중 오류가 발생했습니다: ${error.message}`);
            });
    };

    // 공지사항 삭제 핸들러
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


    // 댓글 삭제 핸들러
    const handleDeleteComment = (commentId) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        if (window.confirm("정말로 이 댓글을 삭제하시겠습니까?")) {
            fetch(`http://localhost:8080/comments/${commentId}`, {
                method: "DELETE",
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            })
                .then((response) => {
                    if (response.ok) {
                        setComments((prevComments) =>
                            prevComments.filter((comment) => comment.commentId !== commentId)
                        );
                        alert("댓글이 삭제되었습니다.");
                    } else {
                        throw new Error("댓글 삭제에 실패했습니다.");
                    }
                })
                .catch((error) => {
                    console.error("댓글 삭제 오류:", error.message);
                    alert(`댓글 삭제 중 오류가 발생했습니다: ${error.message}`);
                });
        }
    };

    const handleEditComment = (commentId, currentContent) => {
        setEditingCommentId(commentId);
        setEditingContent(currentContent);
    };

    const handleUpdateComment = (commentId) => {
        const token = localStorage.getItem("accessToken");
        if (!token) {
            alert("로그인이 필요합니다.");
            navigate("/login");
            return;
        }

        if (editingContent.trim() === "") {
            alert("수정할 내용을 입력해주세요.");
            return;
        }

        fetch(`http://localhost:8080/comments/${commentId}`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                content: editingContent,
            }),
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("댓글 수정에 실패했습니다.");
                }
                return response.json();
            })
            .then((updatedComment) => {
                setComments((prevComments) =>
                    prevComments.map((comment) =>
                        comment.commentId === commentId ? updatedComment : comment
                    )
                );
                setEditingCommentId(null);
                setEditingContent("");
                alert("댓글이 수정되었습니다.");
            })
            .catch((error) => {
                console.error("댓글 수정 오류:", error.message);
                alert(`댓글 수정 중 오류가 발생했습니다: ${error.message}`);
            });
    };

    // 게시물 드롭다운 토글 함수
    const togglePostDropdown = () => {
        setShowPostDropdown(!showPostDropdown);
    };

    // 게시물 드롭다운 외부 클릭 시 닫기
    useEffect(() => {
        const handleOutsideClick = (event) => {
            if (!event.target.closest(".post-dropdown")) {
                setShowPostDropdown(false);
            }
        };

        document.addEventListener("click", handleOutsideClick);
        return () => {
            document.removeEventListener("click", handleOutsideClick);
        };
    }, []);

    const toggleDropdown = (commentId) => {
        setComments((prevComments) =>
            prevComments.map((comment) =>
                comment.commentId === commentId
                    ? { ...comment, showDropdown: !comment.showDropdown }
                    : { ...comment, showDropdown: false } // 다른 드롭다운은 닫음
            )
        );
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
                        <div className="notice-actions-inline">
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

                    <hr/>
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
                </div>
                <hr/>
                <div className="comments-section">
                    <ul className="comments-list">
                        {comments.map((comment) => (
                            <li key={comment.commentId} className="comment-item">
                                {editingCommentId === comment.commentId ? (
                                    <div className="edit-comment-container">
                                        <textarea
                                            className="form-control edit-comment-textarea"
                                            value={editingContent}
                                            onChange={(e) => setEditingContent(e.target.value)}
                                            placeholder="수정할 내용을 입력하세요."
                                        />
                                        <div className="edit-buttons-container">
                                            <button
                                                className="btn btn-success save-button"
                                                onClick={() => handleUpdateComment(comment.commentId)}
                                            >
                                                수정
                                            </button>
                                            <button
                                                className="btn btn-secondary cancel-button"
                                                onClick={() => setEditingCommentId(null)}
                                            >
                                                취소
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="comment-content-container">
                                        <p>{formatCommentText(comment.content)}</p>
                                        <span className="comment-meta">
                                            작성자: {comment.nickname} | 작성일: {comment.createdAt}
                                        </span>

                                        {/* 드롭다운 버튼 */}
                                        <div className="dropdown">
                                            <button
                                                className="dropdown-button"
                                                onClick={() => toggleDropdown(comment.commentId)}
                                            >
                                                ⋮
                                            </button>
                                            {comment.showDropdown && (
                                                <div className="dropdown-menu">
                                                    <button
                                                        onClick={() => handleEditComment(comment.commentId, comment.content)}
                                                    >
                                                        수정
                                                    </button>
                                                    <button
                                                        onClick={() => handleDeleteComment(comment.commentId)}
                                                    >
                                                        삭제
                                                    </button>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                )}
                            </li>
                        ))}
                    </ul>
                    <div className="comment-form">
                        <textarea
                            className="form-control"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            placeholder="댓글을 입력하세요."
                        />
                        <button className="btn btn-success" onClick={handleAddComment}>
                            등록
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default NoticeDetailsPage;
