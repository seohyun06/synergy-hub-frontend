import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routes";
import "./TeamCard.css";
import TeamEditModal from "./TeamEditModal";
import MemberListModal from "./MemberListModal";
import InviteCodeModal from "./InviteCodeModal";

const TeamCard = ({ id, name, members = [], comments = 0 }) => {
    const [labels, setLabels] = useState([]);
    const [isEditModalOpen, setIsEditModalOpen] = useState(false);
    const [isMemberModalOpen, setIsMemberModalOpen] = useState(false);
    const [isInviteModalOpen, setIsInviteModalOpen] = useState(false);
    const [memberList, setMemberList] = useState([]);
    const [memberCount, setMemberCount] = useState(0);
    const [inviteCode, setInviteCode] = useState("");
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
            setInviteCode(data.inviteCode);
            setIsInviteModalOpen(true);
        } catch (error) {
            console.error("Error fetching invite code:", error);
            alert("초대 코드를 가져오는데 실패했습니다.");
        }
    };

    // // 멤버 수 가져오는 함수
    // const fetchMemberCount = async () => {
    //     try {
    //         const token = localStorage.getItem("accessToken");
    //         if (!token) {
    //             alert("인증 정보가 없습니다. 다시 로그인해주세요.");
    //             return;
    //         }
    //
    //         const response = await fetch(`http://localhost:8080/member-teams/${id}/members`, {
    //             headers: {
    //                 Authorization: `Bearer ${token}`,
    //             },
    //         });
    //
    //         if (!response.ok) {
    //             throw new Error("Failed to fetch member count");
    //         }
    //
    //         const data = await response.json();
    //         setMemberCount(data.length);
    //     } catch (error) {
    //         console.error("Error fetching member count:", error);
    //     }
    // };
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
            setMemberCount(data.length); // 상태에 멤버 수 저장
        } catch (error) {
            console.error("Error fetching member count:", error);
        }
    };

    useEffect(() => {
        fetchMemberCount(); // 컴포넌트가 렌더링될 때 멤버 수 가져오기
    }, [id,fetchMemberCount]); // id가 변경될 때도 다시 호출

    // 라벨 데이터 가져오기
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

    // 멤버 리스트 가져오기
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

    // 팀 나가기 기능 추가
    const handleLeaveTeam = async (e) => {
        e.stopPropagation();

        // 사용자 확인
        const confirmLeave = window.confirm("정말로 팀에서 나가시겠습니까?");
        if (!confirmLeave) {
            return;
        }

        try {
            const token = localStorage.getItem("accessToken");
            if (!token) {
                alert("인증 정보가 없습니다. 다시 로그인해주세요.");
                return;
            }

            const response = await fetch(`http://localhost:8080/member-teams/${id}/leave`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            if (!response.ok) {
                throw new Error("팀 나가기에 실패했습니다.");
            }

            alert("팀에서 성공적으로 나왔습니다.");
            window.location.reload();
        } catch (error) {
            console.error("Error leaving team:", error);
            alert("팀 나가기에 실패했습니다. 다시 시도해주세요.");
        }
    };

    const handleCardClick = () => {
        // navigate(`/team/view?team=${id}`);
        navigate(`${ROUTES.TEAM_VIEW}?team=${id}`);
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
                        <button
                            className="team-leave-button"
                            onClick={handleLeaveTeam}
                        >
                            나가기
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
                        <span className="no-label"></span>
                    )}
                </div>

                <div className="team-footer">
                    <div className="team-members">
                        <div className="team-member-add" onClick={handleMemberClick}>
                            👤{memberCount} {/* 멤버 수 표시 */}
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
