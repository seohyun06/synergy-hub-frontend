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
    const [teamName, setTeamName] = useState("");
    const [labels, setLabels] = useState([]);

    const { setIsLoggedIn, setUser } = useAuth(); // Context 사용

    useEffect(() => {
        const fetchMemberInfo = async () => {
            console.log("회원 정보 요청 시작"); 
            const jwtToken = localStorage.getItem("accessToken");
            if (jwtToken) {
                try {
                    const response = await fetch(ROUTES.GETMEMBER.link, {
                        headers: {
                            Authorization: `Bearer ${jwtToken}`,
                        },
                    });
                    
                    if (response.ok) {
                        const apiResponse = await response.json();
                        console.log("API 응답:", apiResponse); 
    
                        // payload에서 사용자 정보 가져오기
                        const memberData = apiResponse.payload;
    
                        setUser({
                            email: memberData.email,
                            nickname: memberData.nickname,
                            profileImageUrl: memberData.profileImageUrl,
                        });
                        setIsLoggedIn(true);
                    } else {
                        console.error("회원정보 요청 오류:", response.status);
                    }
                } catch (error) {
                    console.error("서버에 연결할 수 없습니다:", error);
                }
            }
        };

        fetchMemberInfo();
    }, [setUser, setIsLoggedIn]); // 의존성 배열이 필요하다면 여기에 추가


    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleAddLabel = (label) => {
        setLabels([...labels, label]);
    };

    const handleDeleteLabel = (labelId) => {
        const updatedLabels = labels.filter((label) => label.id !== labelId);
        setLabels(updatedLabels);
    };

    const handleCreateTeam = async () => {
        if (!teamName.trim()) {
            alert("팀 이름을 입력해주세요.");
            return;
        }

        try {
            // 1. 팀 생성 API 호출
            const teamResponse = await apiClient.post("/teams", {
                name: teamName,
            });

            console.log("팀 생성 성공:", teamResponse.data);

            // 2. 팀과 라벨 매핑 API 호출
            if (labels.length > 0) {
                const labelIds = labels.map((label) => label.id);
                const mappingResponse = await apiClient.post(
                    `/teams/${teamResponse.data.id}/labels`,
                    { labelIds }
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

    const handleCreateTeamClick = () => {
        setIsCreatingTeam(true);
    };

    const handleCancelClick = () => {
        setIsCreatingTeam(false);
        setTeamName("");
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
                ) : (
                    <>
                        <button className="team-button" onClick={handleCreateTeamClick}>
                            팀 개설하기
                        </button>
                        <button className="team-button">팀 참가하기</button>
                    </>
                )}
            </div>
        </div>
    );
};

export default MainPage;