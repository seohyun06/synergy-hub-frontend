import React, { useState } from "react";
import TeamList from "../components/TeamList";
import "./MainPage.css";

const MainPage = () => {
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);

    const handleCreateTeamClick = () => {
        setIsCreatingTeam(true);
    };

    const handleCancelClick = () => {
        setIsCreatingTeam(false); // 상태 초기화
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
                            placeholder="팀 이름 입력"
                            className="team-input"
                        />
                        <div className="labels">
                            {/*<span className="label">Design</span>*/}
                            {/*<span className="label">Development</span>*/}
                            <div className="label-input-container">
                                <input
                                    type="text"
                                    placeholder="라벨 추가"
                                    className="label-input"
                                />
                                <button className="add-label-button">+</button>
                            </div>
                        </div>
                        <div className="form-buttons">
                            <button className="cancel-button" onClick={handleCancelClick}>
                                뒤로가기
                            </button>
                            <button className="next-button">다음 →</button>
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