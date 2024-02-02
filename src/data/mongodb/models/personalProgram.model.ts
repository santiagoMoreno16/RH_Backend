import mongoose, { Types } from "mongoose";

const personalProgramSchema = new mongoose.Schema({
    code: {type: String, required: [true, 'Code is required']},
    name: {type: String, required: [true, 'Name is required']},
    status: {type: Boolean, required: [true, 'Status is required']},
    type: {type: String, required: [true, 'Type is required']},
    expirationDate: {type: String, required: [true, 'Expiration date is required']},
    month: {type: Date, required: [true, 'Month is required']},
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    categoryId: { type: Types.ObjectId, ref: "Category", required: [true, "Category is required"], },

})

export const PersonalProgramModel = mongoose.model('PersonalProgram', personalProgramSchema)