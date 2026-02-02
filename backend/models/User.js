const mongoose = require('mongoose');

const userScehma = new mongoose.Schema({
   name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    profileImgUrl:{ type: String , default:null },
    role:{ type: String, default:"member"  , enum:["member","admin"] },
}, { timestamps: true });

module.exports = mongoose.model("User", userScehma);