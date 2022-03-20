import React, { useState, useEffect } from "react";
import axios from "axios";

const UploadedVideos = () => {
  const [uploadedVideos, setUploadedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const fetchedVideos = await axios.get("http://localhost:5000/videos");
        setUploadedVideos(fetchedVideos.data.videos);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
      }
    };

    fetchVideos();
  }, []);

  console.log(uploadedVideos);

  const imgUrl =
    "https://static01.nyt.com/images/2022/03/13/arts/13godfather-pacino1/merlin_203043024_2d87c8a6-318e-4d82-afc7-0b00cea6b7af-superJumbo.jpg?quality=75&auto=webp";

  return (
    <section className="content">
      <section className="videos">
        {isLoading && <div className="loading" />}
        {uploadedVideos.map((video) => {
          const { id, title, channelTitle, publishedAt, viewCount } = video;
          return (
            <article className="video" key={id}>
              <div className="thumbnail">
                <img
                  src={`http://localhost:5000/${video.thumbnail}`}
                  alt="video thumbnail"
                />
              </div>
              <div className="details">
                <div className="author">
                  <img src={imgUrl} alt="Channel" />
                </div>
                <div className="title">
                  <h3>
                    {title.length > 50 ? `${title.slice(0, 50)}...` : title}
                  </h3>
                  <a href="#">{channelTitle || "Hello"}</a>
                  <span>
                    {viewCount || 8789798} views • {publishedAt || Date.now()}
                  </span>
                </div>
              </div>
            </article>
          );
        })}
      </section>
    </section>
  );
};

export default UploadedVideos;
