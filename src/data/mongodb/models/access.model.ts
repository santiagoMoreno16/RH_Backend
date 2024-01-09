import mongoose, { Types } from "mongoose";

const accessSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"], },
  userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], unique: true, },
});

export const AccessModel = mongoose.model("Access", accessSchema);
