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
    const colorOptions = ["#D6C1E6", "#FADADD", "#F7A9B7", "#B3E5FC", "#A2D2FF"];

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

    // const handleSave = async () => {
    //     try {
    //         // 1. 팀 이름 수정
    //         await axios.put(`/teams/${team.id}`, {
    //             name: teamName,
    //         });
    //
    //         // 라벨 ID 리스트 생성 (라벨이 없는 경우에도 빈 배열 전달)
    //         const labelIds = Array.isArray(labels) && labels.length > 0
    //             ? labels.map((label) => label.id)
    //             : []; // labels가 null, undefined, 비정상적인 값이면 빈 배열로 대체
    //
    //         // 2. 라벨 매핑 요청 (빈 배열도 처리 가능하도록 요청)
    //         await apiClient.post(`/teams/${team.id}/labels`, { labelIds });
    //
    //         // 성공 처리
    //         alert("수정이 완료되었습니다!");
    //         onSave({ id: team.id, name: teamName, labels });
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("수정 실패:", error);
    //
    //         // 오류 처리: 라벨이 없어도 요청이 성공해야 하므로 구체적인 백엔드 오류 메시지 확인
    //         if (error.response && error.response.status === 400) {
    //             alert("라벨 매핑 중 잘못된 요청이 발생했습니다.");
    //         } else {
    //             alert("수정 중 알 수 없는 오류가 발생했습니다.");
    //         }
    //         window.location.reload();
    //     }
    // };

    const handleSave = async () => {
        try {
            // 1. 팀 이름 수정 (항상 실행)
            await axios.put(`/teams/${team.id}`, {
                name: teamName,
            });

            // 라벨 ID 리스트 생성 (라벨이 없는 경우에도 빈 배열 전달)
            const labelIds = Array.isArray(labels) && labels?.length > 0
                ? labels.map((label) => label.id)
                : []; // labels가 null, undefined, 비정상적인 값이면 빈 배열로 대체

            // 2. 라벨 매핑 요청
            try {
                // 라벨 ID가 없는 경우에도 빈 배열로 요청을 보냄
                await apiClient.post(`/teams/${team.id}/labels`, { labelIds });
                console.log("라벨 매핑 완료");
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    console.warn("404 오류 발생: 라벨 매핑 경로를 찾을 수 없습니다. 요청을 건너뜁니다.");
                } else {
                    throw error; // 다른 오류는 다시 던짐
                }
            }

            // 성공 처리
            alert("수정이 완료되었습니다!");
            onSave({ id: team.id, name: teamName, labels: labels || [] }); // labels가 null일 경우 빈 배열 전달
            window.location.reload();
        } catch (error) {
            console.error("수정 실패:", error);

            // 최종 오류 처리
            if (error.response && error.response.status === 400) {
                alert("라벨 매핑 중 잘못된 요청이 발생했습니다.");
            } else {
                alert("수정 중 알 수 없는 오류가 발생했습니다.");
            }
            window.location.reload();
        }
    };

    // const handleSave = async () => {
    //     try {
    //         // 1. 팀 이름 수정
    //         await axios.put(`/teams/${team.id}`, {
    //             name: teamName,
    //         });
    //
    //         // 라벨 ID 리스트 생성 (라벨이 없는 경우 null이나 빈 배열 처리)
    //         const labelIds = Array.isArray(labels) && labels.length > 0
    //             ? labels.map((label) => label.id)
    //             : null; // labels가 null, undefined, 비정상적인 값이면 null로 설정
    //
    //         if (labelIds) {
    //             // 2-1. 라벨이 있는 경우 라벨 매핑 요청
    //             await apiClient.post(`/teams/${team.id}/labels`, { labelIds });
    //             console.log("라벨 매핑 완료");
    //         } else {
    //             // 2-2. 라벨이 없는 경우 팀 이름만 처리
    //             const headers = {
    //                 Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
    //             };
    //
    //             await apiClient.post(
    //                 "/teams",
    //                 { name: teamName }, // 팀 이름만 포함
    //                 { headers }
    //             );
    //             console.log("라벨 없이 팀 정보 처리 완료");
    //         }
    //
    //         // 성공 처리
    //         alert("수정이 완료되었습니다!");
    //         onSave({ id: team.id, name: teamName, labels });
    //         window.location.reload();
    //     } catch (error) {
    //         console.error("수정 실패:", error);
    //
    //         // 오류 처리: 라벨이 없어도 요청이 성공해야 하므로 구체적인 백엔드 오류 메시지 확인
    //         if (error.response && error.response.status === 400) {
    //             alert("라벨 매핑 중 잘못된 요청이 발생했습니다.");
    //         } else {
    //             alert("수정 중 알 수 없는 오류가 발생했습니다.");
    //         }
    //         window.location.reload();
    //     }
    // };





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
                        placeholder="추가 라벨 이름 입력"
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
                    <button className="TeamEdit-cancel-button" onClick={onClose}>
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
