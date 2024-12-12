import React, { useState, useEffect } from "react";
import TeamCard from "./TeamCard";
import "./TeamList.css";
import axios from "axios";

const TeamList = () => {
    const [teams, setTeams] = useState([]); // State for team list
    const [isFetching, setIsFetching] = useState(false); // Loading state
    const [page, setPage] = useState(0); // Current page
    const [totalPages, setTotalPages] = useState(1); // Total pages

    const fetchTeams = async () => {
        if (isFetching || page >= totalPages) return;

        try {
            setIsFetching(true); // Start fetching

            const response = await axios.get(`${process.env.REACT_APP_API_URL}/teams/member`, {
                params: { page: page, size: 10 }, // Pagination parameters
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // JWT token
                },
            });

            const data = response.data;

            setTeams((prevTeams) => [
                ...prevTeams,
                ...data.filter(
                    (team) => !prevTeams.some((prevTeam) => prevTeam.id === team.id)
                ),
            ]);

            setTotalPages(data.totalPages || 1);
            setPage((prevPage) => prevPage + 1);
        } catch (error) {
            console.error("Error fetching teams:", error);
            alert("팀 목록을 가져오는 중 오류가 발생했습니다.");
        } finally {
            setIsFetching(false);
        }
    };

    // Initial fetch on mount
    useEffect(() => {
        fetchTeams();
    }, []);

    // Infinite scroll handler
    const handleScroll = () => {
        const scrollableHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        if (
            window.scrollY >= scrollableHeight - 300 && // 300px from the bottom
            !isFetching
        ) {
            fetchTeams();
        }
    };

    // Attach and detach scroll listener
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
            {isFetching && <div className="loading-indicator">팀 목록을 불러오는 중...</div>}
        </div>
    );
};

export default TeamList;