import React from "react";

function Card(props) {
  return (
    <div class="cardDiv">
      <div class="card h-100">
        <img
          class="card-img-top"
          src="https://www.placecage.com/c/300/300"
          alt="Card cap"
        />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">asdfasdf</p>
          <a href="#" class="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  );
}

export default Card;
