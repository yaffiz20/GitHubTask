import mongoose from "mongoose";
const userSchema = mongoose.Schema({
    email: String,
    userName: String,
    phone: String
})
export const userModel = mongoose.model("user", userSchema);