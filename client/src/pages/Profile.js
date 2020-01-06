import React, { Component } from "react";
import "../css/main.css";
class Profile extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
               
              <h1>EVENT TITLE</h1>
              <div className="row">
                <div className="col-md-6 left2">THE EVENTS WILL RENDER HERE</div>
                <div className="col-md-6 right2">YOUR FRIENDS COMING WILL BE HERE</div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 right">
                <div>OPTIONS</div>
                <div className="row">
                    <div className="col-md-12 options">
                        <button className="btn-danger optionButton">OPTIONS</button>
                        <br />
                        <button className="btn-danger optionButton">OPTIONS</button>
                        <br />
                        <button className="btn-danger optionButton">OPTIONS</button>
                        <br />
                        <button className="btn-danger optionButton">OPTIONS</button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
