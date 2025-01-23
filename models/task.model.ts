import mongoose from "mongoose";

const taskSchema = new mongoose.Schema(
  {
    title: String,
    status: String,
    content: String,
    timeStart: Date,
    timeFinish: Date,
    createdAt: Date,
    createdBy: String,
    listUser: Array,
    taskParentId: String,
    deleted: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model("Task", taskSchema, "task");

export default Task;
