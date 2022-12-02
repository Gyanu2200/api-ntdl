import express from "express";
import {
  deleteManyTask,
  getTasks,
  updateTask,
} from "../models/task/TaskModel.js";
import insertTask from "../models/task/TaskSchema.js";
const router = express.Router();

//delete this fakedb when integrate with database

router.get("/", async (req, res) => {
  try {
    const tasks = await getTasks();
    res.json({
      status: "success",
      message: "List of the tasks",
      tasks,
    });
  } catch (error) {
    next(error);
  }
});
router.post("/", async (req, res) => {
  try {
    console.log(req.body);
    const result = await insertTask(req.body);
    console.log(result);

    if (result?._id) {
      return res.json({
        status: "success",
        message: "The new task has been added",
      });
    }
    res.json({
      status: "error",
      message: "unable to add the task, try again later",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.delete("/", async (req, res, next) => {
  try {
    const task = await updateTask(_id, type);

    if (task?._id) {
      return res.json({
        status: "success",
        message: "The task has been switchec",
      });
    }
    res.json({
      status: "success",
      message: "unable to switch task, try again later",
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
router.delete("/", async (req, res) => {
  try {
    const _idArg = req.body;
    console.log(req.body);
    // replace following code by calling db module
    const result = await deleteManyTask(_idArg);
    console.log(result);

    if (result?.deletedCount) {
      return res.json({
        status: "success",
        message: "Deleted successfully",
      });
    }
    res.json({
      status: "error",
      message: "unable to Deleted, try again later",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});

export default router;
