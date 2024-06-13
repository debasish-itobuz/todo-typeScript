import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    status:{
        type: String,
        enum: ["ToDo", "InProgress", "Completed"],
        default:"ToDo"
    }
}, { timestamps: true })

export default mongoose.model('todos', todoSchema)