import React, { useState, useEffect } from "react";
import axios from "axios";

import Sidebar from "../Sidebar/Sidebar";
import VideosContainer from "../VideosContainer/VideosContainer";

const UploadedVideos = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await axios.get("http://localhost:5000/videos");
        setUploadedVideos(fetchedVideos.videos);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };
  }, []);

  return (
    <section className="uploaded-videos">
      <Sidebar />
      {isLoading ? (
        <div className="loading" />
      ) : (
        <VideosContainer videos={uploadedVideos} />
      )}
    </section>
  );
};

export default UploadedVideos;
