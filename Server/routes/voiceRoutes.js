const express = require("express");
const { PythonShell } = require("python-shell");

const router = express.Router();

router.post("/", async (req, res) => {
    let { room } = req.body;

    let options = {
        mode: "text",
        pythonOptions: ["-u"],
        scriptPath: "./",
    };

    PythonShell.run("process.py", options, (err, results) => {
        if (err) return res.status(500).json({ error: err.message });

        const speechText = results[0];
        res.json({ speechText });
    });
});

module.exports = router;
