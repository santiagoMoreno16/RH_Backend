import mongoose, { Types } from "mongoose";

const accessSchema = new mongoose.Schema({
  email: { type: String, required: [true, "Email is required"], unique: true },
  password: { type: String, required: [true, "Password is required"], },
  access: { type: String, enum: ["RH_E001", "RH_C001", "RH_S001"], required: [true, "Access is required"], },
});

export const AccessModel = mongoose.model("Access", accessSchema);
