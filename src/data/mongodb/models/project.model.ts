import mongoose, { Types } from "mongoose";

const projectSchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required']},
    description: {type: String, required: [true, 'Description is required']},
    type: {type: String, enum: ["Area", "Project"], required: [true, 'Type is required']},
    duration: {type: Date, required: [true, 'Duration is required']},
    leaderId: { type: Types.ObjectId, ref: "User", required: [true, "Leader is required"], },
    quizId: { type: String, ref: "Quiz", required: [false, "Quiz  is required"], },
    budget: {type: Number, required: [true, 'Budget is required']},
    pointId: { type: String, ref: "Points", required: [false, "Points  is required"], },
})

export const projectModel = mongoose.model('Project', projectSchema)

