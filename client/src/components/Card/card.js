import React from "react";

function Card(props) {
  return (
    <div className="card card-height">
      <div className="card-body">
        <h3 className="card-title">{props.name}</h3>
        <ul>
          <li>
            <p>
              <span>Rating:</span> {props.rating}
            </p>
          </li>
          <li>
            <p>
              <span>Price:</span> {props.price}
            </p>
          </li>
        </ul>
        <p className="cardLocation">
          <span>Location:</span> {props.location}
        </p>
        <ul className="card-buttons">
          <li>
            <button
              className="btn submitBtn"
              data-toggle={"modal"}
              data-target={"#EventModal"}
              id={props.id}
              onClick={props.createEvent}
            >
              Add to Event
            </button>
          </li>
          <li>
            <button
              className="btn submitBtn"
              onClick={props.handleFave}
              id={props.id}
            >
              Favorite
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Card;
