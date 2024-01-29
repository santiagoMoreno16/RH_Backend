import mongoose, { Types } from "mongoose";

const trackingPointsSchema = new mongoose.Schema({
    pendingApproval: { type: Number, default: 0, required: [true, 'Pending Approval is required'] },
    pointsForApproval: { type: Number, default: 0, required: [true, 'Points for Approval is required'] },
    pendingAdvance: { type: Number, default: 0, required: [true, 'Points Advance is required'] },
    pointsRedemption: { type: Number, default: 0, required: [true, 'Points Redemption is required'] },
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
});
export const TrackingPointsModel = mongoose.model("TrackingPoints", trackingPointsSchema)