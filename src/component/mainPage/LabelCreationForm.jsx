// import React, { useState } from "react";
// import "./LabelCreationForm.css";
//
// const LabelCreationForm = ({ onAddLabel }) => {
//     const [labelName, setLabelName] = useState(""); // 라벨 이름 상태
//     const [selectedColor, setSelectedColor] = useState("#FF5733"); // 기본 색상
//
//     // 라벨 이름 변경 핸들러
//     const handleLabelNameChange = (e) => {
//         setLabelName(e.target.value);
//     };
//
//     // 색상 선택 핸들러
//     const handleColorSelect = (color) => {
//         setSelectedColor(color);
//     };
//
//     // 라벨 추가 버튼 핸들러
//     const handleAddLabel = () => {
//         if (!labelName.trim()) {
//             alert("라벨 이름을 입력해주세요.");
//             return;
//         }
//         onAddLabel({ name: labelName, color: selectedColor });
//         setLabelName(""); // 초기화
//         setSelectedColor("#FF5733"); // 기본 색상으로 초기화
//     };
//
//     return (
//         <div className="label-creation-form">
//             <input
//                 type="text"
//                 value={labelName}
//                 onChange={handleLabelNameChange}
//                 placeholder="Name new label"
//                 className="label-input"
//             />
//             <div className="color-picker">
//                 {["#FF5733", "#33FF57", "#337BFF", "#FFD433", "#8C33FF"].map(
//                     (color) => (
//                         <span
//                             key={color}
//                             className={`color-box ${
//                                 selectedColor === color ? "selected" : ""
//                             }`}
//                             style={{ backgroundColor: color }}
//                             onClick={() => handleColorSelect(color)}
//                         />
//                     )
//                 )}
//             </div>
//             <button className="add-label-button" onClick={handleAddLabel}>
//                 Add Label
//             </button>
//         </div>
//     );
// };
//
// export default LabelCreationForm;

import React, { useState } from "react";
import axios from "axios";
import "./LabelCreationForm.css";

const LabelCreationForm = ({ onAddLabel }) => {
    const [labelName, setLabelName] = useState(""); // 라벨 이름 상태
    const [selectedColor, setSelectedColor] = useState("#FF5733"); // 기본 색상
    const [isLoading, setIsLoading] = useState(false); // 로딩 상태

    // 라벨 이름 변경 핸들러
    const handleLabelNameChange = (e) => {
        setLabelName(e.target.value);
    };

    // 색상 선택 핸들러
    const handleColorSelect = (color) => {
        setSelectedColor(color);
    };

    // 라벨 추가 버튼 핸들러
    const handleAddLabel = async () => {
        if (!labelName.trim()) {
            alert("라벨 이름을 입력해주세요.");
            return;
        }

        try {
            setIsLoading(true); // 로딩 시작

            // 라벨 생성 API 호출
            const response = await axios.post("http://localhost:8080/api/labels", {
                name: labelName,
                color: selectedColor,
            });

            console.log("라벨 생성 성공:", response.data);
            onAddLabel(response.data); // 부모 컴포넌트에 새 라벨 전달
            setLabelName(""); // 입력 필드 초기화
            setSelectedColor("#FF5733"); // 기본 색상으로 초기화
        } catch (error) {
            console.error("라벨 생성 실패:", error);
            alert("라벨 생성 중 오류가 발생했습니다.");
        } finally {
            setIsLoading(false); // 로딩 종료
        }
    };

    return (
        <div className="label-creation-form">
            <input
                type="text"
                value={labelName}
                onChange={handleLabelNameChange}
                placeholder="Name new label"
                className="label-input"
            />
            <div className="color-picker">
                {["#FF5733", "#33FF57", "#337BFF", "#FFD433", "#8C33FF"].map(
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
                disabled={isLoading} // 로딩 중일 때 버튼 비활성화
            >
                {isLoading ? "Adding..." : "Add Label"}
            </button>
        </div>
    );
};

export default LabelCreationForm;

