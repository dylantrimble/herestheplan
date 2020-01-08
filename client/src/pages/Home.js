import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Jumbotron from "../components/Jumbotron/jumbotron";
import SignUpModal from "../components/Signupmodal/signupmodal";
import SignInModal from "../components/Signinmodal/signinmodal";
import "../css/main.css";
import axios from "axios";
import Nav from "../components/Nav/nav";


class Home extends Component {
  state = {
    collapsed: false,
    loggedIn: false,
    loginUser: "",
    loginPassword: "",
    fullName: "",
    username: "",
    password: "",
    profile_pic: ""
  };

  handleChangeLoginUser(event) {
    this.setState({ loginUser: event.target.value });
  }

  handleChangeLoginPassword(event) {
    this.setState({ loginPassword: event.target.value });
  }

  handleChangeFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleLogin(event) {
    event.preventDefault();
    axios
      .get(`/api/user/${this.state.loginUser}/${this.state.loginPassword} `)
      .then(response => {
        response.data
          ? this.setState({ loggedIn: true })
          : this.setState({ loggedIn: false });
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  handleNewUser(event) {
    event.preventDefault();
    const data = {
      fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.password
    };
    if (data.fullName === "" || data.username === "" || data.password === "") {
      console.log("Fill out all inputs");
    } else {
      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      };
      fetch("/api/newUser", options);
      this.setState({ loggedIn: true });
    }
  }

  toggleBurger = () => {
    const collapsed = !this.state.collapsed;
    this.setState({ collapsed });
  };

  render() {
    if (this.state.loggedIn === true) {
      return <Redirect to="/main" />;
    }

    const burgerClass = this.state.collapsed ? "active-burger" : "";
    const showUl = this.state.collapsed ? "showUl" : "";

    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeLoginUser = this.handleChangeLoginUser.bind(this);
    this.handleChangeLoginPassword = this.handleChangeLoginPassword.bind(this);

    this.handleNewUser = this.handleNewUser.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    console.log("someting" + JSON.stringify(this.props));

    return (
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
        <Jumbotron>
          <button
            type="button"
            className="btn getStartedBtn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            GET STARTED
          </button>
        </Jumbotron>
        {this.state.modalHide ? (
          <div></div>
        ) : (
          <SignUpModal
            state={this.state}
            handleChangeFullName={this.handleChangeFullName}
            handleChangeUsername={this.handleChangeUsername}
            handleChangePassword={this.handleChangePassword}
            handleNewUser={this.handleNewUser}
          ></SignUpModal>
        )}
        {this.state.modalHide ? (
          <div></div>
        ) : (
          <SignInModal
            state={this.state}
            handleChangeLoginUser={this.handleChangeLoginUser}
            handleChangeLoginPassword={this.handleChangeLoginPassword}
            handleLogin={this.handleLogin}
          ></SignInModal>
        )}
      </div>
    );
  }
}
export default Home;
