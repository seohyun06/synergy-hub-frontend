import React, { useState } from "react";
import axios from "axios"; // axios 추가
import TeamList from "../components/TeamList";
import LabelCreationForm from "../components/LabelCreationForm"; // 라벨 생성 폼 추가
import "./MainPage.css";

const MainPage = () => {
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [teamName, setTeamName] = useState(""); // 팀 이름 상태
    const [labels, setLabels] = useState([]); // 라벨 목록 상태

    // 팀 이름 입력 핸들러
    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    // 라벨 추가 핸들러
    const handleAddLabel = (label) => {
        setLabels([...labels, label]); // 기존 라벨 목록에 새 라벨 추가
    };

    // 팀 생성 핸들러
    const handleCreateTeam = async () => {
        if (!teamName.trim()) {
            alert("팀 이름을 입력해주세요.");
            return;
        }

        try {
            // 팀 생성 API 호출
            const response = await axios.post("http://localhost:8080/teams", {
                name: teamName,
                labels, // 전체 라벨 데이터를 전송
            });

            console.log("팀 생성 성공:", response.data);
            alert("팀이 성공적으로 생성되었습니다!");

            // 상태 초기화
            setIsCreatingTeam(false);
            setTeamName("");
            setLabels([]);
        } catch (error) {
            console.error("팀 생성 실패:", error);
            alert("팀 생성 중 오류가 발생했습니다.");
        }
    };

    const handleCreateTeamClick = () => {
        setIsCreatingTeam(true);
    };

    const handleCancelClick = () => {
        setIsCreatingTeam(false); // 상태 초기화
        setTeamName("");
        setLabels([]);
    };

    return (
        <div className="main-page">
            {/* 팀 리스트 섹션 */}
            <div className="team-section">
                <div className="team-container">
                    <TeamList />
                </div>
            </div>

            {/* 버튼/폼 섹션 */}
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
                        {/* 추가된 라벨 목록 표시 */}
                        <div className="label-list">
                            {labels.map((label, index) => (
                                <span
                                    key={index}
                                    className="label-badge"
                                    style={{ backgroundColor: label.color }}
                                >
                                    {label.name}
                                </span>
                            ))}
                        </div>
                        <div className="form-buttons">
                            <button
                                className="cancel-button"
                                onClick={handleCancelClick}
                            >
                                뒤로가기
                            </button>
                            <button
                                className="next-button"
                                onClick={handleCreateTeam}
                            >
                                팀 개설
                            </button>
                        </div>
                    </div>
                ) : (
                    <>
                        <button
                            className="team-button"
                            onClick={handleCreateTeamClick}
                        >
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