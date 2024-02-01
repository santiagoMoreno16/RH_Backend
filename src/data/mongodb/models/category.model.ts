import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    code: {type: String, required: [true, 'Code is required']},
    name: {type: String, required: [true, 'Name is required']},
    status: {type: String, required: [true, 'Status is required']},
    img: {type: String, required: [true, 'Category image is required']},
})

export const categoryModel = mongoose.model('Category', categorySchema)