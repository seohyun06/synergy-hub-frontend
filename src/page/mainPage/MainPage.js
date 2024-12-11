// import React, { useState } from "react";
import React, { useState, useEffect } from "react";
import axios from "axios"; // axios 추가
import { ROUTES } from "../../global/Links";
import apiClient from "../../api/axiosInstance"; // axios 인스턴스 가져오기
import TeamList from "../../component/mainPage/TeamList";
import LabelCreationForm from "../../component/mainPage/LabelCreationForm"; // 라벨 생성 폼 추가
import "./MainPage.css";
import { useAuth } from "../../global/AuthContext";

const MainPage = () => {
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [isJoiningTeam, setIsJoiningTeam] = useState(false);
    const [teamName, setTeamName] = useState("");
    const [inviteCode, setInviteCode] = useState(""); // 초대 코드 상태 추가
    const [labels, setLabels] = useState([]);

    const { setIsLoggedIn, setUser } = useAuth();
    const { updateAuthState } = useAuth();

    // useEffect(() => {
    //     const fetchMemberInfo = async () => {
    //         console.log("회원 정보 요청 시작");
    //         const jwtToken = localStorage.getItem("accessToken");

    //         const requestHeaders = jwtToken
    //             ? {
    //                 Authorization: `Bearer ${jwtToken}`,
    //             }
    //             : {};

    //         try {
    //             let response = await fetch(ROUTES.GETMEMBER.link, {
    //                 headers: requestHeaders,
    //             });

    //             if (response.status === 401) {
    //                 console .warn("401 Unauthorized 발생, 쿠키 포함 재요청");
    //                 response = await fetch(ROUTES.REISSUE.link, {
    //                     method: "POST",
    //                     credentials: "include",
    //                 });

    //                 if (response.ok) {
    //                     console.log("reissue 성공");

    //                     const token = response.headers.get("Authorization");

    //                     if (token) {
    //                         const jwtToken = token.split(" ")[1];

    //                         localStorage.setItem("accessToken", jwtToken);

    //                         // navigate('/');
    //                         window.location.reload();
    //                     } else {
    //                         alert("reissue 오류");
    //                     }
    //                 }

    //             }

    //             if (response.ok) {
    //                 const apiResponse = await response.json();
    //                 console.log("API 응답:", apiResponse);

    //                 const memberData = apiResponse.payload;

    //                 updateAuthState(
    //                     {
    //                         userId: memberData.id,
    //                         email: memberData.email,
    //                         nickname: memberData.nickname,
    //                         profileImageUrl: memberData.profileImageUrl,
    //                         loginType: memberData.loginType,
    //                     },
    //                     true
    //                 );
    //             } else {
    //                 console.error("회원정보 요청 오류:", response.status);
    //             }
    //         } catch (error) {
    //             console.error("서버에 연결할 수 없습니다:", error);
    //         }
    //     };

    //     fetchMemberInfo();
    // }, [setUser, setIsLoggedIn]);

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleInviteCodeChange = (e) => {
        setInviteCode(e.target.value);
    };

    const handleAddLabel = (label) => {
        setLabels([...labels, label]);
    };

    // 라벨 삭제
    const handleDeleteLabel = async (labelId) => {
        try {
            await axios.delete(`http://localhost:8080/api/labels/${labelId}`);
            setLabels(labels.filter((label) => label.id !== labelId));
        } catch (error) {
            console.error("라벨 삭제 실패:", error);
            alert("라벨 삭제 중 오류가 발생했습니다.");
        }
    };

    const handleCreateTeam = async () => {
        if (!teamName.trim()) {
            alert("팀 이름을 입력해주세요.");
            return;
        }

        const headers = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };

        try {
            const teamResponse = await apiClient.post(
                "/teams",
                { name: teamName },
                { headers }
            );
            console.log("팀 생성 성공:", teamResponse.data);

            if (labels.length > 0) {
                const labelIds = labels.map((label) => label.id);
                const mappingResponse = await apiClient.post(
                    `/teams/${teamResponse.data.id}/labels`,
                    { labelIds },
                    { headers }
                );
                console.log("라벨 매핑 성공:", mappingResponse.data);
            }

            alert("팀이 성공적으로 생성되었습니다!");
            window.location.reload();
        } catch (error) {
            console.error("팀 생성 실패:", error);
            alert("팀 생성 중 오류가 발생했습니다.");
        }
    };

    const handleJoinTeam = async () => {
        if (!inviteCode.trim()) {
            alert("초대 코드를 입력해주세요.");
            return;
        }

        const headers = {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        };

        try {
            const response = await apiClient.post(
                "/member-teams/teams/join",
                { inviteCode },
                { headers }
            );

            if (response.status === 200) {
                alert("팀에 성공적으로 참가했습니다!");
                window.location.reload();
            }
        } catch (error) {
            console.error("팀 참가 실패:", error);
            alert("팀 참가 중 오류가 발생했습니다.");
        }
    };

    const handleCreateTeamClick = () => {
        setIsCreatingTeam(true);
        setIsJoiningTeam(false);
    };

    const handleJoinTeamClick = () => {
        setIsJoiningTeam(true);
        setIsCreatingTeam(false);
    };

    const handleCancelClick = () => {
        setIsCreatingTeam(false);
        setIsJoiningTeam(false);
        setTeamName("");
        setInviteCode("");
        setLabels([]);
    };

    return (
        <div className="main-page">
            <div className="team-section">
                <div className="team-container">
                    <TeamList />
                </div>
            </div>
            <div className="button-container">
                {isCreatingTeam ? (
                    <div className="team-create-container">
                        <h2>팀 개설하기</h2>
                        <hr />
                        <input
                            type="text"
                            value={teamName}
                            onChange={handleTeamNameChange}
                            placeholder="팀 이름 입력"
                            className="team-input"
                        />
                        <LabelCreationForm onAddLabel={handleAddLabel} />
                        <div className="label-list">
                            {labels.map((label) => (
                                <div
                                    key={label.id}
                                    className="label-badge"
                                    style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        backgroundColor: label.color,
                                        color: "white",
                                        margin: "5px",
                                        padding: "5px 10px",
                                        borderRadius: "5px",
                                    }}
                                >
                                    {label.name}
                                    <button
                                        onClick={() => handleDeleteLabel(label.id)}
                                        style={{
                                            marginLeft: "10px",
                                            background: "none",
                                            border: "none",
                                            color: "white",
                                            fontWeight: "bold",
                                            cursor: "pointer",
                                        }}
                                    >
                                        X
                                    </button>
                                </div>
                            ))}
                        </div>
                        <div className="form-buttons">
                            <button className="cancel-button" onClick={handleCancelClick}>
                                뒤로가기
                            </button>
                            <button className="next-button" onClick={handleCreateTeam}>
                                팀 개설
                            </button>
                        </div>
                    </div>
                ) : isJoiningTeam ? (
                    <div className="team-join-container">
                        <h2>팀 참가하기</h2>
                        <hr />
                        <input
                            type="text"
                            value={inviteCode}
                            onChange={handleInviteCodeChange}
                            placeholder="초대코드 입력"
                            className="team-input"
                        />
                        <div className="form-buttons">
                            <button className="cancel-button" onClick={handleCancelClick}>
                                뒤로가기
                            </button>
                            <button className="next-button" onClick={handleJoinTeam}>
                                팀 참가
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <button className="team-button" onClick={handleCreateTeamClick}>
                            팀 개설하기
                        </button>
                        <button className="team-button" onClick={handleJoinTeamClick}>
                            팀 참가하기
                        </button>
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;
