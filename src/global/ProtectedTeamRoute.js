import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const ProtectedTeamRoute = ({ children }) => {
    const { teamId } = useParams();
    console.log("teamId:", teamId);
    const [userTeams, setUserTeams] = useState([]);
    console.log("userTeams:", userTeams);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchUserTeams = async () => {
            try {
                const response = await axios.get('/member-teams/member/1'); // 로그인된 사용자 ID를 설정하세요
                setUserTeams(response.data.map(team => team.id));
            } catch (err) {
                setError('팀 정보를 가져오는 데 실패했습니다.');
            } finally {
                setLoading(false);
            }
        };
        fetchUserTeams();
    }, []);

    if (loading) return <div>로딩 중...</div>;
    if (error) return <div>{error}</div>;

    if (!userTeams.includes(Number(teamId))) {
        return <div>팀에 접근 권한이 없습니다.</div>;
    }

    return children;
};

export default ProtectedTeamRoute;