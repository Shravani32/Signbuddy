import { useState } from "react";

const ChatComponent = () => {
    const [meetingId, setMeetingId] = useState("");
    const [name, setName] = useState("");
    const [userType, setUserType] = useState("normal");

    const createJoinMeeting = async () => {
        const res = await fetch("http://localhost:5000/api/meetings/create", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ meetingId, name, userType }),
        });

        const data = await res.json();
        console.log(data);
    };

    return (
        <div className="flex flex-col items-center p-5">
            <input
                type="text"
                className="border p-2 rounded-lg"
                value={meetingId}
                onChange={(e) => setMeetingId(e.target.value)}
                placeholder="Enter Meeting ID"
            />
            <input
                type="text"
                className="border p-2 rounded-lg mt-2"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter Your Name"
            />
            <select
                className="border p-2 rounded-lg mt-2"
                value={userType}
                onChange={(e) => setUserType(e.target.value)}
            >
                <option value="normal">Normal</option>
                <option value="deaf">Deaf</option>
            </select>
            <button
                className="bg-blue-500 text-white px-4 py-2 mt-3 rounded-lg"
                onClick={createJoinMeeting}
            >
                Join/Create Meeting
            </button>
        </div>
    );
};

export default ChatComponent;
