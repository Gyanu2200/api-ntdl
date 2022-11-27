import express from "express";
const router = express.Router();

//delete this fakedb when integrate with database
let fakeDb = [{ _id: 1, task: "watching Tv", hr: 40, type: "entry" }];

router.get("/", (req, res) => {
  res.json({
    status: "success",
    message: "List of the tasks",
    fakeDb,
  });
});
router.post("/", (req, res) => {
  try {
    const data = req.body;
    console.log(data);
    //run the db query to add to db
    fakeDb.push(data);
    res.json({
      status: "success",
      message: "The new task has been added",
    });
  } catch (error) {
    error.code = 500;
    next(error);
  }
});
router.patch("/", (req, res, next) => {
  try {
    const data = req.body._id;
    const type = req.body.type;
    // console.log(typeof data);
    const UFakeDb = fakeDb.map((item, i) => {
      if (item._id === +data) {
        item.type = type;
      }
      return item;
    });
    console.log(UFakeDb);
    res.json({
      status: "success",
      message: "updating data in db",
      UFakeDb,
    });
  } catch (error) {
    error.status = 500;
    next(error);
  }
});
