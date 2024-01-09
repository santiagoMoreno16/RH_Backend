import mongoose from "mongoose";

const trackingPointsSchema = new mongoose.Schema({
    pendingApproval: {type: Number, required: [true, 'Pending Approval is required']},
    pointsForApproval: {type: Number, required: [true, 'Points for Approval is required']},
    pendingAdvance: {type: Number, required: [true, 'Points Advance is required']},
    pointsRedemption: {type: Number, required: [true, 'Points Redemption is required']},
})

export const TrackingPointsModel = mongoose.model("TrackingPoints", trackingPointsSchema)