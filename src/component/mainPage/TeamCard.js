import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";
import TeamEditModal from "./TeamEditModal";
//
// const TeamCard = ({ id, name, members = [], comments = 0 }) => {
//     const [labels, setLabels] = useState([]); // 라벨 데이터를 저장하는 상태 (배열)
//     const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태 추가
//     const navigate = useNavigate();
//
//     useEffect(() => {
//         // API 호출로 라벨 데이터 가져오기
//         fetch(`http://localhost:8080/api/labels/team/${id}`)
//             .then((response) => {
//                 if (!response.ok) {
//                     throw new Error("Failed to fetch label data");
//                 }
//                 return response.json();
//             })
//             .then((data) => {
//                 console.log("Labels Data:", data); // 가져온 라벨 데이터 확인
//                 setLabels(data); // 라벨 데이터 설정 (배열)
//             })
//             .catch((error) => {
//                 console.error("Error fetching labels:", error);
//             });
//     }, [id]); // 팀 ID가 변경될 때마다 호출
//
//     const handleCardClick = () => {
//         navigate(`/team/${id}`); // 팀 홈 경로로 이동
//     };
//
//     // const handleEditTeam = (e) => {
//     //     e.stopPropagation();
//     //     alert(`팀 수정 페이지로 이동: ${name}`);
//     // };
//     const handleEditTeam = (e) => {
//         e.stopPropagation();
//         setIsEditModalOpen(true); // 수정 모달 열기
//     };
//
//     // 모달 닫기
//     const handleCloseModal = () => {
//         setIsEditModalOpen(false); // 수정 모달 닫기
//     };
//
//     // 수정 저장
//     const handleSaveEdit = (updatedTeam) => {
//         console.log("Updated Team:", updatedTeam); // 수정된 팀 데이터 로그 출력
//         // API 호출로 팀 정보 업데이트 가능
//         setIsEditModalOpen(false); // 모달 닫기
//     };
//
//     const handleLeaveTeam = (e) => {
//         e.stopPropagation();
//         alert(`팀 나가기: ${name}`);
//     };
//
//     // return (
//     //     <div className="team-card" onClick={handleCardClick}>
//     //         {/* 첫 번째 영역: 팀 이름 및 나가기 버튼 */}
//     //         <div className="team-card-header">
//     //             <h3 className="team-name">{name}</h3>
//     //             <div className="team-actions">
//     //                 {/* 수정 버튼 클릭시 handleEditTeam 실행 */}
//     //                 <button
//     //                     className="team-edit-button"
//     //                     onClick={handleEditTeam} // 수정 버튼 클릭 핸들러 추가
//     //                 >
//     //                     수정
//     //                 </button>
//     //                 <button className="team-leave-button" onClick={handleLeaveTeam}>
//     //                     나가기
//     //                 </button>
//     //             </div>
//     //         </div>
//     //
//     //         {/* 두 번째 영역: 팀 라벨 */}
//     //         <div className="team-labels">
//     //             {labels.length > 0 ? (
//     //                 labels.map((label, index) => (
//     //                     <span
//     //                         key={index}
//     //                         className="team-label-badge"
//     //                         style={{ backgroundColor: label.color }}
//     //                     >
//     //                         {label.name}
//     //                     </span>
//     //                 ))
//     //             ) : (
//     //                 <span className="no-label">라벨 없음</span>
//     //             )}
//     //         </div>
//     //
//     //         {/* 세 번째 영역: 팀 멤버 및 채팅 알림 */}
//     //         <div className="team-footer">
//     //             <div className="team-members">
//     //                 {members.map((member, index) => (
//     //                     <div key={index} className="team-member">
//     //                         <img
//     //                             src={member.profileImage || "https://via.placeholder.com/32"}
//     //                             alt={`${member.name || "Unknown"}'s profile`}
//     //                             className="member-avatar"
//     //                         />
//     //                     </div>
//     //                 ))}
//     //                 <div className="team-member-add">+</div>
//     //             </div>
//     //             <div className="team-comments">
//     //                 <span className="comments-icon">💬</span> {comments}
//     //             </div>
//     //         </div>
//     //     </div>
//     //
//     //
//     // );
//     return (
//         <>
//             <div className="team-card" onClick={handleCardClick}>
//                 {/* 첫 번째 영역: 팀 이름 및 나가기 버튼 */}
//                 <div className="team-card-header">
//                     <h3 className="team-name">{name}</h3>
//                     <div className="team-actions">
//                         {/* 수정 버튼 클릭 시 handleEditTeam 실행 */}
//                         <button
//                             className="team-edit-button"
//                             onClick={handleEditTeam} // 수정 버튼 클릭 핸들러 추가
//                         >
//                             수정
//                         </button>
//                         <button
//                             className="team-leave-button"
//                             onClick={handleLeaveTeam}
//                         >
//                             나가기
//                         </button>
//                     </div>
//                 </div>
//
//                 {/* 두 번째 영역: 팀 라벨 */}
//                 <div className="team-labels">
//                     {labels.length > 0 ? (
//                         labels.map((label, index) => (
//                             <span
//                                 key={index}
//                                 className="team-label-badge"
//                                 style={{ backgroundColor: label.color }}
//                             >
//                                 {label.name}
//                             </span>
//                         ))
//                     ) : (
//                         <span className="no-label">라벨 없음</span>
//                     )}
//                 </div>
//
//                 {/* 세 번째 영역: 팀 멤버 및 채팅 알림 */}
//                 <div className="team-footer">
//                     <div className="team-members">
//                         {members.map((member, index) => (
//                             <div key={index} className="team-member">
//                                 <img
//                                     src={member.profileImage || "https://via.placeholder.com/32"}
//                                     alt={`${member.name || "Unknown"}'s profile`}
//                                     className="member-avatar"
//                                 />
//                             </div>
//                         ))}
//                         <div className="team-member-add">+</div>
//                     </div>
//                     <div className="team-comments">
//                         <span className="comments-icon">💬</span> {comments}
//                     </div>
//                 </div>
//             </div>
//
//             {/* 수정 모달 컴포넌트 */}
//             {isEditModalOpen && (
//                 <TeamEditModal
//                     team={{ id, name, labels }} // 팀 데이터를 모달에 전달
//                     onClose={handleCloseModal} // 모달 닫기 함수 전달
//                     onSave={handleSaveEdit} // 수정 저장 함수 전달
//                 />
//             )}
//         </>
//     );
// };
//
// export default TeamCard;


