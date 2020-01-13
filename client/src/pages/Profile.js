import React, { Component } from "react";
import "../css/main.css";
import Nav from "../components/Nav/nav";

class Profile extends Component {
  state = {
    collapsed: false
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  storageClear = () => {
    localStorage.clear();
  }

  render() {
    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";

    return (
      <div>
        <Nav
          toggleBurger={this.toggleBurger}
          burgerClass={burgerClass}
          showUl={showUl}
        >
          <a className="btn" href="/main">
            Search
          </a>
          <a className="btn" href="/profile">
            Profile
          </a>
          <a className="btn" href="/" onClick={this.storageClear}>
            Sign Out
          </a>
        </Nav>
        <div className="container">
          <div className="row">
            <div className="col-md-5 left">
              <h1>EVENT TITLE</h1>
              <div className="row">
                <div className="col-md-6 left2">
                  THE EVENTS WILL RENDER HERE
                </div>
                <div className="col-md-6 right2">
                  YOUR FRIENDS COMING WILL BE HERE
                </div>
              </div>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-4 right">
              <div>OPTIONS</div>
              <div className="row">
                <div className="col-md-12 options">
                  <button className="optionButton">FRIENDS</button>
                  <br />
                  <button className="optionButton">INVITES</button>
                  <br />
                  <button className="optionButton">SAVED EVENTS</button>
                  <br />
                  <button className="btn-danger" onClick={this.storageClear}>SIGN OUT</button>
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
