import mongoose from "mongoose";

const citySchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  department_id: { type: Number, required: true}
});

export const CityModel = mongoose.model('City', citySchema);

