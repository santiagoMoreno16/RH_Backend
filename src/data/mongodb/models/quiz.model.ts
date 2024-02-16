import mongoose, { Types } from "mongoose";

const quizSchema = new mongoose.Schema({
  name: { type: String, required: true, },
  image: { type: String, required: true, },
  created_by: { type: Types.ObjectId, ref: 'User', required: true, },
  questions: [
    {
      question: { type: String, required: true, },
      options: {
        a: { type: String, required: true, },
        b: { type: String, required: true, },
        c: { type: String, required: true, },
        d: { type: String, required: false, },
      },
      answer: { type: String, required: true, },
    },
  ],
  module_id: {type: Types.ObjectId, ref: 'Module', required: true}
});

export const QuizModel = mongoose.model("Quiz", quizSchema);

