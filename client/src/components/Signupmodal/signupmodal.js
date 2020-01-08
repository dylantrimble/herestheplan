import React from "react";

function Modal(props) {
  return (
    <div>
      <div
        className="modal fade"
        id="exampleModal"
        tab-index="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modalDiv">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Sign Up
              </h5>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Full Name:</label>
                <br />
                <input
                  type="text"
                  value={props.state.fullName}
                  onChange={event => props.handleChangeFullName(event)}
                />
                <br />
                <label>Username:</label>
                <br />
                <input
                  type="text"
                  value={props.state.username}
                  onChange={event => props.handleChangeUsername(event)}
                />
                <br />
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  value={props.state.password}
                  onChange={event => props.handleChangePassword(event)}
                />
                <hr />
              </form>
              <footer className="buttonWrap">
                <a
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  className="btn signUpInBtn"
                  data-toggle="modal"
                  data-target="#signInModal"
                >
                  Sign In
                </a>
                <a
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target="#exampleModal"
                  className="btn submitBtn"
                  onClick={props.handleNewUser}
                >
                  Submit
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
