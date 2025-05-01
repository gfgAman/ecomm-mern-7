import express from "express";
import { upload } from "../middleware/multer.js";
import { multerController } from "../controller/multerController.js";

export const router = express.Router();

router.post("/upload", upload.single("image"), multerController);
