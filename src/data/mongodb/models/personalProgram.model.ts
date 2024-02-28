import mongoose, { Types } from "mongoose";

const personalProgramSchema = new mongoose.Schema({
    code: {type: String, required: [true, 'Code is required']},
    name: {type: String, required: [true, 'Name is required']},
    status: {type: Boolean, required: [true, 'Status is required']},
    description: {type: String, required: [true, 'Description is required']},
    requirement: {type: Number, required: [true, 'Requirement is required']},
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    categoryId: { type: Types.ObjectId, ref: "Category", required: [true, "Category  is required"], },

})

export const PersonalProgramModel = mongoose.model('PersonalProgram', personalProgramSchema)