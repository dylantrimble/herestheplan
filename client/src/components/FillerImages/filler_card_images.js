import React from "react";
import BarImage from "../../image/bar.jpg"
import MovieImage from "../../image/movies.jpg"
import RestaurantImage from "../../image/restaurant.jpg"

function FillerImages(props) {
  return (
    <div className="filler-image-container">
      <div className="card image-card">
        <img src={RestaurantImage} alt="Restaurant Image"/>
      </div>

      <div className="card image-card">
        <img src={MovieImage} alt="Movies Image"/>
      </div>
      <div className="card image-card">
        <img src={BarImage} alt="Bar Image"/>
      </div>
    </div>
  );
}

export default FillerImages;
