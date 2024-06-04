import mongoose, { Types } from "mongoose";

const moduleSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  labels: [{ type: String, required: true }],
  type: { type: String, enum: ["Educativo"], required: true },
  assessment: [{ type: Number, enum: [1, 2, 3, 4, 5], required: false }],
  modality: { type: String, enum: ["Virtual", "Presencial"], required: true },
  duration: { type: Number, required: true },
  deadline: { type: Date, required: true },
  //created_by: { type: Types.ObjectId, ref: "User", required: true },
  created_by: [
    {
      teacher_id: { type: Types.ObjectId, ref: "User", required: true, },
      description: { type: String, required: true, },
      slogan: { type: String, required: true, },
      img: {type:String, required: true,}
    },
  ],

  base64: { type: String, required: true },
  imgpriv: { type: String, required: true },
  imgpublic: { type: String, required: true },
});

export const ModuleModel = mongoose.model("Module", moduleSchema);
