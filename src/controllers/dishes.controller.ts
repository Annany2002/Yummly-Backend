import { DishModel } from "../models/dish.model";
import { Request, Response } from "express";

export async function getAllDishes(req: Request, res: Response): Promise<void> {
  try {
    const allDishes = await DishModel.find({});
    res.status(200).json(allDishes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching dishes" });
  }
}

export async function insertNewDish(
  req: Request,
  res: Response
): Promise<void> {
  try {
    let { dishName, imageUrl, isPublished, dishId } = req.body;
    if (!dishName || !imageUrl || !isPublished || !dishId) {
      res.status(400).json({ message: "Missing one or more fields" });
    }

    if (await DishModel.findOne({ dishId })) {
      dishId = DishModel.length + 1;
    }

    const newDish = new DishModel({
      dishName,
      imageUrl,
      dishId,
      isPublished,
    });
    await newDish.save();

    res.status(201).json(newDish);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}

export async function togglePublishedStatus(
  req: Request,
  res: Response
): Promise<void> {
  try {
    const { isPublished } = req.body;
    const { dishId } = req.params;

    const afterUpdateDishModel = await DishModel.findOneAndUpdate(
      { dishId },
      { isPublished },
      { new: true }
    );

    res.status(200).json(afterUpdateDishModel);
  } catch (error: any) {
    console.log(error);
    res.status(500).json({ message: error.message });
  }
}
