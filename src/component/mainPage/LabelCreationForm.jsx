import React, { useState } from "react";
import axios from "axios";
import "./LabelCreationForm.css";

const LabelCreationForm = ({ onAddLabel }) => {
    const [labelName, setLabelName] = useState(""); // State for label name
    const [selectedColor, setSelectedColor] = useState("#D6C1E6"); // Default color
    const [isLoading, setIsLoading] = useState(false); // Loading state

    // Handler for label name input
    const handleLabelNameChange = (e) => {
        setLabelName(e.target.value);
    };

    // Handler for color selection
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    // Handler for adding a new label
    const handleAddLabel = async () => {
        if (!labelName.trim()) {
            alert("라벨 이름을 입력해주세요.");
            return;
        }

        try {
            setIsLoading(true); // Start loading

            // API call to create a label
            const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/labels`, {
                name: labelName,
                color: selectedColor,
            });

            console.log("라벨 생성 성공:", response.data);
            onAddLabel(response.data); // Pass new label to parent component
            setLabelName(""); // Reset input field
            setSelectedColor("#D6C1E6"); // Reset to default color
        } catch (error) {
            console.error("라벨 생성 실패:", error);
            alert("라벨 생성 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false); // End loading
        }
    };

    return (
        <div className="label-creation-form">
            <input
                type="text"
                value={labelName}
                onChange={handleLabelNameChange}
                placeholder="라벨 이름 입력"
                className="label-input"
            />
            <div className="color-picker">
                {["#D6C1E6", "#FADADD", "#F7A9B7", "#B3E5FC", "#A2D2FF"].map(
                    (color) => (
                        <span
                            key={color}
                            className={`color-box ${
                                selectedColor === color ? "selected" : ""
                            }`}
                            style={{ backgroundColor: color }}
                            onClick={() => handleColorSelect(color)}
                        />
                    )
                )}
            </div>
            <button
                className="add-label-button"
                onClick={handleAddLabel}
                disabled={isLoading} // Disable button during loading
            >
                {isLoading ? "추가 중..." : "라벨 추가"}
            </button>
        </div>
    );
};

export default LabelCreationForm;