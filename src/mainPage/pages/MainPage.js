// import React from "react";
// import TeamList from "../components/TeamList";
// import CreateTeamButton from "../components/CreateTeamButton";
// import JoinTeamButton from "../components/JoinTeamButton";
// import "./MainPage.css";
//
// const MainPage = () => {
//     return (
//         <div className="main-page">
//             <div className="team-section">
//                 <div className="team-container">
//                     <TeamList />
//                 </div>
//             </div>
//             <div className="buttons-section">
//                 <CreateTeamButton />
//                 <JoinTeamButton />
//             </div>
//         </div>
//     );
// };
//
// export default MainPage;


// import React, { useState } from "react";
// import TeamList from "../components/TeamList";
// import "./MainPage.css";
//
// const MainPage = () => {
//     const [isCreatingTeam, setIsCreatingTeam] = useState(false);
//
//     const handleCreateTeamClick = () => {
//         setIsCreatingTeam(true); // 버튼 클릭 시 상태 변경
//     };
//
//     return (
//         <div className="main-page">
//             <div className="team-section">
//                 <div className="team-container">
//                     <TeamList />
//                 </div>
//             </div>
//
//             <div className="button-container">
//                 {isCreatingTeam ? (
//                     <div className="create-team-form">
//                         <h2>팀 개설하기</h2>
//                         <hr />
//                         <input
//                             type="text"
//                             placeholder="팀 이름 입력"
//                             className="team-input"
//                         />
//                         <div className="labels">
//                             <span className="label">Design</span>
//                             <span className="label">Development</span>
//                             <input
//                                 type="text"
//                                 placeholder="라벨 추가"
//                                 className="label-input"
//                             />
//                             <button className="add-label-button">+</button>
//                         </div>
//                         <button className="next-button">다음 →</button>
//                     </div>
//                 ) : (
//                     <>
//                         <button
//                             className="team-button"
//                             onClick={handleCreateTeamClick}
//                         >
//                             팀 개설하기
//                         </button>
//                         <button className="team-button">팀 참가하기</button>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default MainPage;


// import React, { useState } from "react";
// import TeamList from "../components/TeamList";
// import "./MainPage.css";
//
// const MainPage = () => {
//     const [isCreatingTeam, setIsCreatingTeam] = useState(false);
//
//     const handleCreateTeamClick = () => {
//         setIsCreatingTeam(true);
//     };
//
//     const handleCancelClick = () => {
//         setIsCreatingTeam(false); // 상태 초기화
//     };
//
//     return (
//         <div className="main-page">
//             {/* 팀 리스트 섹션 */}
//             <div className="team-section">
//                 <div className="team-container">
//                     <TeamList />
//                 </div>
//             </div>
//
//             {/* 버튼/폼 섹션 */}
//             <div className="button-container">
//                 {isCreatingTeam ? (
//                     <div className="team-create-container">
//                         <h2>팀 개설하기</h2>
//                         <hr />
//                         <input
//                             type="text"
//                             placeholder="팀 이름 입력"
//                             className="team-input"
//                         />
//                         <div className="labels">
//                             {/*<span className="label">Design</span>*/}
//                             {/*<span className="label">Development</span>*/}
//                             <div className="label-input-container">
//                                 <input
//                                     type="text"
//                                     placeholder="라벨 추가"
//                                     className="label-input"
//                                 />
//                                 <button className="add-label-button">+</button>
//                             </div>
//                         </div>
//                         <div className="form-buttons">
//                             <button className="cancel-button" onClick={handleCancelClick}>
//                                 뒤로가기
//                             </button>
//                             <button className="next-button">다음 →</button>
//                         </div>
//                     </div>
//                 ) : (
//                     <>
//                         <button className="team-button" onClick={handleCreateTeamClick}>
//                             팀 개설하기
//                         </button>
//                         <button className="team-button">팀 참가하기</button>
//                     </>
//                 )}
//             </div>
//         </div>
//     );
// };
//
// export default MainPage;


import React, { useState } from "react";
import axios from "axios"; // axios 추가
import TeamList from "../components/TeamList";
import "./MainPage.css";

const MainPage = () => {
    const [isCreatingTeam, setIsCreatingTeam] = useState(false);
    const [teamName, setTeamName] = useState(""); // 팀 이름 상태
    const [label, setLabel] = useState(""); // 라벨 상태
    const [labels, setLabels] = useState([]); // 라벨 목록 상태

    // 팀 이름 입력 핸들러
    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    // 라벨 입력 핸들러
    const handleLabelChange = (e) => {
        setLabel(e.target.value);
    };

    // 라벨 추가 핸들러
    const handleAddLabel = () => {
        if (label.trim()) {
            setLabels([...labels, label.trim()]);
            setLabel(""); // 입력 필드 초기화
        }
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
                labelId: labels.length > 0 ? labels[0] : null, // 첫 번째 라벨 ID (예시)
            });

            console.log("팀 생성 성공:", response.data);
            alert("팀이 성공적으로 생성되었습니다!");

            // 상태 초기화
            setIsCreatingTeam(false);
            setTeamName("");
            setLabels([]);

            // 새로고침 (데이터를 다시 로드)
            window.location.reload(); // 페이지 강제 새로고침
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
                        <div className="labels">
                            <div className="label-input-container">
                                <input
                                    type="text"
                                    value={label}
                                    onChange={handleLabelChange}
                                    placeholder="라벨 추가"
                                    className="label-input"
                                />
                                <button
                                    className="add-label-button"
                                    onClick={handleAddLabel}
                                >
                                    +
                                </button>
                            </div>
                            {/* 추가된 라벨 목록 표시 */}
                            <div className="label-list">
                                {labels.map((label, index) => (
                                    <span key={index} className="label">
                                        {label}
                                    </span>
                                ))}
                            </div>
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