import React from "react";

function Favorites(props) {
  return (
    <div className="cardDiv savedCard">
      <div className="card">
        <button className="deleteBtn" id={props.favoriteId} onClick={props.deleteSavedPlace}>X</button>

        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="cardLocation">{props.location}</p>
        </div>
      </div>
    </div>
  );
}

export default Favorites;
