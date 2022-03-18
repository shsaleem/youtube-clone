import mongoose from "mongoose";
import express from "express";

import Video from "../models/video.js";

// Get all videos
const getAllVideos = async (req, res) => {
  try {
    const videos = await Video.find();
    res.status(200).json({
      totalVideos: videos.length,
      videos,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

//Creat video
const createVideo = async (req, res) => {
  const video = await new Video({
    _id: new mongoose.Types.ObjectId(),
    title: req.body.title,
    thumbnail: req.file.path,
  });

  try {
    const createdVideo = await video.save();
    res.status(201).json({
      message: "Video created successfully",
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

export { getAllVideos, createVideo };
