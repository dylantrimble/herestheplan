import React, { Component } from "react";
import "../css/main.css";
import Nav from "../components/Nav/nav";
import Favorites from "../components/Favorites/favorites"
import axios from "axios"

class Profile extends Component {
  state = {
    collapsed: false,
    favorites: []
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

<<<<<<< HEAD
  storageClear = () => {
    localStorage.clear();
=======
  grabFaves = (event) => {
    event.preventDefault();
    axios
      .get(`/api/saved_places`)
      .then(response => {
        this.setState({
          favorites: response.data
        })
      })
      .catch(function(error) {
        console.log(error);
      });
>>>>>>> f57f24fe725bae814aa6d3576bdfa298ccf568ba
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
        {this.state.favorites.map(faves => (
                <Favorites
                  name={faves.name}
                  location={faves.location}
                />
              ))}
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
<<<<<<< HEAD
                  <button className="btn-danger" onClick={this.storageClear}>SIGN OUT</button>
=======
                  <button className="optionButton" onClick={event => this.grabFaves(event)}>FAVORITED EVENTS</button>
                  <br />
                  <a href="/">
                  <button className="btn-danger">SIGN OUT</button>
                  </a>
>>>>>>> f57f24fe725bae814aa6d3576bdfa298ccf568ba
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
