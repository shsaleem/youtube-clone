import React from "react";

import "./VideoCard.css";

const VideoCard = ({ video }) => {
  const {
    snippet: { channelTitle },
    statistics,
    snippet: { title, publishedAt },
    snippet: {
      thumbnails: {
        medium: { url },
      },
    },
  } = video;

  return (
    <article className="video">
      <div className="thumbnail">
        <img src={url} alt="video thumbnail" />
      </div>
      <div className="details">
        <div className="author">
          <img
            src="https://yt3.ggpht.com/bpzY-S4DYlbTeOpY5hIA7qz_hcbMkgvLAugtwKBGTTImNnWAGudX0y53bo_fJZ0auypxrWkUiw=s88-c-k-c0x00ffffff-no-rj"
            alt="Channel image"
          />
        </div>
        <div className="title">
          <h3>{title.length > 50 ? `${title.slice(0, 50)}...` : title}</h3>
          <a href="#">{channelTitle}</a>
          <span>
            {typeof statistics === "undefined" ? 9886750 : statistics.viewCount}{" "}
            views • {publishedAt.slice(0, 10)}
          </span>
        </div>
      </div>
    </article>
  );
};

export default VideoCard;