const TeamCard = ({ id, name, members = [], comments = 0 }) => {
    const [labels, setLabels] = useState([]); // 라벨 데이터를 저장하는 상태 (배열)
    const [isEditModalOpen, setIsEditModalOpen] = useState(false); // 수정 모달 상태 추가
    const navigate = useNavigate();

    useEffect(() => {
        // API 호출로 라벨 데이터 가져오기
        fetch(`http://localhost:8080/api/labels/team/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch label data");
                }
                return response.json();
            })
            .then((data) => {
                console.log("Labels Data:", data); // 가져온 라벨 데이터 확인
                setLabels(data); // 라벨 데이터 설정 (배열)
            })
            .catch((error) => {
                console.error("Error fetching labels:", error);
            });
    }, [id]); // 팀 ID가 변경될 때마다 호출

    const handleCardClick = () => {
        navigate(`/team/${id}`); // 팀 홈 경로로 이동
    };

    const handleEditTeam = (e) => {
        e.stopPropagation();
        setIsEditModalOpen(true); // 수정 모달 열기
    };

    // 모달 닫기
    const handleCloseModal = () => {
        setIsEditModalOpen(false); // 수정 모달 닫기
    };

    // 수정 저장
    const handleSaveEdit = (updatedTeam) => {
        console.log("Updated Team:", updatedTeam); // 수정된 팀 데이터 로그 출력
        // API 호출로 팀 정보 업데이트 가능
        setIsEditModalOpen(false); // 모달 닫기
    };

    const handleLeaveTeam = async (e) => {
        e.stopPropagation();

        const headers = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };
        try {
            const response = await fetch(`http://localhost:8080/member-teams/${id}/leave`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    // Authorization: `Bearer ${localStorage.getItem("token")}`, // JWT 토큰
                },
            });

            if (!response.ok) {
                throw new Error("팀 나가기에 실패했습니다.");
            }

            alert(`팀에서 성공적으로 나왔습니다: ${name}`);
            // 팀 목록을 새로고침하거나 UI를 업데이트
            window.location.reload(); // 예시: 페이지 새로고침
        } catch (error) {
            console.error("Error leaving team:", error);
            alert("팀 나가기에 실패했습니다. 다시 시도해주세요.");
        }
    };

    return (
        <>
            <div className="team-card" onClick={handleCardClick}>
                {/* 첫 번째 영역: 팀 이름 및 나가기 버튼 */}
                <div className="team-card-header">
                    <h3 className="team-name">{name}</h3>
                    <div className="team-actions">
                        {/* 수정 버튼 클릭 시 handleEditTeam 실행 */}
                        <button
                            className="team-edit-button"
                            onClick={handleEditTeam} // 수정 버튼 클릭 핸들러 추가
                        >
                            수정
                        </button>
                        <button
                            className="team-leave-button"
                            onClick={handleLeaveTeam}
                        >
                            나가기
                        </button>
                    </div>
                </div>

                {/* 두 번째 영역: 팀 라벨 */}
                <div className="team-labels">
                    {labels.length > 0 ? (
                        labels.map((label, index) => (
                            <span
                                key={index}
                                className="team-label-badge"
                                style={{ backgroundColor: label.color }}
                            >
                                {label.name}
                            </span>
                        ))
                    ) : (
                        <span className="no-label">라벨 없음</span>
                    )}
                </div>

                {/* 세 번째 영역: 팀 멤버 및 채팅 알림 */}
                <div className="team-footer">
                    <div className="team-members">
                        {members.map((member, index) => (
                            <div key={index} className="team-member">
                                <img
                                    src={member.profileImage || "https://via.placeholder.com/32"}
                                    alt={`${member.name || "Unknown"}'s profile`}
                                    className="member-avatar"
                                />
                            </div>
                        ))}
                        <div className="team-member-add">+</div>
                    </div>
                    <div className="team-comments">
                        <span className="comments-icon">💬</span> {comments}
                    </div>
                </div>
            </div>

            {/* 수정 모달 컴포넌트 */}
            {isEditModalOpen && (
                <TeamEditModal
                    team={{ id, name, labels }} // 팀 데이터를 모달에 전달
                    onClose={handleCloseModal} // 모달 닫기 함수 전달
                    onSave={handleSaveEdit} // 수정 저장 함수 전달
                />
            )}
        </>
    );
};

export default TeamCard;
