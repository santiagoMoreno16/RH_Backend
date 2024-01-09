import mongoose, { Types } from "mongoose";

const roleSchema = new mongoose.Schema({
  name: { type: String, required: [true, "Name is required"], },
  userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
  limitPoints: { type: Number, required: [true, "Points is required"], },
});

export const RoleModel = mongoose.model("Role", roleSchema);
