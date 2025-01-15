import express, { Request, Response } from "express";
import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
import { error } from "console";
import mongoose from "mongoose";
import { food_categoryrouter } from "./router/food-category";
const cors = require(`cors`);
const PORT = 8000;
const app = express();
app.use(cors());
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

app.use("/food-category/", food_categoryrouter);

app.listen(PORT, () => {
  console.log(`port${PORT}`);
});
