import React, { useState } from "react";
import axios from "axios";

const UploadVideo = () => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("thumbnail", thumbnail);

    await axios
      .post("http://localhost:5000/videos/upload", formData, {
        headers: { "content-type": "multipart/form-data" },
      })
      .then(() => {
        console.log("Uploaded!");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Enter title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <input type="file" onChange={(e) => setThumbnail(e.target.files[0])} />
      <button type="submit">Add to databse</button>
    </form>
  );
};

export default UploadVideo;
