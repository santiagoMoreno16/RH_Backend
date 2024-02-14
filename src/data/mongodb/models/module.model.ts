import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String },
});

export const ModuleModel = mongoose.model("Module", moduleSchema);
