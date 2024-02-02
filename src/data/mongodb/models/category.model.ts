import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
    name: {type: String, required: [true, 'Name is required']},
    status: {type: Boolean, required: [true, 'Status is required']},
    image: {type: String, required: [true, 'Category image is required']},
})

export const CategoryModel = mongoose.model('Category', categorySchema)