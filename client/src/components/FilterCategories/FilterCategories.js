import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./FilterCategories.css";

const categories = [
  "Most Popular",
  "React Native",
  "React JS",
  "Machine Learning",
  "Python",
  "Java",
  "Artifical Intelligence",
  "Node.js",
  "Javascript",
  "Freecodecamp",
  "Technology",
];

const FilterCategories = () => {
  const [activeCategory, setActiveCategory] = useState("Most Popular");
  const navigate = useNavigate();

  const handleClick = (category) => {
    setActiveCategory(category);
    navigate(`search/${category}`);
  };

  return (
    <div className="categories">
      {categories.map((category, i) => {
        return (
          <span
            key={i}
            className={activeCategory === category ? "active" : ""}
            onClick={() => handleClick(category)}
          >
            {category}
          </span>
        );
      })}
    </div>
  );
};

export default FilterCategories;
