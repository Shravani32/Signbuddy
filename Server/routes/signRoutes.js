const express = require("express");
const { processSign } = require("../controllers/signController");

const router = express.Router();

router.post("/process", processSign);

module.exports = router;
