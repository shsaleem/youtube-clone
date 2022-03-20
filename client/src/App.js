import React from "react";
import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./components/Navbar/Navbar";
import Explore from "./pages/Explore/Explore";
import SearchScreen from "./components/SearchScreen/SearchScreen";
import UploadVideo from "./components/UploadVideo/UploadVideo";
import UploadedVideosPage from "./pages/UploadedVideosPage/UploadedVideosPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/explore" element={<Explore />} />
        <Route path="/upload" element={<UploadVideo />} />
        <Route path="/uploaded-videos" element={<UploadedVideosPage />} />
        <Route path="/search/:query" element={<SearchScreen />} />
      </Routes>
    </div>
  );
}

export default App;
