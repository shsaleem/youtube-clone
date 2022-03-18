import React, { useState, useEffect } from "react";

import youtube from "../api/youtube";

const useFetch = (urlParams) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await youtube.get("/videos", {
          params: urlParams,
        });
        setVideos(response.data.items);
        setIsLoading(false);
        setIsError(false);
      } catch (error) {
        console.log(error);
        setIsError(true);
      }
    };

    fetchVideos();
  }, []);

  return { isLoading, isError, videos };
};

export default useFetch;
