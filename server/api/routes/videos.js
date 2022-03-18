import express from "express";
const router = express.Router();
import multer from "multer";

import { getAllVideos, createVideo } from "../controllers/videos.js";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

router.get("/", getAllVideos);

router.post("/upload", upload.single("thumbnail"), createVideo);

export default router;
