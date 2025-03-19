// const mongoose = require("mongoose");

// const UserSchema = new mongoose.Schema({
//     name: { type: String, required: true },
//     type: { type: String, enum: ["normal", "deaf"], required: true },
//     meetingId: { type: String, required: true },
// });

// module.exports = mongoose.model("User", UserSchema);


const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: String,
    meetingId: String,
    userType: { type: String, enum: ["normal", "deaf"] }
}, { timestamps: true });

module.exports = mongoose.model("User", userSchema);
