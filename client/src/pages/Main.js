import React, { Component } from "react";
import "../css/main.css";

class Main extends Component {
  render() {
    return (
      <div class="mainBody">
        <div className="searchDiv">
          <form className="formSearchBar">
            <input type="text" class="searchBar" />
            <br />
            <button class="searchButton" type="submit">
              Search
            </button>
          </form>
        </div>
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
          <div class="card h-100">
            <img
              class="card-img-top"
              src="https://www.placecage.com/c/300/300"
              alt="Card cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card h-100">
            <img
              class="card-img-top"
              src="https://www.placecage.com/c/300/300"
              alt="Card cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <br />
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
          <div class="card h-100">
            <img
              class="card-img-top"
              src="https://www.placecage.com/c/300/300"
              alt="Card cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          <div class="card h-100">
            <img
              class="card-img-top"
              src="https://www.placecage.com/c/300/300"
              alt="Card cap"
            />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
          {/* <div class="threeButtons">
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" />
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" class="btn btn-primary">Go somewhere</a>
                        </div></a>
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" /></a>
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" /></a>
                    <br />
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" /></a>
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" /></a>
                    <a src=""><img class="card" src="https://www.placecage.com/c/300/300" /></a>
                </div> */}
        </div>
      </div>
    );
  }
}

export default Main;
