import express, { Request, Response } from "express";
import { configDotenv } from "dotenv";
import { MongoClient } from "mongodb";
const mongoose = require(`mongoose`);
const PORT = 8000;
const app = express();
// const URL =
//   "mongodb+srv://ADMIN:dashka0318@cluster1.xrs1i.mongodb.net/?retryWrites=true&w=majority&appName=cluster1";
configDotenv();
const URL = process.env.MONGODB_URL;
app.use(express.json());

console.log(URL);
function connectMongoDB() {}
app.get("/", async (req: Request, res: Response) => {
  res.send("hello from backend");
});
app.listen(PORT, () => {
  console.log(`port${PORT}`);
});
