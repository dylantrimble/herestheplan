import React from "react";

function Card(props) {
  return (
    <div class="cardDiv">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">{props.name}</h3>
          <ul>
            <li>
              <p>Rating: {props.rating}</p>
            </li>
            <li>
              <p>Price: {props.price}</p>
            </li>
          </ul>
          <p className="cardLocation">{props.location}</p>
          <ul className="card-buttons">
            <li>
              <button className="btn submitBtn">Add to Event</button>
            </li>
            <li>
              <button className="btn submitBtn">Favorite</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;
