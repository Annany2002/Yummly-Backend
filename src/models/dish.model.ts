import { model, Schema } from "mongoose";

const FoodSchema = new Schema({
  dishId: {
    type: String,
    unique: true,
    required: true,
  },
  dishName: {
    type: String,
    unique: true,
    required: true,
  },
  imageUrl: {
    type: String,
    unique: true,
    required: true,
  },
  isPublished: {
    type: Boolean,
    required: true,
  },
});

export const DishModel = model("food-items", FoodSchema);
