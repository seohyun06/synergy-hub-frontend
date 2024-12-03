// import React, { useState } from "react";
// import "./TeamEditModal.css";
//
// const TeamEditModal = ({ team, onClose, onSave }) => {
//     const [teamName, setTeamName] = useState(team?.name || "");
//     const [labels, setLabels] = useState(team?.labels || []);
//
//     const handleTeamNameChange = (e) => {
//         setTeamName(e.target.value);
//     };
//
//     const handleAddLabel = () => {
//         const newLabel = { id: Date.now(), name: "새 라벨", color: "#ccc" };
//         setLabels([...labels, newLabel]);
//     };
//
//     const handleDeleteLabel = (labelId) => {
//         setLabels(labels.filter((label) => label.id !== labelId));
//     };
//
//     const handleSave = () => {
//         onSave({ ...team, name: teamName, labels });
//     };
//
//     return (
//         <div className="modal-backdrop">
//             <div className="modal-container">
//                 <h2>팀 수정하기</h2>
//                 <input
//                     type="text"
//                     value={teamName}
//                     onChange={handleTeamNameChange}
//                     placeholder="팀 이름 입력"
//                     className="modal-input"
//                 />
//                 <div className="label-list">
//                     {labels.map((label) => (
//                         <div
//                             key={label.id}
//                             className="label-badge"
//                             style={{ backgroundColor: label.color }}
//                         >
//                             {label.name}
//                             <button
//                                 onClick={() => handleDeleteLabel(label.id)}
//                                 className="label-delete-button"
//                             >
//                                 X
//                             </button>
//                         </div>
//                     ))}
//                     <button className="add-label-button" onClick={handleAddLabel}>
//                         라벨 추가
//                     </button>
//                 </div>
//                 <div className="modal-buttons">
//                     <button className="cancel-button" onClick={onClose}>
//                         뒤로가기
//                     </button>
//                     <button className="save-button" onClick={handleSave}>
//                         수정하기
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TeamEditModal;

// import React, { useState } from "react";
// import "./TeamEditModal.css";
//
// const TeamEditModal = ({ team, onClose, onSave }) => {
//     const [teamName, setTeamName] = useState(team?.name || "");
//     const [labels, setLabels] = useState(team?.labels || []);
//     const [newLabelName, setNewLabelName] = useState(""); // 새 라벨 이름 상태
//     const [newLabelColor, setNewLabelColor] = useState("#ccc"); // 새 라벨 색상 상태
//
//     const handleTeamNameChange = (e) => {
//         setTeamName(e.target.value);
//     };
//
//     // 새 라벨 이름 변경
//     const handleNewLabelNameChange = (e) => {
//         setNewLabelName(e.target.value);
//     };
//
//     // 새 라벨 색상 변경
//     const handleNewLabelColorChange = (e) => {
//         setNewLabelColor(e.target.value);
//     };
//
//     // 라벨 추가
//     const handleAddLabel = () => {
//         if (!newLabelName.trim()) {
//             alert("라벨 이름을 입력해주세요!");
//             return;
//         }
//
//         const newLabel = {
//             id: Date.now(),
//             name: newLabelName,
//             color: newLabelColor,
//         };
//         setLabels([...labels, newLabel]);
//         setNewLabelName(""); // 입력 필드 초기화
//         setNewLabelColor("#ccc"); // 색상 초기화
//     };
//
//     const handleDeleteLabel = (labelId) => {
//         setLabels(labels.filter((label) => label.id !== labelId));
//     };
//
//     const handleSave = () => {
//         onSave({ ...team, name: teamName, labels });
//     };
//
//     return (
//         <div className="modal-backdrop">
//             <div className="modal-container">
//                 <h2>팀 수정하기</h2>
//                 <input
//                     type="text"
//                     value={teamName}
//                     onChange={handleTeamNameChange}
//                     placeholder="팀 이름 입력"
//                     className="modal-input"
//                 />
//
//                 {/* 라벨 리스트 */}
//                 <div className="label-list">
//                     {labels.map((label) => (
//                         <div
//                             key={label.id}
//                             className="label-badge"
//                             style={{ backgroundColor: label.color }}
//                         >
//                             {label.name}
//                             <button
//                                 onClick={() => handleDeleteLabel(label.id)}
//                                 className="label-delete-button"
//                             >
//                                 X
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* 라벨 추가 기능 */}
//                 <div className="add-label-section">
//                     <input
//                         type="text"
//                         value={newLabelName}
//                         onChange={handleNewLabelNameChange}
//                         placeholder="라벨 이름 입력"
//                         className="label-input"
//                     />
//                     <input
//                         type="color"
//                         value={newLabelColor}
//                         onChange={handleNewLabelColorChange}
//                         className="color-picker"
//                     />
//                     <button className="add-label-button" onClick={handleAddLabel}>
//                         라벨 추가
//                     </button>
//                 </div>
//
//                 {/* 모달 버튼 */}
//                 <div className="modal-buttons">
//                     <button className="cancel-button" onClick={onClose}>
//                         뒤로가기
//                     </button>
//                     <button className="save-button" onClick={handleSave}>
//                         수정하기
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TeamEditModal;

