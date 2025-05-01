import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: { 
        type: String, 
        required: [true, "Text is required"],
        trim: true,
        minlength: [1, "Text must be at least 1 character long"]
    },
    completed: { 
        type: Boolean, 
        default: false 
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

export default mongoose.model("Todo", todoSchema);