// const express = require("express");
// const Meeting = require("../models/Meeting");
// const User = require("../models/User");
// const { PythonShell } = require("python-shell");

// const router = express.Router();

// // Create a new meeting
// router.post("/create", async (req, res) => {
//     const { meetingId, name, type } = req.body;

//     try {
//         let meeting = await Meeting.findOne({ meetingId });

//         if (!meeting) {
//             meeting = new Meeting({ meetingId, users: [] });
//             await meeting.save();
//         }

//         const user = new User({ name, type, meetingId });
//         await user.save();

//         meeting.users.push(user._id);
//         await meeting.save();

//         res.status(201).json({ message: "Meeting created/joined successfully", meeting });
//     } catch (error) {
//         res.status(500).json({ message: "Error creating/joining meeting", error });
//     }
// });

// // Process voice or sign input
// router.post("/process", async (req, res) => {
//     const { meetingId, inputType, message } = req.body;

//     try {
//         let options = {
//             mode: "text",
//             pythonOptions: ["-u"],
//             scriptPath: "./python",
//             args: [inputType, message],
//         };

//         PythonShell.run("sign_language.py", options, (err, results) => {
//             if (err) return res.status(500).json({ error: err.message });

//             res.json({ output: results[0] });
//         });
//     } catch (error) {
//         res.status(500).json({ message: "Processing error", error });
//     }
// });

// module.exports = router;










const express = require("express");
const Meeting = require("../models/Meeting");
const router = express.Router();

router.post("/create", async (req, res) => {
    const { meetingId, name, userType } = req.body;

    let meeting = await Meeting.findOne({ meetingId });
    if (!meeting) {
        meeting = new Meeting({ meetingId, participants: [{ name, userType }] });
        await meeting.save();
    } else {
        meeting.participants.push({ name, userType });
        await meeting.save();
    }

    res.json({ success: true, message: "Meeting created/joined", meeting });
});

router.get("/:meetingId", async (req, res) => {
    const meeting = await Meeting.findOne({ meetingId: req.params.meetingId });
    if (!meeting) return res.status(404).json({ error: "Meeting not found" });
    res.json(meeting);
});

module.exports = router;
