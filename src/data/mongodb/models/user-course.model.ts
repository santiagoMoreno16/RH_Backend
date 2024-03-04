const mongoose = require('mongoose');
const { Schema, Types } = mongoose;

const userCourseSchema = new Schema({
  user_id: { type: Types.ObjectId, ref: "User", required: true },
  courses: [{
    course_id: { type: Types.ObjectId, ref: "Module", required: true },
    completed: { type: Boolean, default: false, required: true }
  }]
});

export const UserCourseModel = mongoose.model('UserCourse', userCourseSchema);

