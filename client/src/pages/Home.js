import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Button from "../components/Button/button";
import SignUpModal from "../components/Signupmodal/signupmodal";
import SignInModal from "../components/Signinmodal/signinmodal";
import "../css/main.css";


class Home extends Component {

  state = {
    fullName: "",
    username: "",
    password: "",
    profile_pic: ""
  };

  handleChangeFullName(event) {
    this.setState({ fullName: event.target.value });
  }

  handleChangeUsername(event) {
    this.setState({ username: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ password: event.target.value });
  }

  handleNewUser(event) {
    event.preventDefault()
    const data = {
      fullName: this.state.fullName,
      username: this.state.username,
      password: this.state.pasword
    }
    fetch("/api/newUsers", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err)
      )
  }

  render() {
    this.handleChangeFullName = this.handleChangeFullName.bind(this);
    this.handleChangeUsername = this.handleChangeUsername.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleNewUser = this.handleNewUser.bind(this);

    return (
      <div className="wrapper">
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
        <SignUpModal
          state={this.state}
          handleChangeFullName={this.handleChangeFullName}
          handleChangeUsername={this.handleChangeUsername}
          handleChangePassword={this.handleChangePassword}
          handleNewUser={this.handleNewUser}
        >
        </SignUpModal>
        <SignInModal>
          <a
            type="button"
            data-dismiss="modal"
            aria-label="Close"
            className="btn signUpInBtn"
            data-toggle="modal"
            data-target="#exampleModal"
          >
            Sign Up
          </a>
          <Button className="submitBtn">Submit</Button>
        </SignInModal>
      </div>
    );
  }
}
export default Home;
