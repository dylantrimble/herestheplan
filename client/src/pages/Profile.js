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
    favorites: []
  };

  // componentDidMount() {
  //   axios
  //     .get(`/api/`)
  //     .then(response => {
  //       console.log(response)
  //     })
  //     .catch(function(error) {
  //       console.log(error);
  //     });
  // }

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  storageClear = () => {
    localStorage.clear();
  };

  grabFaves = event => {
    event.preventDefault();
    const user = JSON.parse(window.localStorage.getItem("user"));
    axios
      .get(`api/users/savedPlaces/` + user.id)
      .then(response => {
        const favorites = response.data.SavedPlaces;
        this.setState(
          {
            favorites: favorites
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
          <div className="row profile-content">
            {this.state.friendComponent && <FriendComponent />}
            {this.state.inviteComponent && <InviteComponent />}
            {this.state.EventComponent && <ProfileEvents />}
            {this.state.FavoriteComponent && (
              <div className="col-md-5 favoritedComponent">
                <h4 className="componentHeader">Saved Places</h4>
                <button className="closeFavorite">X</button>
                <div className="savedPlacesWrapper">
                  {this.state.favorites.map(faves => (
                    <Favorites name={faves.name} location={faves.location} />
                  ))}
                </div>
              </div>
            )}

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
