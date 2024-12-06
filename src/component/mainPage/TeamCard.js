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
//     const handleLeaveTeam = async (e) => {
//         e.stopPropagation();
//
//         // 사용자 확인 창 추가
//         const confirmLeave = window.confirm("정말로 팀에서 나가시겠습니까?");
//         if (!confirmLeave) {
//             return;
//         }
//
//         try {
//             const token = localStorage.getItem("accessToken"); // JWT 토큰 가져오기
//             if (!token) {
//                 alert("인증 정보가 없습니다. 다시 로그인해주세요.");
//                 return;
//             }
//
//             const response = await fetch(`http://localhost:8080/member-teams/${id}/leave`, {
//                 method: "DELETE",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${token}`, // JWT 토큰 설정
//                 },
//             });
//
//             if (!response.ok) {
//                 throw new Error("팀 나가기에 실패했습니다.");
//             }
//
//             alert(`팀에서 성공적으로 나왔습니다`);
//             window.location.reload(); // UI 업데이트 (예: 페이지 새로고침)
//         } catch (error) {
//             console.error("Error leaving team:", error);
//             alert("팀 나가기에 실패했습니다. 다시 시도해주세요.");
//         }
//     };
//
//
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


import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";
import TeamEditModal from "./TeamEditModal";
import MemberListModal from "./MemberListModal";
import InviteCodeModal from "./InviteCodeModal"; // 초대 코드 모달 import

const TeamCard = ({ id, name, members = [], comments = 0 }) => {
    const [labels, setLabels] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false); // 초대 코드 모달 상태
    const [memberList, setMemberList] = useState([]);
    const [memberCount, setMemberCount] = useState(0);
    const [inviteCode, setInviteCode] = useState(""); // 초대 코드 상태
    const navigate = useNavigate();

    // 초대 코드 가져오는 함수
    const fetchInviteCode = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                alert("인증 정보가 없습니다. 다시 로그인해주세요.");
                return;
            }

            const response = await fetch(`http://localhost:8080/teams/${id}/invite-code`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch invite code");
            }

            const data = await response.json();
            setInviteCode(data.inviteCode); // 초대 코드 상태 업데이트
            setIsInviteModalOpen(true); // 초대 코드 모달 열기
        } catch (error) {
            console.error("Error fetching invite code:", error);
            alert("초대 코드를 가져오는데 실패했습니다.");
        }
    };

    // 멤버 수 가져오는 함수
    const fetchMemberCount = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                alert("인증 정보가 없습니다. 다시 로그인해주세요.");
                return;
            }

            const response = await fetch(`http://localhost:8080/member-teams/${id}/members`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch member count");
            }

            const data = await response.json();
            setMemberCount(data.length);
        } catch (error) {
            console.error("Error fetching member count:", error);
        }
    };

    useEffect(() => {
        fetchMemberCount();
    }, [id]);

    useEffect(() => {
        fetch(`http://localhost:8080/api/labels/team/${id}`)
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch label data");
                }
                return response.json();
            })
            .then((data) => {
                setLabels(data);
            })
            .catch((error) => {
                console.error("Error fetching labels:", error);
            });
    }, [id]);

    const fetchMemberList = async () => {
        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                alert("인증 정보가 없습니다. 다시 로그인해주세요.");
                return;
            }
            const response = await fetch(`http://localhost:8080/member-teams/${id}/members`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("Failed to fetch member list");
            }

            const data = await response.json();
            setMemberList(data);
        } catch (error) {
            console.error("Error fetching member list:", error);
        }
    };

    const handleCardClick = () => {
        navigate(`/team/${id}`);
    };

    const handleEditTeam = (e) => {
        e.stopPropagation();
        setIsEditModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsEditModalOpen(false);
    };

    const handleSaveEdit = (updatedTeam) => {
        setIsEditModalOpen(false);
    };

    const handleMemberClick = (e) => {
        e.stopPropagation();
        fetchMemberList();
        setIsMemberModalOpen(true);
    };

    const handleCloseMemberModal = () => {
        setIsMemberModalOpen(false);
    };

    const handleCloseInviteModal = () => {
        setIsInviteModalOpen(false);
    };

    return (
        <>
            <div className="team-card" onClick={handleCardClick}>
                <div className="team-card-header">
                    <h3 className="team-name">{name}</h3>
                    <div className="team-actions">
                        <button
                            className="team-edit-button"
                            onClick={handleEditTeam}
                        >
                            수정
                        </button>
                    </div>
                </div>

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

                <div className="team-footer">
                    <div className="team-members">
                        <div className="team-member-add" onClick={handleMemberClick}>
                            +{memberCount}
                        </div>
                        <button
                            className="invite-code-button"
                            onClick={(e) => {
                                e.stopPropagation();
                                fetchInviteCode();
                            }}
                        >
                            ✉️
                        </button>
                    </div>
                    <div className="team-comments">
                        <span className="comments-icon">💬</span> {comments}
                    </div>
                </div>
            </div>

            {isEditModalOpen && (
                <TeamEditModal
                    team={{ id, name, labels }}
                    onClose={handleCloseModal}
                    onSave={handleSaveEdit}
                />
            )}

            {isMemberModalOpen && (
                <MemberListModal
                    members={memberList}
                    onClose={handleCloseMemberModal}
                />
            )}

            {isInviteModalOpen && (
                <InviteCodeModal
                    inviteCode={inviteCode}
                    onClose={handleCloseInviteModal}
                />
            )}
        </>
    );
};

export default TeamCard;
