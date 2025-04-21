const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: { type: String, requiee: true },
    email: { type: String, requiee: true, unique: true },
    password: { type: String, requiee: true },
    role: { type: String, requiee: true }
})
const User = mongoose.model("users", userSchema)
module.exports = User