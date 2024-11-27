import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ChatRoomList = () => {
    const [rooms, setRooms] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get("/api/chatrooms").then((response) => {
            setRooms(response.data);
        });
    }, []);

    const handleRoomClick = (roomId) => {
        navigate(`/chat/${roomId}`);
    };

    return (
        <div>
            <h1>Chat Rooms</h1>
            <ul>
                {rooms.map((room) => (
                    <li key={room.id} onClick={() => handleRoomClick(room.id)}>
                        {room.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ChatRoomList;
