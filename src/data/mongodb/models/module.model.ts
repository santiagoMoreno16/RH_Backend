import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  type: { type: String, required: true },
  assessment: [{ type: Number, enum: [1, 2, 3, 4, 5], required: true }],
  img: { type: String, required: true },
});

export const ModuleModel = mongoose.model("Module", moduleSchema);
