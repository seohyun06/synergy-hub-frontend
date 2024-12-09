import React from "react";
import { useParams } from "react-router-dom";

const TeamPage = () => {
    const { teamId  } = useParams(); // URL에서 팀 ID를 가져옴

    return (
        <div style={{ padding: "20px" }}>
            <h1>임시 팀 페이지</h1>
            <p>임시 팀 페이지입니다. 현재 팀 ID: {teamId} </p>
        </div>
    );
};

export default TeamPage;
