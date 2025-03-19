const express = require("express");
const { processMessage } = require("../utils/pythonHandler");
const router = express.Router();

router.post("/process", async (req, res) => {
    const { inputType, message } = req.body;
    const output = await processMessage(inputType, message);
    res.json({ output });
});

module.exports = router;
