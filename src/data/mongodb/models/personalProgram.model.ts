import mongoose from "mongoose";

const personalProgramSchema = new mongoose.Schema({
    code: {type: String, required: [true, 'Code is required']},
    name: {type: String, required: [true, 'Name is required']},
    status: {type: String, required: [true, 'Status is required']},
    type: {type: String, required: [true, 'Type is required']},
    expirationDate: {type: String, required: [true, 'Expiration date is required']},
    month: {type: Date, required: [true, 'Month is required']},
})

export const PersonalProgramModel = mongoose.model('PersonalProgram', personalProgramSchema)