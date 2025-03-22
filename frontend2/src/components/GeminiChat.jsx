import { useState } from "react";
import axios from "axios";
import { Loader2 } from "lucide-react";

const GeminiChat = () => {
    const [prompt, setPrompt] = useState("");
    const [messages, setMessages] = useState([]);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!prompt.trim()) return alert("Please enter a prompt!");

        const userMessage = { role: "user", text: prompt };
        setMessages((prev) => [...prev, userMessage]);
        setPrompt("");
        setLoading(true);

        try {
            const res = await axios.post("http://localhost:5000/api/generate", { prompt });
            const aiResponse = { role: "ai", text: res.data.response };
            setMessages((prev) => [...prev, aiResponse]);
        } catch (error) {
            console.error("Error:", error);
            setMessages((prev) => [...prev, { role: "ai", text: "Failed to fetch response." }]);
        }
        setLoading(false);
    };

    return (
        <div className="flex flex-col items-center min-h-screen bg-white px-4 py-8">
            
            {/* Header */}
            <h1 className="text-4xl font-semibold text-gray-600 mt-12 mb-6">Heyy!! How can I help You??</h1>

            {/* Chat Container */}
            <div className="w-full max-w-2xl bg-white/10 backdrop-blur-xl rounded-3xl shadow-lg p-6 flex flex-col space-y-4">
                {/* Messages */}
                <div className="flex flex-col space-y-4 max-h-[500px] overflow-y-auto">
                    {messages.map((msg, index) => (
                        <div
                            key={index}
                            className={`flex items-center ${
                                msg.role === "user" ? "justify-end" : "justify-start"
                            }`}
                        >
                            <div
                                className={`p-4 rounded-2xl text-lg max-w-[75%] shadow-md ${
                                    msg.role === "user"
                                        ? "bg-pink-600 text-white rounded-br-none"
                                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                                }`}
                            >
                                {msg.text}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Textarea Input */}
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                    <textarea
                        className="w-full p-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 text-lg resize-none"
                        rows="2"
                        placeholder="Ask Gemini anything..."
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                    />
                    
                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-medium text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-300"
                        disabled={loading}
                    >
                        {loading ? <Loader2 className="animate-spin w-5 h-5" /> : "Generate Response"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default GeminiChat;
