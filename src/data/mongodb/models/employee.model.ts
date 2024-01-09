import mongoose, { Types } from "mongoose";

const employeeSchema = new mongoose.Schema({
    gender: {type: String, required: [true, "Gender is required"]},
    birthDate: {type: Date, required: [true, "Birthdate is required"]},
    numberChildren: {type: String, required: [true, "Number of children is required"]},
    entryIntoCompany: {type: String, required: [true, "Entry into Company is required"]},
    humanResources: {type: String, required: [true, "Human resources is required"]},
    corporatePostionId: { type: Types.ObjectId, ref: "CorporatePosition", required: [true, "Corporate Position is required"], },
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    programId: { type: Types.ObjectId, ref: "PersonalProgram", required: [true, "Personal Program is required"], },
    img: {type: String, required: [true, "Image is required"]},
})


export const EmployeeModel = mongoose.model("Employee", employeeSchema);