// import React, { useState } from "react";
// import "./TeamEditModal.css";
//
// const TeamEditModal = ({ team, onClose, onSave }) => {
//     const [teamName, setTeamName] = useState(team?.name || "");
//     const [labels, setLabels] = useState(team?.labels || []);
//     const [newLabelName, setNewLabelName] = useState(""); // 새 라벨 이름 상태
//     const [selectedColor, setSelectedColor] = useState("#FF5733"); // 선택된 색상 상태
//
//     // 색상 선택 옵션 (5가지 색상)
//     const colorOptions = ["#FF5733", "#33FF57", "#337BFF", "#FFD433", "#8C33FF"];
//
//     const handleTeamNameChange = (e) => {
//         setTeamName(e.target.value);
//     };
//
//     // 새 라벨 이름 변경
//     const handleNewLabelNameChange = (e) => {
//         setNewLabelName(e.target.value);
//     };
//
//     // 색상 선택 변경
//     const handleColorSelect = (color) => {
//         setSelectedColor(color);
//     };
//
//     // 라벨 추가
//     const handleAddLabel = () => {
//         if (!newLabelName.trim()) {
//             alert("라벨 이름을 입력해주세요!");
//             return;
//         }
//
//         const newLabel = {
//             id: Date.now(),
//             name: newLabelName,
//             color: selectedColor,
//         };
//         setLabels([...labels, newLabel]);
//         setNewLabelName(""); // 입력 필드 초기화
//         setSelectedColor("#FF5733"); // 색상 초기화
//     };
//
//     const handleDeleteLabel = (labelId) => {
//         setLabels(labels.filter((label) => label.id !== labelId));
//     };
//
//     const handleSave = () => {
//         onSave({ ...team, name: teamName, labels });
//     };
//
//     return (
//         <div className="modal-backdrop">
//             <div className="modal-container">
//                 <h2>팀 수정하기</h2>
//                 <input
//                     type="text"
//                     value={teamName}
//                     onChange={handleTeamNameChange}
//                     placeholder="팀 이름 입력"
//                     className="modal-input"
//                 />
//
//                 {/* 라벨 리스트 */}
//                 <div className="label-list">
//                     {labels.map((label) => (
//                         <div
//                             key={label.id}
//                             className="label-badge"
//                             style={{ backgroundColor: label.color }}
//                         >
//                             {label.name}
//                             <button
//                                 onClick={() => handleDeleteLabel(label.id)}
//                                 className="label-delete-button"
//                             >
//                                 X
//                             </button>
//                         </div>
//                     ))}
//                 </div>
//
//                 {/* 라벨 추가 기능 */}
//                 <div className="add-label-section">
//                     <input
//                         type="text"
//                         value={newLabelName}
//                         onChange={handleNewLabelNameChange}
//                         placeholder="라벨 이름 입력"
//                         className="label-input"
//                     />
//                     <div className="color-options">
//                         {colorOptions.map((color) => (
//                             <div
//                                 key={color}
//                                 className={`color-circle ${
//                                     selectedColor === color ? "selected" : ""
//                                 }`}
//                                 style={{ backgroundColor: color }}
//                                 onClick={() => handleColorSelect(color)}
//                             />
//                         ))}
//                     </div>
//                     <button className="add-label-button" onClick={handleAddLabel}>
//                         라벨 추가
//                     </button>
//                 </div>
//
//                 {/* 모달 버튼 */}
//                 <div className="modal-buttons">
//                     <button className="cancel-button" onClick={onClose}>
//                         뒤로가기
//                     </button>
//                     <button className="save-button" onClick={handleSave}>
//                         수정하기
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// };
//
// export default TeamEditModal;

import React, { useState } from "react";
import axios from "axios"; // axios 사용
import "./TeamEditModal.css";
import apiClient from "../../api/axiosInstance";

