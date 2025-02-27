import React from "react";
import "./explore-button.css";

const ExploreButton = () => {
  return (
    <a href="#" className="explore-button-link">
      <button className="explore-button">
      <p className="glitch" data-text="EXPLORE">EXPLORE</p>
        <div className="clip">
          <div className="corner leftTop"></div>
          <div className="corner rightBottom"></div>
          <div className="corner rightTop"></div>
          <div className="corner leftBottom"></div>
        </div>
        <span className="arrow rightArrow"></span>
        <span className="arrow leftArrow"></span>
      </button>
    </a>
  );
};

export default ExploreButton;