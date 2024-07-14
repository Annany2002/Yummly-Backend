import express from "express";
import { config } from "dotenv";

import { connectToDB } from "./lib/dbConnect";
import { router } from "./router/dish.router";
import cors from "cors";

config();

const app = express();
const PORT = 5000;

connectToDB();

app.use(cors());
app.use(express.json());

app.use("/api/dishes", router);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
