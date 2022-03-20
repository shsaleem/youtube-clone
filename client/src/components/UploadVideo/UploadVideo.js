import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import "./UploadVideo.css";

const UploadVideo = () => {
  const [video, setVideo] = useState({
    title: "",
    channelTitle: "",
    publishedAt: "",
    viewCount: "",
    thumbnail: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    let value;
    if (name === "thumbnail") {
      value = e.target.files[0];
    } else {
      value = e.target.value;
    }
    setVideo({ ...video, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", video.title);
    formData.append("channelTitle", video.channelTitle);
    formData.append("publishedAt", video.publishedAt);
    formData.append("viewCount", video.viewCount);
    formData.append("thumbnail", video.thumbnail);

    await axios
      .post("http://localhost:5000/videos/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then(() => {
        console.log("Uploaded!");
      });

    navigate("/uploaded-videos");
  };

  return (
    <form onSubmit={handleSubmit} className="video-form">
      <h3>Add video to the database</h3>
      <input
        type="text"
        name="title"
        value={video.title}
        placeholder="Title"
        onChange={handleChange}
      />
      <input
        type="text"
        name="channelTitle"
        value={video.channelTitle}
        placeholder="Channel Title"
        onChange={handleChange}
      />
      <input
        type="date"
        name="publishedAt"
        value={video.publishedAt}
        placeholder="Published Date"
        onChange={handleChange}
      />
      <input
        type="number"
        name="viewCount"
        value={video.viewCount}
        placeholder="Views"
        onChange={handleChange}
      />
      <input
        type="file"
        name="thumbnail"
        // onChange={(e) => setThumbnail(e.target.files[0])}
        onChange={handleChange}
      />
      <button type="submit">Add Video</button>
    </form>
  );
};

export default UploadVideo;

//  const [title, setTitle] = useState("");
//  const [channelTitle, setChannelTitle] = useState("");
//  const [publishedAt, setPublishedAt] = useState(null);
//  const [viewCount, setViewCount] = useState();
//  const [thumbnail, setThumbnail] = useState("");
//  const navigate = useNavigate();

//  const handleSubmit = async (e) => {
//    e.preventDefault();

//    const formData = new FormData();

//    formData.append("title", title);
//    formData.append("channelTitle", channelTitle);
//    formData.append("publishedAt", publishedAt);
//    formData.append("viewCount", viewCount);
//    formData.append("thumbnail", thumbnail);

//    await axios
//      .post("http://localhost:5000/videos/upload", formData, {
//        headers: { "content-type": "multipart/form-data" },
//      })
//      .then(() => {
//        console.log("Uploaded!");
//      });

//    navigate("/uploaded-videos");
//  };
