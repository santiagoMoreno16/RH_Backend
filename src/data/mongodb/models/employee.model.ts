import mongoose, { Types } from "mongoose";

const employeeSchema = new mongoose.Schema({
    gender: {type: String, default:' ', required: [true, "Gender is required"]},
    birthdate: {type: Date, default: 0, required: [true, "Birthdate is required"]},
    numberChildren: {type: String, required: [false, "Number of children is required"]},
    entryIntoCompany: {type: Date, default: 0, required: [false, "Entry into Company is required"]},

    enterprise: {type: String, default: 'Cuídame.tech', required: [true, "Enterprise is required"]},
    city:{ type: String, required: [false, "City is required"]},
    corporatePosition: {type: String, default: 'Empleado', required: [true, "Corporate Position is required"]},
    userId: { type: Types.ObjectId, ref: "User", required: [true, "User is required"], },
    base64: { type: String, required: true },
    imgpriv: { type: String, required: true },
    imgpublic: { type: String, required: true },
})


export const EmployeeModel = mongoose.model("Employee", employeeSchema);
