import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Main from "./pages/Main";
import Profile from "./pages/Profile";
import NoMatch from "./pages/NoMatch";
import "./css/main.css";
// import Sequelize from "../src/database/connection

class App extends Component {

  render() {
    return (
      <Router>
        <div className="wrapper">
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
