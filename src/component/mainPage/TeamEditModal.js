import React, { useState } from "react";
import "./TeamEditModal.css";

const TeamEditModal = ({ team, onClose, onSave }) => {
    const [teamName, setTeamName] = useState(team?.name || "");
    const [labels, setLabels] = useState(team?.labels || []);

    const handleTeamNameChange = (e) => {
        setTeamName(e.target.value);
    };

    const handleAddLabel = () => {
        const newLabel = { id: Date.now(), name: "새 라벨", color: "#ccc" };
        setLabels([...labels, newLabel]);
    };

    const handleDeleteLabel = (labelId) => {
        setLabels(labels.filter((label) => label.id !== labelId));
    };

    const handleSave = () => {
        onSave({ ...team, name: teamName, labels });
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
                    <button className="add-label-button" onClick={handleAddLabel}>
                        라벨 추가
                    </button>
                </div>
                <div className="modal-buttons">
                    <button className="cancel-button" onClick={onClose}>
                        취소
                    </button>
                    <button className="save-button" onClick={handleSave}>
                        저장
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TeamEditModal;
