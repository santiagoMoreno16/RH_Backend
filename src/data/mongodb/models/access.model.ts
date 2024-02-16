import mongoose, { Types } from "mongoose";

const accessSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"], },
  access: { type: String, enum: ["employee", "company", "supplier"], required: [true, "Access is required"], },
});

export const AccessModel = mongoose.model("Access", accessSchema);
