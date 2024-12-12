import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import {useAuth} from "./AuthContext";

const ProtectedTeamRoute = ({ children }) => {
    const { teamId } = useParams();
    const { user } = useAuth(); // 로그인된 사용자 정보 가져오기
    const [userTeams, setUserTeams] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserTeams = async () => {
            try {
                const response = await axios.get(`/member-teams/member/${user.id}`); // 동적으로 사용자 ID 설정
                setUserTeams(response.data.map(team => team.id));
            } catch (err) {
                setError('팀 정보를 가져오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchUserTeams();
    }, [user.id]);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    if (!userTeams.includes(Number(teamId))) {
        return <div>팀에 접근 권한이 없습니다.</div>;
    }

    return children;
};

export default ProtectedTeamRoute;