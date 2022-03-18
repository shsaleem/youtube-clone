import express from "express";
const app = express();
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";

dotenv.config();

import videoRoutes from "./api/routes/videos.js";

app.use(cors());
app.use(express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.connect(
  "mongodb+srv://" +
    process.env.DB_USERNAME +
    ":" +
    process.env.DB_PASSWORD +
    "@youtube-clone-react.pogfo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
);

app.use("/videos", videoRoutes);

export default app;
