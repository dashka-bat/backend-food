import { model, Schema } from "mongoose";

const food_Category_Schema = new Schema(
  {
    categoryName: String,
  },
  { timestamps: true }
);
const FoodCategoryModel = model(
  "category",
  food_Category_Schema,
  "food-category"
);
export { FoodCategoryModel };
