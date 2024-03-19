import mongoose, { Types } from "mongoose";

const adminPoints = new mongoose.Schema({
  points: { type: Number, default: 0, required: [true, "Points is required"], },
  userId: { type: Types.ObjectId, ref: 'User',required: [true, "User id is required"], },
});

export const AdminPointsModel = mongoose.model("AdminPoints", adminPoints);
