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
    optionsComponent: true,
    EventComponent: true,
    FavoriteComponent: false,
    inviteComponent: false,
    friendComponent: false,
    favorites: [],
    events: []
  };

  componentDidMount() {
    const user = JSON.parse(window.localStorage.getItem("user"));
    console.log(user);
    axios
      .get(`api/users/events/` + user.id)
      .then(response => {
        console.log(response);
        this.setState({ events: response.data.Events });
      })
      .catch(function(error) {
        console.log(error);
      });
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
              optionsComponent: false,
              FavoriteComponent: true
            })
        );
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  savedEvents = event => {
    this.setState({
      EventComponent: true
    });
  };

  friendComponentRender = event => {
    this.setState({
      optionsComponent: false,
      friendComponent: true
    });
  };

  inviteComponentRender = event => {
    this.setState({
      optionsComponent: false,
      inviteComponent: true
    });
  };

  closeFriendComponent = () => {
    this.setState({
      optionsComponent: true,
      friendComponent: false
    });
  };

  closeInviteComponent = () => {
    this.setState({
      optionsComponent: true,
      inviteComponent: false
    });
  };

  closeFavoritesComponent = () => {
    this.setState({
      optionsComponent: true,
      FavoriteComponent: false
    });
  };

  render() {
    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";
    console.log(this.state);

    return (
      <div className="profile-wrapper">
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
          <div className="mobalOptionsMenu">
            <button
              className="btn optionButton submitBtn"
              onClick={event => this.friendComponentRender(event)}
            >
              Friends
            </button>
            <button
              className="btn optionButton submitBtn"
              onClick={event => this.inviteComponentRender(event)}
            >
              Invites
            </button>
            <button
              className="btn optionButton submitBtn"
              onClick={event => this.grabFaves(event)}
            >
              Favorited Places
            </button>
            <a href="/">
              <button
                className="btn btn-danger mobalOptionsMenu"
                onClick={this.storageClear}
              >
                Sign Out
              </button>
            </a>
          </div>
          <div className="row profile-content">
            {this.state.EventComponent && (
              <div className="col-md-5 col-sm-11 eventComponent">
                <h4 className="componentHeader">Created Events</h4>
                <div className="savedEventsWrapper">
                  {this.state.events.map(event => (
                    <ProfileEvents name={event.name} date={event.date} />
                  ))}
                </div>
              </div>
            )}
            {this.state.friendComponent && (
              <FriendComponent closeComponent={this.closeFriendComponent} />
            )}
            {this.state.inviteComponent && (
              <InviteComponent closeComponent={this.closeInviteComponent} />
            )}
            {this.state.FavoriteComponent && (
              <div className="col-md-5 favoritedComponent">
                <h4 className="componentHeader">Saved Places</h4>
                <button
                  className="closeFavorite"
                  onClick={this.closeFavoritesComponent}
                >
                  X
                </button>
                <div className="savedPlacesWrapper">
                  {this.state.favorites.map(faves => (
                    <Favorites name={faves.name} location={faves.location} />
                  ))}
                </div>
              </div>
            )}
            {this.state.optionsComponent && (
              <ProfileOptions
                storageClear={this.storageClear}
                friendComponentRender={this.friendComponentRender}
                inviteComponentRender={this.inviteComponentRender}
                grabFaves={this.grabFaves}
                savedEvents={this.savedEvents}
              />
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Profile;
