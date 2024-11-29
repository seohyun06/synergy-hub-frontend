// import React from "react";
// import "./TeamCard.css";
//
// const TeamCard = ({ team }) => {
//     return (
//         <div className="team-card">
//             <h3>{team.title}</h3>
//             <p>#{team.id}</p>
//             <div className="team-details">
//                 <span className={`status ${team.status.toLowerCase()}`}>{team.status}</span>
//                 <span className="category">{team.category}</span>
//             </div>
//             <div className="team-members">
//                 <span>+{team.members} members</span>
//             </div>
//         </div>
//     );
// };
//
// export default TeamCard;


// import React from "react";
// import { useNavigate } from "react-router-dom";
// import "./TeamCard.css";
//
// const TeamCard = ({ title, id, category, status, members, comments }) => {
//     const navigate = useNavigate(); // 페이지 이동을 위한 훅
//
//     const handleCardClick = () => {
//         navigate(`/team/${id}`); // 클릭 시 팀 페이지로 이동
//     };
//
//     // return (
//     //     <div className="team-card">
//     //         <div className="team-card-header">
//     //             <h3>{title}</h3>
//     //             <p className="team-id">#{id}</p>
//     //         </div>
//     //         <div className="team-card-body">
//     //             <span className={`team-status ${status.toLowerCase()}`}>{status}</span>
//     //             <span className="team-category">{category}</span>
//     //         </div>
//     //         <div className="team-card-footer">
//     //             <span>+{members} members</span>
//     //             <span>{comments} comments</span>
//     //         </div>
//     //     </div>
//     // );
//
//     return (
//         <div className="team-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
//             <div className="team-card-header">
//                 <h3>{title}</h3>
//                 <p className="team-id">#{id}</p>
//             </div>
//             <div className="team-card-body">
//                 <span className={`team-status ${status.toLowerCase()}`}>{status}</span>
//                 <span className="team-category">{category}</span>
//             </div>
//             <div className="team-card-footer">
//                 <span>+{members} members</span>
//                 <span>{comments} comments</span>
//             </div>
//         </div>
//     );
// };
//
// export default TeamCard;
//

import React from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

const TeamCard = ({ id, name, labels = [], members = [], comments = 0 }) => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate(`/team/${id}/home`); // 팀 홈 경로로 이동
    };

    const handleEditTeam = (e) => {
        e.stopPropagation();
        alert(`팀 수정 페이지로 이동: ${name}`);
    };

    const handleLeaveTeam = (e) => {
        e.stopPropagation();
        alert(`팀 나가기: ${name}`);
    };

    return (
        <div className="team-card" onClick={handleCardClick}>
            {/* 첫 번째 영역: 팀 이름 및 수정/나가기 버튼 */}
            <div className="team-card-header">
                <h3 className="team-name">{name}</h3>
                <div className="team-actions">
                    <button className="team-edit-button">수정</button>
                    <button className="team-leave-button" onClick={handleLeaveTeam}>
                        나가기
                    </button>
                </div>

            </div>

            {/* 두 번째 영역: 팀 라벨 */}
            <div className="team-labels">
                {labels.length > 0 ? (
                    labels.map((label, index) => (
                        <span key={index} className="team-label">
                            {label}
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
    );
};

export default TeamCard;