import express from "express";
import { UserUpdate } from "../controllers/userController.js";
import { Protect } from "../middlewares/authMiddleware.js";

const router = express.Router();
const uploads = 

router.put("/update", Protect,uploads.single() UserUpdate);

export default router;
