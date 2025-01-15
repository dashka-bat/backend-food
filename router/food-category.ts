import { Request, Response, Router } from "express";
import { FoodCategoryModel } from "../models/food-category";
export const food_categoryrouter = Router();
food_categoryrouter.get("/", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.find();
  console.log(foodname);
  res.json(foodname);
});
food_categoryrouter.get("/:id", async (req: Request, res: Response) => {
  const id = req.params.id;
  const foodname = await FoodCategoryModel.findById(id);
  console.log(foodname);
  res.json({ foodname });
});
food_categoryrouter.post("/", async (req: Request, res: Response) => {
  const name = req.body.categoryName;
  const foodname = await FoodCategoryModel.create({ categoryName: name });
  console.log(foodname);
  res.json({ foodname });
});
food_categoryrouter.delete("/:id", async (req: Request, res: Response) => {
  const foodname = await FoodCategoryModel.findByIdAndDelete(req.params.id);
  console.log(foodname);
  res.send("deleted");
});
food_categoryrouter.put("/:id", async (req: Request, res: Response) => {
  const uptadeName = req.body.categoryName;
  const foodname = await FoodCategoryModel.findByIdAndUpdate(
    req.params.id,
    {
      categoryName: uptadeName,
    },
    { new: true }
  );
  console.log(foodname);
  res.send("uptaded");
});
