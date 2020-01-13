import React from "react";

function Favorites(props) {
  return (
    <div className="cardDiv">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="cardLocation">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
