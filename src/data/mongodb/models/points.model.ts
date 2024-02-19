import mongoose, { Types } from "mongoose";

const pointsSchema = new mongoose.Schema({
    strategic: { type: Number, default: 0, required: [false, 'Pending Approval is required'] },
    tactical: { type: Number, default: 0, required: [false, 'Points for Approval is required'] },
    operational: { type: Number, default: 0, required: [false, 'Points Advance is required'] },
    personal: { type: Number, default: 0, required: [false, 'Points Redemption is required'] },
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
});
export const PointsModel = mongoose.model("Points", pointsSchema)