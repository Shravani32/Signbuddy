const { runPythonScript } = require("../utils/runPython");

const processSign = async (req, res) => {
    try {
        const { inputText } = req.body;
        const result = await runPythonScript("../process_sign_speech.py", ["sign", inputText]);
        res.json({ correctedText: result });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { processSign };
