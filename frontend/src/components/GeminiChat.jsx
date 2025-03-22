import { useState } from "react";
import axios from "axios";

const GeminiChat = () => {
    const [prompt, setPrompt] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt) return alert("Please enter a prompt!");

        setLoading(true);
        try {
            const res = await axios.post("http://localhost:5000/api/generate", { prompt });
            setResponse(res.data.response);
        } catch (error) {
            console.error("Error:", error);
            setResponse("Failed to fetch response.");
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
            <h1 className="text-3xl font-bold text-indigo-800 mb-6">Gemini AI Chat</h1>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 rounded-lg shadow-md">
                <textarea
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    rows="4"
                    placeholder="Enter your prompt..."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                />
                <button
                    type="submit"
                    className="w-full mt-4 bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition duration-300"
                    disabled={loading}
                >
                    {loading ? "Generating..." : "Generate Response"}
                </button>
            </form>

            {response && (
                <div className="w-full max-w-lg mt-6 p-4 bg-white shadow-md rounded-lg">
                    <h2 className="text-lg font-semibold text-indigo-700">Response:</h2>
                    <p className="mt-2 text-gray-700">{response}</p>
                </div>
            )}
        </div>
    );
};

export default GeminiChat;
