const { runPythonScript } = require("../utils/runPython");

const processSign = async (req, res) => {
    try {
        const { inputText } = req.body;
        if (!inputText) {
            return res.status(400).json({ error: "Input text is required" });
        }
        console.log("Processing input:", inputText);

        // Run Python script
        const result = await runPythonScript("../process_sign_speech.py", ["sign", inputText]);
        if (!result || result.startsWith("ERROR:")) {
            throw new Error("Failed to process sign language");
        }
        console.log("Result:", result);
        res.json({ correctedText: result });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { processSign };
