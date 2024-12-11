import React, { useState } from 'react';

const EventColor = ({ currentColor, onColorChange }) => {
    const [color, setColor] = useState(currentColor);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
        onColorChange(newColor);  // 부모 컴포넌트에 색상 전달
    };

    return (
        <div>
            <label>색상 변경:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );
};

export default EventColor;
