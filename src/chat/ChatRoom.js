import useWebSocket from './UseWebSocket';
import React, { useEffect } from "react"; // useEffect 추가


const ChatRoom = ({ chatRoomId, userId, nickname }) => {
    const {
        sendMessage,
        fetchMessagesByRoom,
        deleteMessage,
    } = useWebSocket(
        chatRoomId,
        (message) => console.log('New message:', message),
        (messages) => console.log('Fetched messages:', messages),
        (deletedId) => console.log('Deleted message ID:', deletedId),
        userId,
        nickname
    );

    useEffect(() => {
        fetchMessagesByRoom();
    }, [fetchMessagesByRoom]);

    const handleSendMessage = () => {
        sendMessage('Hello, World!');
    };

    const handleDeleteMessage = (id) => {
        deleteMessage(id);
    };

    return (
        <div>
            <button onClick={handleSendMessage}>Send Message</button>
            <button onClick={() => handleDeleteMessage(1)}>Delete Message</button>
        </div>
    );
};

export default ChatRoom;
