import mongoose, { Types } from "mongoose";

const roleSchema = new mongoose.Schema({
  name: { type: String, default: "User", required: [true, "Name is required"], },
  status: { type: Boolean, default: 1, required: [true, "Status is required"], },
});

export const RoleModel = mongoose.model("Role", roleSchema);
