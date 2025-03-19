import { useState } from "react";
import axios from "axios";

const ChatComponent = () => {
    const [inputText, setInputText] = useState("");
    const [outputText, setOutputText] = useState("");
    
    const handleSignProcess = async () => {
        const { data } = await axios.post("http://localhost:5000/api/sign/process", { inputText });
        setOutputText(data.correctedText);
    };

    const handleSpeechProcess = async () => {
        const { data } = await axios.post("http://localhost:5000/api/speech/process");
        setOutputText(data.processedWords);
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
                <button onClick={handleSignProcess} className="bg-blue-500 text-white px-4 py-2 rounded">Capture Sign</button>
                <button onClick={handleSpeechProcess} className="bg-green-500 text-white px-4 py-2 rounded">Record Message</button>
            </div>

            {outputText && <p className="mt-4 text-lg font-semibold">{outputText}</p>}
        </div>
    );
};

export default ChatComponent;
