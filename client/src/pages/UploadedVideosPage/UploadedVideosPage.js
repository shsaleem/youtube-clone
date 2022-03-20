import React from "react";

import Sidebar from "../../components/Sidebar/Sidebar";
import UploadedVideos from "../../components/UploadedVideos/UploadedVideos";

const UploadedVideosPage = () => {
  return (
    <main className="home-page">
      <Sidebar />
      <UploadedVideos />
    </main>
  );
};

export default UploadedVideosPage;
