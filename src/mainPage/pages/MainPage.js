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
