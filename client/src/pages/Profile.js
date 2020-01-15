import React, { Component } from "react";
import "../css/main.css";
import Nav from "../components/Nav/nav";
import Favorites from "../components/Favorites/favorites";
import ProfileEvents from "../components/ProfileEvents/profileEvents";
import ProfileOptions from "../components/ProfileOptions/profileOptions";
import InviteComponent from "../components/InviteComponent/inviteComponent";
import FriendComponent from "../components/FriendComponent/friendComponent";
import axios from "axios";

class Profile extends Component {
  state = {
    collapsed: false,
    EventComponent: true,
    FavoriteComponent: false,
    inviteComponent: false,
    friendComponent: false,
    modalState: false,
    favorites: [],
    screenWidth: window.innerWidth
  };

  componentWillUpdate() {
    this.state.screenWidth < 850 && this.setState({ modalState: true });
  }

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  storageClear = () => {
    localStorage.clear();
  };

  grabFaves = event => {
    event.preventDefault();
    axios
      .get(`/api/saved_places`)
      .then(response => {
        this.setState(
          {
            favorites: response.data
          },
          () =>
            this.setState({
              FavoriteComponent: true,
              EventComponent: false,
              inviteComponent: false,
              friendComponent: false
            })
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  savedEvents = event => {
    this.setState({
      FavoriteComponent: false,
      EventComponent: true,
      inviteComponent: false,
      friendComponent: false
    });
  };

  friendComponentRender = event => {
    this.setState({
      FavoriteComponent: false,
      EventComponent: false,
      inviteComponent: false,
      friendComponent: true
    });
  };

  inviteComponentRender = event => {
    this.setState({
      FavoriteComponent: false,
      EventComponent: false,
      inviteComponent: true,
      friendComponent: false
    });
  };

  render() {
    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";
    console.log(this.state);

    return (
      <div>
        <Nav
          toggleBurger={this.toggleBurger}
          burgerClass={burgerClass}
          showUl={showUl}
          storageClear={this.storageClear}
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
        <div className="container profile-body">
          <div className="row">
            {this.state.friendComponent && <FriendComponent />}
            {this.state.inviteComponent && <InviteComponent />}
            {this.state.EventComponent && <ProfileEvents />}
            {this.state.FavoriteComponent &&
              this.state.favorites.map(faves => (
                <Favorites name={faves.name} location={faves.location} />
              ))}

            <ProfileOptions
              storageClear={this.storageClear}
              friendComponentRender={this.friendComponentRender}
              inviteComponentRender={this.inviteComponentRender}
              grabFaves={this.grabFaves}
              savedEvents={this.savedEvents}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
