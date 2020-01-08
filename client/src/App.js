import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav/nav";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import "./css/main.css";
// import Sequelize from "../src/database/connection

class App extends Component {
  state = {
    collapsed: false,
    error: null,
    isLoaded: false,
    items: [],
    loggedIn: false,
    userId: "",
    userName: "",
    newUser: {
      fullName: "mirko",
      username: "mirkomaya",
      password: "1234"
    },
    latLocation: 0,
    lngLocation: 0,
    value: ""
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
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
            <a
              className="btn"
              data-toggle={this.state.loggedIn ? "" : "modal"}
              data-target={this.state.loggedIn ? "" : "#signInModal"}
              href={this.state.loggedIn ? "/main" : "/"}
            >
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
            <Route exact path="/" component={Home} />
            <Route exact path="/main" render={() => <Main />} />
            <Route exact path="/profile" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
