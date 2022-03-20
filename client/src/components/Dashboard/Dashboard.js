import React from "react";

import "./Dashboard.css";
import VideosContainer from "../VideosContainer/VideosContainer";
import useFetch from "../../hooks/useFetch";

const Dashboard = () => {
  const { isLoading, isError, videos } = useFetch({
    part: "snippet, contentDetails, statistics",
    chart: "mostPopular",
    maxResults: 40,
    regionCode: "US",
    key: process.env.REACT_APP_API_KEY,
  });

  if (isError) {
    return <div>Something went wrong</div>;
  }

  if (isLoading) {
    return <div className="loading"></div>;
  }

  return <VideosContainer videos={videos} />;
};

export default Dashboard;
