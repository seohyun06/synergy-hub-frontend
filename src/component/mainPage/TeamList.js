import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import "./TeamList.css";
import axios from "axios";

const TeamList = () => {
    const [teams, setTeams] = useState([]);
    const [isFetching, setIsFetching] = useState(false);
    const [page, setPage] = useState(0);
    const [totalPages, setTotalPages] = useState(1);

    const fetchTeams = async () => {
        if (isFetching || page >= totalPages) return;
        setIsFetching(true);

        try {
            // `Authorization` 헤더에 JWT 토큰 추가
            const response = await axios.get("http://localhost:8080/teams/member", {
                params: { page: page, size: 10 }, // 페이지네이션 파라미터 추가
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // JWT 토큰 포함
                },
            });

            // 기존 팀 목록에 새로운 팀 추가 (중복 제거)
            setTeams((prevTeams) => [
                ...prevTeams,
                ...response.data.filter(
                    (team) => !prevTeams.some((prevTeam) => prevTeam.id === team.id)
                ),
            ]);

            // 페이지 정보 업데이트
            setTotalPages(response.data.totalPages || 1); // 총 페이지 수 설정
            setPage((prevPage) => prevPage + 1); // 현재 페이지 증가
        } catch (err) {
            console.error("Error fetching teams:", err);
        } finally {
            setIsFetching(false);
        }
    };


    useEffect(() => {
        fetchTeams();
    }, []);

    const handleScroll = () => {
        const scrollableHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (
            window.scrollY >= scrollableHeight - 300 && // 스크롤 하단 300px 여유
            !isFetching
        ) {
            fetchTeams();
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [isFetching]);

    return (
        <div className="team-list">
            {teams.map((team) => (
                <TeamCard
                    key={team.id}
                    id={team.id}
                    name={team.name}
                    labels={team.labels || []}
                    members={team.members || []}
                    comments={team.comments || 0}
                />
            ))}
            {isFetching && <div className="loading-indicator">Loading more teams...</div>}
        </div>
    );
};

export default TeamList;
