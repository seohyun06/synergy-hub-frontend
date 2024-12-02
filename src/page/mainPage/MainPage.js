import React, { useState } from "react";
// import React, { useState, useEffect } from "react";
import axios from "axios"; // axios 추가
import apiClient from "../../api/axiosInstance"; // axios 인스턴스 가져오기
import TeamList from "../../component/mainPage/TeamList";
import LabelCreationForm from "../../component/mainPage/LabelCreationForm"; // 라벨 생성 폼 추가
import "./MainPage.css";

const MainPage = () => {
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [teamName, setTeamName] = useState("");
    const [labels, setLabels] = useState([]);

    // useEffect(() => {
    //     const fetchJwtHeader = async () => {
    //         try {
    //             const response = await fetch(ROUTES.JWTHEADER.link, {
    //                 method: "POST",
    //                 credentials: "include", // 쿠키 자동 전송
    //             });
    //
    //             if (response.ok) {
    //                 const token = response.headers.get("Authorization");
    //                 if (token) {
    //                     const jwtToken = token.split(" ")[1];
    //                     localStorage.setItem("accessToken", jwtToken);
    //                 }
    //             } else {
    //                 console.error("응답 오류:", response.status);
    //             }
    //         } catch (error) {
    //             console.error("서버에 연결할 수 없습니다:", error);
    //         }
    //     };
    //
    //     fetchJwtHeader(); // 컴포넌트가 마운트될 때 fetch 호출
    // }, []); // 빈 배열을 전달하여 한 번만 실행

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
