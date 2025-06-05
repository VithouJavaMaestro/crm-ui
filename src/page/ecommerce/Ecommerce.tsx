import {useCallback, useEffect, useRef} from "react";
import {Client} from "@stomp/stompjs";


const url = "ws://localhost:8200/ws";

export const Ecommerce = () => {

    const clientRef = useRef<Client | null>(null);

    useEffect(() => {
        const client = new Client({
            brokerURL: url,
            onConnect: () => {
                console.log("Connected to WebSocket Client");
            },
            onDisconnect: () => {
                console.log("Disconnected from WebSocket Client");
            },
            connectionTimeout: 5000,
        });

        client.activate();

        clientRef.current = client;

        return () => {
            client.deactivate().then(() => {
                console.log("Deactivated from WebSocket Client");
            });
        }
    }, []);

    const sendMessage = useCallback(() => {
        clientRef.current?.publish({
            destination: "/hello",
            body: JSON.stringify({
                "hello": "world"
            })
        })
    }, []);

    return (
        <div>
            <button style={{
                width: 100,
                height: 100,
                backgroundColor: "blue",
                cursor: "pointer"
            }} onClick={sendMessage}>
                Send Hello
            </button>
        </div>
    );
}