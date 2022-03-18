import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import youtube from "../../api/youtube";
import VideosContainer from "../VideosContainer/VideosContainer";

const Dashboard = () => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await youtube.get("/videos", {
          params: {
            part: "snippet, contentDetails, statistics",
            chart: "mostPopular",
            maxResults: 20,
            regionCode: "US",
            key: process.env.REACT_APP_API_KEY,
          },
        });
        setVideos(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, []);

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return <VideosContainer videos={videos} />;
};

export default Dashboard;
