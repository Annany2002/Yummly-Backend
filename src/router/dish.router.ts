import { Router } from "express";
import {
  getAllDishes,
  insertNewDish,
  togglePublishedStatus,
} from "../controllers/dishes.controller";
import { Request, Response } from "express";

export const router = Router();

router.get("/", (req: Request, res: Response) => getAllDishes(req, res));
router.post("/", (req: Request, res: Response) => insertNewDish(req, res));
router.patch("/update/:dishId", (req: Request, res: Response) =>
  togglePublishedStatus(req, res)
);
