import express, { Request, Response } from "express";
import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import { error } from "console";
import mongoose from "mongoose";
//  const cors=(cors())
// const mongoose = require("mongoose");
const PORT = 8000;
const app = express();
// const URL =
//   "mongodb+srv://ADMIN:dashka0318@cluster1.xrs1i.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";
configDotenv();

app.use(express.json());

console.log(URL);
async function connectMongoDB() {
  const MONGODB_URL = process.env.MONGODB_URL;
  if (!MONGODB_URL) {
    throw "MONGODB_URL connect failed";
  }
  try {
    await mongoose.connect(MONGODB_URL);
    console.log("connected database");
  } catch (error) {
    console.log(error);
  }
}

connectMongoDB();

const food_Category_Schema = new mongoose.Schema(
  {
    categoryname: String,
  },
  { timestamps: true }
);
const FoodCategoryModel = mongoose.model(
  "category",
  food_Category_Schema,
  "food-category"
);
app.get("/", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.find();
  console.log(foodname);
  res.json(foodname);
});
app.post("/food-category/", async (req: Request, res: Response) => {
  const name = req.body.name;
  console.log("__________________", name);
  const foodname = await FoodCategoryModel.create({ categoryname: name });
  console.log(foodname);
  res.send("done");
});
app.delete("/food-category:id", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  console.log(foodname);
  res.send("deleted");
});
app.put("/food-category:id", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.findByIdAndUpdate(req.params.id, {
    categoryname: "ahhahah",
  });
  console.log(foodname);
  res.send("uptaded");
});
app.listen(PORT, () => {
  console.log(`port${PORT}`);
});
