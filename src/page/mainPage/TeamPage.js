import React from "react";
import { useSearchParams } from "react-router-dom";

const TeamPage = () => {
    const [searchParams] = useSearchParams();
    const teamId = searchParams.get("team"); // 쿼리 파라미터에서 'team' 값을 가져옴

    return (
        <div style={{ padding: "20px" }}>
            <h1>임시 팀 페이지</h1>
            <p>임시 팀 페이지입니다. 현재 팀 ID: {teamId}</p>
        </div>
    );
};

export default TeamPage;
