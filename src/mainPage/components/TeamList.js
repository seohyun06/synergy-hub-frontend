// import React from "react";
// import TeamCard from "./TeamCard";
//
// const TeamList = () => {
//     const teams = [
//         { id: "U1007", title: "Model Answer", status: "To Do", category: "Design", members: 5 },
//         { id: "U1003", title: "Create calendar, chat and email app pages", status: "Backlog", category: "Development", members: 5 },
//         { id: "U1002", title: "Product Design", status: "In Process", category: "Project", members: 5 },
//     ];
//
//     return (
//         <div className="team-list">
//             {teams.map((team, index) => (
//                 <TeamCard key={index} team={team} />
//             ))}
//         </div>
//     );
// };
//
// export default TeamList;

// import React from "react";
//
// const TeamList = () => {
//     const teams = [
//         { id: "U1007", title: "Model Answer", status: "To Do", category: "Design", members: 5 },
//         { id: "U1003", title: "Create calendar, chat and email app pages", status: "Backlog", category: "Development", members: 5 },
//         { id: "U1002", title: "Product Design", status: "In Process", category: "Project", members: 5 },
//         { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7 },
//         // 팀 데이터를 더 추가해도 스크롤이 활성화됨
//     ];
//
//     return (
//         <ul>
//             {teams.map((team) => (
//                 <li key={team.id} style={{ marginBottom: "15px" }}>
//                     <strong>{team.title}</strong> - {team.category} ({team.status})
//                 </li>
//             ))}
//         </ul>
//     );
// };
//
// export default TeamList;


import React from "react";
import TeamCard from "./TeamCard";
import "./TeamList.css";

const TeamList = () => {
    const teams = [
        { id: "U1007", title: "Model Answer", status: "To Do", category: "Design", members: 5, comments: 3 },
        { id: "U1003", title: "Create calendar, chat and email app pages", status: "Backlog", category: "Development", members: 5, comments: 4 },
        { id: "U1002", title: "Product Design", status: "In Process", category: "Project", members: 5, comments: 2 },
        { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        // { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        // { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        // { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        // { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
        // { id: "U1008", title: "Team Alpha", status: "Completed", category: "Testing", members: 7, comments: 6 },
    ];

    return (
        <div className="team-list">
            {teams.map((team) => (
                <TeamCard
                    key={team.id}
                    title={team.title}
                    id={team.id}
                    category={team.category}
                    status={team.status}
                    members={team.members}
                    comments={team.comments}
                />
            ))}
        </div>
    );
};

export default TeamList;
