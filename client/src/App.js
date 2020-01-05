import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import "./css/main.css";
// import Sequelize from "../src/database/connection"

class App extends Component {
  state = {
    collapsed: false,
    error: null,
    isLoaded: false,
    items: [],
    loggedIn: false,
    latLocation: 0,
    lngLocation: 0
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };


  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const geoUrl = "https://www.googleapis.com/geolocation/v1/geolocate?key=" + process.env.REACT_APP_GOOGLE_API_KEY;
    fetch(proxyurl + geoUrl, {
      method: 'POST'
    })
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            latLocation: results.location.lat,
            lngLocation: results.location.lng
          })
          const url =
            "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=restaurant&key=" +
            process.env.REACT_APP_GOOGLE_API_KEY + "&location=" + this.state.latLocation + "," + this.state.lngLocation;
          fetch(proxyurl + url)
            .then(res => res.json())
            .then(
              results => {
                this.setState({
                  isLoaded: true,
                  items: results.results
                });
              },
              error => {
                this.setState({
                  isLoaded: true,
                  error
                });
              }
            );
        }
      )
  }

  dollarFunc = jakesHappyness => {
    switch (jakesHappyness) {
      case 1:
        return "$";
      case 2:
        return "$$";
      case 3:
        return "$$$";
      case 4:
        return "$$$$";
      case 5:
        return "$$$$$";
      default:
        return "No price range to display";
    }
  };
  render() {

    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";
    return (
      <Router>
        <div className="wrapper">
          <Nav
            toggleBurger={this.toggleBurger}
            burgerClass={burgerClass}
            showUl={showUl}
          >
            <a className="btn" href="/">
              Home
            </a>
            <a className="btn" href={this.state.loggedIn ? "/main" : "/"}>
              Search
            </a>
            <a
              className="btn"
              data-toggle={this.state.loggedIn ? "" : "modal"}
              data-target={this.state.loggedIn ? "" : "#signInModal"}
              href={this.state.loggedIn ? "/profile" : ""}
            >
              {this.state.loggedIn ? "Profile" : "Sign In"}
            </a>
          </Nav>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route
              exact
              path="/main"
              render={(props) => <Main {...props} {...this.state} {...this.dollarFunc}/>}
            />
            <Route exact path="/profile/:id" component={Profile}/>
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
