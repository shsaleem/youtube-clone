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

  const imgUrl =
    "https://static01.nyt.com/images/2022/03/13/arts/13godfather-pacino1/merlin_203043024_2d87c8a6-318e-4d82-afc7-0b00cea6b7af-superJumbo.jpg?quality=75&auto=webp";

  return (
    <article className="video">
      <div className="thumbnail">
        <img src={url} alt="video thumbnail" />
      </div>
      <div className="details">
        <div className="author">
          <img src={imgUrl} alt="Channel" />
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
