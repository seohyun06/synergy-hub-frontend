// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import { useAuth } from "../../global/AuthContext"; // 회원 정보 가져오기 위한 hook
// import "./Comment.css"; // 스타일링을 위한 CSS 파일
//
// function Comment() {
//   const { noticeId } = useParams(); // URL에서 noticeId 추출
//   const { user } = useAuth(); // 회원 정보 가져오기
//   const [comments, setComments] = useState([]); // 댓글 상태
//   const [newComment, setNewComment] = useState(""); // 새 댓글 상태
//   const [error, setError] = useState(""); // 오류 상태
//   const [editingCommentId, setEditingCommentId] = useState(null); // 수정 중인 댓글 ID
//   const [editedContent, setEditedContent] = useState(""); // 수정된 댓글 내용
//
//   // 댓글 불러오기
//   useEffect(() => {
//     fetch('http://localhost:8080/comments/notice/${noticeId}')
//       .then((response) => response.json())  // 응답을 JSON으로 파싱
//       .then((data) => {
//         if (Array.isArray(data)) {
//           setComments(data); // 받은 데이터가 배열이면 상태에 저장
//         } else {
//           setError("댓글 목록을 불러오는 데 문제가 발생했습니다.");
//         }
//       })
//       .catch(() => {
//         setError("댓글을 불러오는 중 오류가 발생했습니다.");
//       });
//   }, [noticeId]);
//
//
//   // 날짜 포맷 함수
//   const formatDate = (dateArray) => {
//     if (!dateArray || dateArray.length < 6) return "";
//     const [year, month, day, hour, minute] = dateArray;
//     return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}
//             ${String(hour).padStart(2, "0")}:${String(minute).padStart(2, "0")}`;
//   };
//
//
//   // 댓글 작성
//   const handleCommentSubmit = (e) => {
//     e.preventDefault();
//
//     if (!user) {
//       alert("로그인이 필요합니다.");
//       return;
//     }
//
//     const commentData = {
//       noticeId: noticeId,
//       memberId: user.id, // 현재 로그인된 사용자의 ID 사용
//       content: newComment,
//     };
//
//    const token = localStorage.getItem("accessToken"); // 토큰 가져오기
//
//    fetch(`http://localhost:8080/comments/notice?team=${user.teamId}&notice=${noticeId}`, {
//      method: "POST",
//      headers: {
//        "Content-Type": "application/json",
//        "Authorization": `Bearer ${token}`, // 인증 토큰 추가
//      },
//      body: JSON.stringify(commentData),
//    })
//
//       .then((response) => response.json())
//       .then((data) => {
//         if (Array.isArray(comments)) {
//           setComments([...comments, data]); // 댓글 추가
//         }
//         setNewComment(""); // 댓글 입력창 초기화
//       })
//       .catch(() => {
//         setError("댓글 작성 중 오류가 발생했습니다.");
//       });
//   };
//
//   // 댓글 삭제
//   const handleDelete = (commentId) => {
//     if (window.confirm("정말로 삭제하시겠습니까?")) {
//       fetch('http://localhost:8080/comments/${commentId}', {
//         method: "DELETE",
//       })
//         .then(() => {
//           setComments(comments.filter((comment) => comment.commentId !== commentId)); // 삭제된 댓글 제거
//         })
//         .catch(() => {
//           setError("댓글 삭제 중 오류가 발생했습니다.");
//         });
//     }
//   };
//
//   // 댓글 수정 활성화
//   const handleEdit = (commentId, currentContent) => {
//     setEditingCommentId(commentId);
//     setEditedContent(currentContent);
//   };
//
//   // 댓글 수정 저장
//   const handleSaveEdit = (commentId) => {
//     if (!editedContent.trim()) {
//       alert("내용을 입력해주세요.");
//       return;
//     }
//
//     fetch('http://localhost:8080/comments/${commentId}', {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ content: editedContent }),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setComments(
//           comments.map((comment) =>
//             comment.commentId === commentId ? data : comment
//           )
//         );
//         setEditingCommentId(null); // 수정 완료 후 수정 모드 종료
//       })
//       .catch(() => {
//         setError("댓글 수정 중 오류가 발생했습니다.");
//       });
//   };
//
//   return (
//     <div className="comments-container">
//       <h3>댓글</h3>
//
//       {error && <div className="error-message">{error}</div>}
//
//       <div className="comments-list">
//         {comments.map((comment) => (
//           <div key={comment.commentId} className="comment-item">
//             <div className="comment-header">
//               <span className="comment-author">{comment.memberNickname || user.nickname}</span>
//               <span className="comment-date">
//                 {typeof comment.createdAt === "string"
//                   ? new Date(comment.createdAt).toLocaleString() // ISO 문자열 형식일 경우
//                   : formatDate(comment.createdAt)} {/* 배열 형식일 경우 */}
//               </span>
//             </div>
//
//             {/* 수정 중인 댓글 처리 */}
//             {editingCommentId === comment.commentId ? (
//               <div className="edit-comment">
//                 <textarea
//                   value={editedContent}
//                   onChange={(e) => setEditedContent(e.target.value)}
//                   rows="4"
//                 />
//                 <button onClick={() => handleSaveEdit(comment.commentId)} className="btn btn-success">
//                   수정 저장
//                 </button>
//                 <button
//                   onClick={() => setEditingCommentId(null)}
//                   className="btn btn-secondary"
//                 >
//                   취소
//                 </button>
//               </div>
//             ) : (
//               <p className="comment-content">{comment.content}</p>
//             )}
//
//             <div className="comment-actions">
//               <button onClick={() => handleEdit(comment.commentId, comment.content)} className="btn btn-primary">
//                 수정
//               </button>
//               <button onClick={() => handleDelete(comment.commentId)} className="btn btn-danger">
//                 삭제
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>
//
//       <div className="comment-form">
//         <textarea
//           value={newComment}
//           onChange={(e) => setNewComment(e.target.value)}
//           placeholder="댓글을 작성하세요."
//           rows="4"
//         />
//         <button onClick={handleCommentSubmit} className="btn btn-success">
//           댓글 작성
//         </button>
//       </div>
//     </div>
//   );
// }
//
// export default Comment;

