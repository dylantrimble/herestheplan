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
    userId = "",
    userName = ""
  };

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  componentDidMount() {
    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    const url =
      "https://maps.googleapis.com/maps/api/place/nearbysearch/json?radius=1500&type=restaurant&key=" +
      process.env.REACT_APP_GOOGLE_API_KEY +
      "&location=35.2271,-80.8431"; // site that doesnâ€™t send Access-Control-*
    fetch(proxyurl + url)
      .then(res => res.json())
      .then(
        results => {
          this.setState({
            isLoaded: true,
            items: results.results
          });
          console.log(this.state.items);
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        error => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      );
  }

  dollarFunc = jakesHappieness => {
    switch (jakesHappieness) {
      case 1:
        return "$";
        break;
      case 2:
        return "$$";
        break;
      case 3:
        return "$$$";
        break;
      case 4:
        return "$$$$";
        break;
      case 5:
        return "$$$$$";
        break;
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
          <div className="testing">
            {this.state.items.map(item => (
              <div>
                <div className="testing">{item.name}</div>
                <div className="testing">rating: {item.rating}</div>
                <div className="testing">
                  price range: {this.dollarFunc(item.price_level)}
                </div>
              </div>
            ))}
          </div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/main" component={Main} />
            <Route exact path="/profile/:id" component={Profile} />
            <Route component={NoMatch} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
