import mongoose from "mongoose";

// Schema is also a validator

const taskSchema = new mongoose.Schema(
  {
    task: {
      type: String,
      required: true,
    },
    hr: {
      type: Number,
      required: true,
      max: [168, "Hey boss, too many hours"],
    },
    type: {
      type: String,
      default: "entry",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Task", taskSchema); // tasks
