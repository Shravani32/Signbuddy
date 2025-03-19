import { useState } from "react";
import axios from "axios";

const ChatComponent = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSignProcess = async () => {
        try {
            setLoading(true);
            setError("");
            const { data } = await axios.post("http://localhost:5000/api/sign/process", { inputText });
            console.log(data.correctedText);
            setOutputText(`Processed Sign: ${data.correctedText}`);
        } catch (err) {
            setError("Error processing sign language");
        } finally {
            setLoading(false);
        }
    };

    const handleSpeechProcess = async () => {
        try {
            setLoading(true);
            setError("");
            const { data } = await axios.post("http://localhost:5000/api/speech/process");
            setOutputText(`Processed Speech: ${data.processedWords}`);
        } catch (err) {
            setError("Error processing speech");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="p-6 bg-gray-100 text-center">
            <h1 className="text-2xl font-bold mb-4">Deaf-Normal Communication</h1>

            <textarea 
                className="w-full p-2 border rounded mb-4"
                placeholder="Enter sign language text..."
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
            ></textarea>

            <div className="flex justify-center space-x-4">
                <button 
                    onClick={handleSignProcess} 
                    className="bg-blue-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Capture Sign"}
                </button>
                <button 
                    onClick={handleSpeechProcess} 
                    className="bg-green-500 text-white px-4 py-2 rounded"
                    disabled={loading}
                >
                    {loading ? "Processing..." : "Record Message"}
                </button>
            </div>

            {loading && <p className="mt-4 text-lg text-blue-500">Processing...</p>}
            {error && <p className="mt-4 text-lg text-red-500">{error}</p>}
            {outputText && <p className="mt-4 text-lg font-semibold">{outputText}</p>}
        </div>
    );
};

export default ChatComponent;