const TeamEditModal = ({ team, onClose, onSave }) => {
    const [teamName, setTeamName] = useState(team?.name || "");
    const [labels, setLabels] = useState(team?.labels || []);
    const [newLabelName, setNewLabelName] = useState("");
    const [selectedColor, setSelectedColor] = useState("#FF5733");

    // 색상 선택 옵션 (5가지 색상)
    const colorOptions = ["#FF5733", "#33FF57", "#337BFF", "#FFD433", "#8C33FF"];

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    // 새 라벨 이름 변경
    const handleNewLabelNameChange = (e) => {
        setNewLabelName(e.target.value);
    };

    // 색상 선택 변경
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    // 라벨 추가
    const handleAddLabel = async () => {
        if (!newLabelName.trim()) {
            alert("라벨 이름을 입력해주세요!");
            return;
        }

        try {
            const response = await axios.post(`http://localhost:8080/api/labels`, {
                name: newLabelName,
                color: selectedColor,
            });

            const newLabel = response.data;
            setLabels([...labels, newLabel]);
            setNewLabelName("");
            setSelectedColor("#FF5733");
        } catch (error) {
            console.error("라벨 추가 실패:", error);
            alert("라벨 추가 중 오류가 발생했습니다.");
        }
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

    // 팀 이름 및 라벨 저장
    // const handleSave = async () => {
    //     try {
    //         // 1. 팀 이름 수정
    //         await axios.put(`/teams/${team.id}`, {
    //             name: teamName,
    //         });
    //
    //         const labelIds = labels.map((label) => label.id);
    //         const mappingResponse = await apiClient.post(
    //             `/teams/${team.id}/labels`,
    //             { labelIds }
    //         );
    //
    //         window.location.reload();
    //         alert("수정이 완료되었습니다!");
    //         onSave({ id: team.id, name: teamName, labels });
    //     } catch (error) {
    //         console.error("수정 실패:", error);
    //         alert("수정 중 오류가 발생했습니다.");
    //     }
    // };

    // // 팀 이름 및 라벨 저장
    // const handleSave = async () => {
    //     try {
    //         // 1. 팀 이름 수정
    //         await axios.put(`/teams/${team.id}`, {
    //             name: teamName,
    //         });
    //
    //         // 라벨 ID 리스트 생성 (라벨이 없는 경우에도 빈 배열 전달)
    //         const labelIds = labels?.map((label) => label.id) || [];
    //
    //         // 2. 라벨 매핑 요청 (빈 배열도 처리 가능하도록 요청)
    //         await apiClient.post(`/teams/${team.id}/labels`, { labelIds });
    //
    //         // 성공 처리
    //         window.location.reload();
    //         alert("수정이 완료되었습니다!");
    //         onSave({ id: team.id, name: teamName, labels });
    //     } catch (error) {
    //         console.error("수정 실패:", error);
    //
    //         // 오류 처리: 라벨이 없어도 요청이 성공해야 하므로 구체적인 백엔드 오류 메시지 확인
    //         if (error.response && error.response.status === 400) {
    //             alert("라벨 매핑 중 잘못된 요청이 발생했습니다.");
    //         } else {
    //             alert("수정 중 알 수 없는 오류가 발생했습니다.");
    //         }
    //     }
    // };

    const handleSave = async () => {
        try {
            // 1. 팀 이름 수정
            await axios.put(`/teams/${team.id}`, {
                name: teamName,
            });

            // 라벨 ID 리스트 생성 (라벨이 없는 경우에도 빈 배열 전달)
            const labelIds = Array.isArray(labels) && labels.length > 0
                ? labels.map((label) => label.id)
                : []; // labels가 null, undefined, 비정상적인 값이면 빈 배열로 대체

            // 2. 라벨 매핑 요청 (빈 배열도 처리 가능하도록 요청)
            await apiClient.post(`/teams/${team.id}/labels`, { labelIds });

            // 성공 처리
            alert("수정이 완료되었습니다!");
            onSave({ id: team.id, name: teamName, labels });
            window.location.reload();
        } catch (error) {
            console.error("수정 실패:", error);

            // 오류 처리: 라벨이 없어도 요청이 성공해야 하므로 구체적인 백엔드 오류 메시지 확인
            if (error.response && error.response.status === 400) {
                alert("라벨 매핑 중 잘못된 요청이 발생했습니다.");
            } else {
                alert("수정 중 알 수 없는 오류가 발생했습니다.");
            }
            window.location.reload();
        }
    };



    return (
        <div className="modal-backdrop">
            <div className="modal-container">
                <h2>팀 수정하기</h2>
                <input
                    type="text"
                    value={teamName}
                    onChange={handleTeamNameChange}
                    placeholder="팀 이름 입력"
                    className="modal-input"
                />

                {/* 라벨 리스트 */}
                <div className="label-list">
                    {labels.map((label) => (
                        <div
                            key={label.id}
                            className="label-badge"
                            style={{ backgroundColor: label.color }}
                        >
                            {label.name}
                            <button
                                onClick={() => handleDeleteLabel(label.id)}
                                className="label-delete-button"
                            >
                                X
                            </button>
                        </div>
                    ))}
                </div>

                {/* 라벨 추가 기능 */}
                <div className="add-label-section">
                    <input
                        type="text"
                        value={newLabelName}
                        onChange={handleNewLabelNameChange}
                        placeholder="라벨 이름 입력"
                        className="label-input"
                    />
                    <div className="color-options">
                        {colorOptions.map((color) => (
                            <div
                                key={color}
                                className={`color-circle ${
                                    selectedColor === color ? "selected" : ""
                                }`}
                                style={{ backgroundColor: color }}
                                onClick={() => handleColorSelect(color)}
                            />
                        ))}
                    </div>
                    <button className="add-label-button" onClick={handleAddLabel}>
                        라벨 추가
                    </button>
                </div>

                {/* 모달 버튼 */}
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={onClose}>
                        뒤로가기
                    </button>
                    <button className="save-button" onClick={handleSave}>
                        수정하기
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamEditModal;
