import mongoose from "mongoose";

const mongoConnct = async () => {
  try {
    const dbUrl = "mongodb://localhost:27017/ntdl";
    const conn = await mongoose.connect(dbUrl);
    conn ? console.log("Mongo Connectred") : console.log(error);
  } catch (error) {
    dbUrl;
    console.log(error);
  }
};


export default mongoConnct;
