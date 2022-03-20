import React from "react";

import "./Explore.css";
import VideosContainer from "../../components/VideosContainer/VideosContainer";
import Sidebar from "../../components/Sidebar/Sidebar";
import useFetch from "../../hooks/useFetch";

const Explore = () => {
  const { isLoading, isError, videos } = useFetch({
    part: "snippet, contentDetails, statistics",
    chart: "mostPopular",
    maxResults: 40,
    regionCode: "PK",
    key: process.env.REACT_APP_API_KEY,
  });

  if (isError) {
    return <div>Something went wrong</div>;
  }

  return (
    <section className="home-page">
      <Sidebar />
      {isLoading ? (
        <div className="loading" />
      ) : (
        <VideosContainer videos={videos} />
      )}
    </section>
  );
};

export default Explore;
