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


import React from "react";
import { useNavigate } from "react-router-dom";
import "./TeamCard.css";

const TeamCard = ({ title, id, category, status, members, comments }) => {
    const navigate = useNavigate(); // 페이지 이동을 위한 훅

    const handleCardClick = () => {
        navigate(`/team/${id}`); // 클릭 시 팀 페이지로 이동
    };

    // return (
    //     <div className="team-card">
    //         <div className="team-card-header">
    //             <h3>{title}</h3>
    //             <p className="team-id">#{id}</p>
    //         </div>
    //         <div className="team-card-body">
    //             <span className={`team-status ${status.toLowerCase()}`}>{status}</span>
    //             <span className="team-category">{category}</span>
    //         </div>
    //         <div className="team-card-footer">
    //             <span>+{members} members</span>
    //             <span>{comments} comments</span>
    //         </div>
    //     </div>
    // );

    return (
        <div className="team-card" onClick={handleCardClick} style={{ cursor: "pointer" }}>
            <div className="team-card-header">
                <h3>{title}</h3>
                <p className="team-id">#{id}</p>
            </div>
            <div className="team-card-body">
                <span className={`team-status ${status.toLowerCase()}`}>{status}</span>
                <span className="team-category">{category}</span>
            </div>
            <div className="team-card-footer">
                <span>+{members} members</span>
                <span>{comments} comments</span>
            </div>
        </div>
    );
};

export default TeamCard;

