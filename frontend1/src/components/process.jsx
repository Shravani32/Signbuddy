import React, { useState, useEffect } from "react";
import io from "socket.io-client";
import axios from "axios";

const socket = io("http://localhost:5000");

function process() {
    const [room, setRoom] = useState("room1");
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    useEffect(() => {
        socket.emit("joinRoom", room);
        axios.get(`http://localhost:5000/messages/${room}`).then(res => setMessages(res.data));

        socket.on("receiveMessage", (message) => {
            setMessages(prev => [...prev, message]);
        });

        return () => socket.off("receiveMessage");
    }, [room]);

    const sendMessage = () => {
        socket.emit("sendMessage", { room, sender: "User", message: input, type: "text" });
        setInput("");
    };

    return (
        <div>
            <h2>Real-Time Sign & Speech</h2>
            <div>{messages.map((msg, index) => <p key={index}><b>{msg.sender}:</b> {msg.message}</p>)}</div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />
            <button onClick={sendMessage}>Send</button>
        </div>
    );
}

export default process;
