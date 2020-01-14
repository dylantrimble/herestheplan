import React from "react";

function SignUp(props) {
  return (
    <div className="col-md-4">
      <div className="card text-center bg-light mb-3 signUpCard">
        <div className="card-body">
          <h2 className="display-5">
            Sign Up<i className="fas fa-rocket"></i>
          </h2>
          <p className="lead">Get the plan started!</p>
          <form>
            <div className="form-group">
              <label for="Fullname-text"></label>
              <input
                type="text"
                name="fullname"
                className="form-control"
                id="fullname-text"
                placeholder="Full Name"
                value={props.state.fullName}
                onChange={event => props.handleChangeFullName(event)}
              ></input>
            </div>
            <div className="form-group">
              <label for="Username-text"></label>
              <input
                type="text"
                name="username"
                className="form-control"
                id="username-text"
                placeholder="Username"
                value={props.state.username}
                onChange={event => props.handleChangeUsername(event)}
              ></input>
            </div>
            <div className="form-group">
              <label for="Password-Text"></label>
              <input
                type="password"
                name="password"
                className="form-control"
                id="password-text"
                placeholder="New Password"
                value={props.state.password}
                onChange={event => props.handleChangePassword(event)}
              ></input>
            </div>
            <button
              className="btn btn-success btn-block"
              id="submit-registration"
              onClick={props.handleNewUser}
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
