import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Name is required"], },
  lastName: { type: String, required: [true, "Last name is required"], },
  identificationType: { type: String, required: [true, "Identification type is required"], },
  identificationNum: { type: String, required: [true, "Identification number is required"], },
  phone: { type: String, required: [true, "Phone is required"], },
});

export const UserModel = mongoose.model("User", userSchema);
