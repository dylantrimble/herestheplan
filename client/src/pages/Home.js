import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron/jumbotron";
import Button from "../components/Button/button";
import SignUpModal from "../components/Signupmodal/signupmodal";
import SignInModal from "../components/Signinmodal/signinmodal";
import "../css/main.css";


class Home extends Component {

  state = {
    newUser: {
      fullName: "mirko",
      username: "mirkomaya",
      password: "1234",
      profile_pic: ""
    }
  };

  render() {
    console.log(this.state.newUser)
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
          newUser={this.state.newUser}
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
