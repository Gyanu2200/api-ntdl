// import path from "path";

// // const path = require("path");
// const __dirname = path.resolve();
// console.log(__dirname);

import express from "express";
const app = express();
const PORT = 8000;

// db connect
import mongoConnct from "./src/config/dbConfig.js";
mongoConnct();

//middlewares

app.use(express.json());

//routers
import taskRouter from "./src/router/taskRouter.js";

// console.log("express is on the way");

app.use("/api/v1/tasks", taskRouter);

// handle all uncaught router request
app.use("*", (res, req, next) => {
  //   res.statusCode(400).json({
  //     status: "error",
  //     message: "404 Page Not Found!",
  //   });
  const error = {
    code: 404,
    message: "404 Page Not Found!",
  };
  next(error);
});

// global error handeler
app.use((error, req, res, next) => {
  res.status(500).json({
    status: "error",
    message: error.message,
  });
});

app.listen(PORT, (error) => {
  error
    ? console.log(error)
    : console.group(`server is running at https://localhost:${PORT}`);
});
