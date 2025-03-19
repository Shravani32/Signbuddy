const { runPythonScript } = require("../utils/runPython");

const processSpeech = async (req, res) => {
    try {
        const result = await runPythonScript("process_sign_speech.py", ["speech"]);
        res.json({ processedWords: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { processSpeech };
