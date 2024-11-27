import { Client } from "@stomp/stompjs";
import SockJS from "sockjs-client";

const WebSocketService = {
    stompClient: null,

    connect(roomId, onMessageReceived) {
        const socket = new SockJS("http://localhost:8080/ws-stomp");
        this.stompClient = new Client({
            webSocketFactory: () => socket,
            reconnectDelay: 5000,
            onConnect: () => {
                console.log("Connected to WebSocket");
                this.stompClient.subscribe(`/room/${roomId}`, (message) => {
                    onMessageReceived(JSON.parse(message.body));
                });
            },
        });
        this.stompClient.activate();
    },

    sendMessage(roomId, sender, senderEmail, message) {
        if (this.stompClient && this.stompClient.connected) {
            this.stompClient.publish({
                destination: `/send/${roomId}`,
                body: JSON.stringify({ sender, senderEmail, message }),
            });
        }
    },

    disconnect() {
        if (this.stompClient) {
            this.stompClient.deactivate();
            console.log("Disconnected from WebSocket");
        }
    },
};

export default WebSocketService;


