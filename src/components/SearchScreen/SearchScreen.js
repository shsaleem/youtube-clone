import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import "./SearchScreen.css";
import youtube from "../../api/youtube";
import VideosContainer from "../VideosContainer/VideosContainer";
import Sidebar from "../Sidebar/Sidebar";

const SearchScreen = () => {
  const { query } = useParams();
  const [searchedVideos, setSearchedVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVideos = async () => {
      try {
        const response = await youtube.get("/search", {
          params: {
            part: "snippet",
            maxResults: 20,
            q: query,
            key: process.env.REACT_APP_API_KEY,
          },
        });
        setSearchedVideos(response.data.items);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchVideos();
  }, [query]);

  return (
    <section className="search-screen">
      <Sidebar />
      {isLoading ? (
        <div className="loading" />
      ) : (
        <VideosContainer videos={searchedVideos} />
      )}
    </section>
  );
};

export default SearchScreen;
