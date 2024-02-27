import mongoose, { Types } from "mongoose";

const employeeSchema = new mongoose.Schema({
    gender: {type: String, default:'', required: [true, "Gender is required"]},
    birthdate: {type: Date, default:'', required: [true, "Birthdate is required"]},
    numberChildren: {type: String, default:'', required: [true, "Number of children is required"]},
    entryIntoCompany: {type: Date, default: '', required: [true, "Entry into Company is required"]},
    humanResources: {type: Boolean, default:'', required: [true, "Human resources is required"]},
    boss: {type: Boolean, default: false, required: [true, "Boss is required"]},
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    img: {type: String, default:'', required: [false, "Image is required"]},
})


export const EmployeeModel = mongoose.model("Employee", employeeSchema);
