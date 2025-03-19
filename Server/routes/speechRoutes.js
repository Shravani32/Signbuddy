const express = require("express");
const { processSpeech } = require("../controllers/speechController");

const router = express.Router();

router.post("/process", processSpeech);

module.exports = router;
