import mongoose from "mongoose";

const { Schema, model } = mongoose;

const videoSchema = Schema({
  _id: Schema.Types.ObjectId,
  title: { type: String, required: true },
  channelTitle: { type: String, required: true },
  publishedAt: { type: String, required: true },
  viewCount: { type: Number, required: true },
  thumbnail: { type: String, required: true },
});

export default model("Video", videoSchema);
