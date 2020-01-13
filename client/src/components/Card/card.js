import React from "react";

function Card(props) {
  return (
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
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
              <button className="btn submitBtn" id={props.id}>Add to Event</button>
            </li>
            <li>
              <button className="btn submitBtn" onClick={props.handleFave} id={props.id}>Favorite</button>
            </li>
          </ul>
        </div>
      </div>
  );
}

export default Card;
