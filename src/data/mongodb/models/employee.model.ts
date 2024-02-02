import mongoose, { Types } from "mongoose";

const employeeSchema = new mongoose.Schema({
    gender: {type: String, required: [true, "Gender is required"]},
    birthdate: {type: Date, required: [true, "Birthdate is required"]},
    numberChildren: {type: String, required: [true, "Number of children is required"]},
    entryIntoCompany: {type: Date, required: [true, "Entry into Company is required"]},
    humanResources: {type: Boolean, required: [true, "Human resources is required"]},
    boss: {type: Boolean, required: [true, "Boss is required"]},
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    img: {type: String, required: [false, "Image is required"]},
})


export const EmployeeModel = mongoose.model("Employee", employeeSchema);