import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Comment.css"; // CSS 파일 추가

function Comment() {
    const { noticeId } = useParams();
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [error, setError] = useState("");
    const [editingCommentId, setEditingCommentId] = useState(null);
    const [editedContent, setEditedContent] = useState("");
    const [dropdownVisible, setDropdownVisible] = useState({}); // 각 댓글의 드롭다운 상태 관리

    useEffect(() => {
        fetch(`http://localhost:8080/comments/notice/${noticeId}`)
            .then((response) => response.json())
            .then((data) => {
                if (Array.isArray(data)) {
                    setComments(data);
                } else {
                    setError("댓글 목록을 불러오는 데 문제가 발생했습니다.");
                }
            })
            .catch(() => {
                setError("댓글을 불러오는 중 오류가 발생했습니다.");
            });
    }, [noticeId]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) {
            alert("댓글 내용을 입력해주세요.");
            return;
        }
        const commentData = {
            noticeId,
            content: newComment,
        };
        fetch(`http://localhost:8080/comments/notice/${noticeId}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(commentData),
        })
            .then((response) => response.json())
            .then((data) => {
                setComments([...comments, data]);
                setNewComment("");
            })
            .catch(() => {
                setError("댓글 작성 중 오류가 발생했습니다.");
            });
    };

    const handleDelete = (commentId) => {
        if (window.confirm("정말로 삭제하시겠습니까?")) {
            fetch(`http://localhost:8080/comments/${commentId}`, {
                method: "DELETE",
            })
                .then(() => {
                    setComments(comments.filter((comment) => comment.commentId !== commentId));
                })
                .catch(() => {
                    setError("댓글 삭제 중 오류가 발생했습니다.");
                });
        }
    };

    const handleEdit = (commentId, currentContent) => {
        setEditingCommentId(commentId);
        setEditedContent(currentContent);
    };

    const handleSaveEdit = (commentId) => {
        if (!editedContent.trim()) {
            alert("수정할 내용을 입력해주세요.");
            return;
        }
        fetch(`http://localhost:8080/comments/${commentId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ content: editedContent }),
        })
            .then((response) => response.json())
            .then((data) => {
                setComments(
                    comments.map((comment) =>
                        comment.commentId === commentId ? data : comment
                    )
                );
                setEditingCommentId(null);
            })
            .catch(() => {
                setError("댓글 수정 중 오류가 발생했습니다.");
            });
    };

    const toggleDropdown = (commentId) => {
        setDropdownVisible((prev) => ({
            ...prev,
            [commentId]: !prev[commentId],
        }));
    };

    return (
        <div className="comments-container">
            {/*<h3>댓글</h3>*/}
            {error && <div className="error-message">{error}</div>}
            <ul className="comments-list">
                {comments.map((comment) => (
                    <li key={comment.commentId} className="comment-item">
                        {/*<div className="comment-header">*/}
                        {/*    <span className="comment-author">{comment.memberNickname}</span>*/}
                        {/*    <span className="comment-date">{comment.createdAt}</span>*/}
                        {/*</div>*/}
                        {editingCommentId === comment.commentId ? (
                            <div className="edit-comment">
                <textarea
                    value={editedContent}
                    onChange={(e) => setEditedContent(e.target.value)}
                />
                                {/*<button onClick={() => handleSaveEdit(comment.commentId)}>*/}
                                {/*    저장*/}
                                {/*</button>*/}
                                {/*<button onClick={() => setEditingCommentId(null)}>취소</button>*/}
                            </div>
                        ) : (
                            <p className="comment-content">{comment.content}</p>
                        )}
                        {/*<div className="comment-actions">*/}
                        {/*    <button*/}
                        {/*        className="dropdown-button"*/}
                        {/*        onClick={() => toggleDropdown(comment.commentId)}*/}
                        {/*    >*/}
                        {/*        ⋮*/}
                        {/*    </button>*/}
                        {/*    {dropdownVisible[comment.commentId] && (*/}
                        {/*        <div className="dropdown-menu">*/}
                        {/*            <button*/}
                        {/*                onClick={() =>*/}
                        {/*                    handleEdit(comment.commentId, comment.content)*/}
                        {/*                }*/}
                        {/*            >*/}
                        {/*                수정*/}
                        {/*            </button>*/}
                        {/*            <button onClick={() => handleDelete(comment.commentId)}>*/}
                        {/*                삭제*/}
                        {/*            </button>*/}
                        {/*        </div>*/}
                        {/*    )}*/}
                        {/*</div>*/}
                    </li>
                ))}
            </ul>
        {/*    <div className="comment-form">*/}
        {/*<textarea*/}
        {/*    value={newComment}*/}
        {/*    onChange={(e) => setNewComment(e.target.value)}*/}
        {/*    placeholder="댓글을 작성하세요."*/}
        {/*/>*/}
        {/*        <button onClick={handleCommentSubmit}>댓글 작성</button>*/}
        {/*    </div>*/}
        </div>
    );
}

export default Comment;
