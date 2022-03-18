import React from "react";

import "./HomePage.css";
import Sidebar from "../../components/Sidebar/Sidebar";
import Dashboard from "../../components/Dashboard/Dashboard";

const HomePage = () => {
  return (
    <section className="home-page">
      <Sidebar />
      <Dashboard />
    </section>
  );
};

export default HomePage;
