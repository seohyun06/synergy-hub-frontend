// import React, { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./TeamCard.css";
//
// const TeamCard = ({ id, name, members = [], comments = 0 }) => {
//     const [label, setLabel] = useState(null); // 라벨 데이터를 저장하는 상태
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
//                 console.log("Label Data:", data); // 가져온 라벨 데이터 확인
//                 setLabel(data); // 라벨 데이터 설정
//             })
//             .catch((error) => {
//                 console.error("Error fetching label:", error);
//             });
//     }, [id]); // 팀 ID가 변경될 때마다 호출
//
//     const handleCardClick = () => {
//         navigate(`/team/${id}`); // 팀 홈 경로로 이동
//     };
//
//     const handleEditTeam = (e) => {
//         e.stopPropagation();
//         alert(`팀 수정 페이지로 이동: ${name}`);
//     };
//
//     const handleLeaveTeam = (e) => {
//         e.stopPropagation();
//         alert(`팀 나가기: ${name}`);
//     };
//
//     return (
//         <div className="team-card" onClick={handleCardClick}>
//             {/* 첫 번째 영역: 팀 이름 및 나가기 버튼 */}
//             <div className="team-card-header">
//                 <h3 className="team-name">{name}</h3>
//                 <div className="team-actions">
//                     <button className="team-edit-button">수정</button>
//                     <button className="team-leave-button" onClick={handleLeaveTeam}>
//                         나가기
//                     </button>
//                 </div>
//             </div>
//
//             {/* 두 번째 영역: 팀 라벨 */}
//             <div className="team-label">
//                 {label ? (
//                     <span
//                         className="team-label-badge"
//                         style={{backgroundColor: label.color}}
//                     >
//                         {label.name}
//                     </span>
//                 ) : (
//                     <span className="no-label">라벨 없음</span>
//                 )}
//             </div>
//
//             {/* 세 번째 영역: 팀 멤버 및 채팅 알림 */}
//             <div className="team-footer">
//                 <div className="team-members">
//                     {members.map((member, index) => (
//                         <div key={index} className="team-member">
//                             <img
//                                 src={member.profileImage || "https://via.placeholder.com/32"}
//                                 alt={`${member.name || "Unknown"}'s profile`}
//                                 className="member-avatar"
//                             />
//                         </div>
//                     ))}
//                     <div className="team-member-add">+</div>
//                 </div>
//                 <div className="team-comments">
//                     <span className="comments-icon">💬</span> {comments}
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TeamCard;

import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

const TeamCard = ({ id, name, members = [], comments = 0 }) => {
    const [labels, setLabels] = useState([]); // 라벨 데이터를 저장하는 상태 (배열)
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
        alert(`팀 수정 페이지로 이동: ${name}`);
    };

    const handleLeaveTeam = (e) => {
        e.stopPropagation();
        alert(`팀 나가기: ${name}`);
    };

    return (
        <div className="team-card" onClick={handleCardClick}>
            {/* 첫 번째 영역: 팀 이름 및 나가기 버튼 */}
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
    );
};

export default TeamCard;
