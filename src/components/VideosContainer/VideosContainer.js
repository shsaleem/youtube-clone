import React from "react";

import "./VideosContainer.css";
import VideoCard from "./VideoCard";
import FilterCategories from "../FilterCategories/FilterCategories";

const VideosContainer = ({ videos }) => {
  const url = window.location.href;
  const homeURL = "http://localhost:3000/";

  return (
    <section className="content">
      {url === homeURL && <FilterCategories />}
      <section className="videos">
        {videos &&
          videos.map((video) => {
            const { id } = video;
            return (
              <VideoCard
                key={typeof id === "object" ? id.videoId : id}
                video={video}
              />
            );
          })}
      </section>
    </section>
  );
};

export default VideosContainer;
