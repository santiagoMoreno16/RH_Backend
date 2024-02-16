import mongoose, { Types } from "mongoose";

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: [true, "Name is required"], },
  lastName: { type: String, required: [true, "Last name is required"], },
  identificationType: { type: String, required: [true, "Identification type is required"], },
  identificationNum: { type: String, required: [true, "Identification number is required"], },
  phone: { type: String, required: [true, "Phone is required"], },
  access_id: { type: Types.ObjectId, ref: 'Access', required: [true, "Access is required"], },
  role_id: { type: Types.ObjectId, ref: 'role', default: '65cf7c81c2c01df437d9257f', required: [true, "Role is required"], },
});

export const UserModel = mongoose.model("User", userSchema);
