// const mongoose = require("mongoose");

// const MeetingSchema = new mongoose.Schema({
//     meetingId: { type: String, required: true, unique: true },
//     users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
// });

// module.exports = mongoose.model("Meeting", MeetingSchema);



const mongoose = require("mongoose");

const meetingSchema = new mongoose.Schema({
    meetingId: { type: String, required: true, unique: true },
    participants: [
        {
            name: String,
            userType: { type: String, enum: ["normal", "deaf"], required: true }
        }
    ]
}, { timestamps: true });

module.exports = mongoose.model("Meeting", meetingSchema);
