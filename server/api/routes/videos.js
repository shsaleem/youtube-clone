import express from "express";
const router = express.Router();
import multer from "multer";

import {
  getAllVideos,
  createVideo,
  deleteVideo,
} from "../controllers/videos.js";

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

router.delete("/:videoId", deleteVideo);

export default router;
