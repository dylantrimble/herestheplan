import React from "react";

function Modal(props) {
  return (
    <div>
      <div
        className="modal fade"
        id="signInModal"
        tab-index="-1"
        role="dialog"
        aria-labelledby="signInModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modalDiv">
            <div className="modal-header">
              <h5 className="modal-title" id="signInModalLabel">
                Sign In
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
                <label>Username:</label>
                <br />
                <input
                  type="text"
                  value={props.state.loginUser}
                  onChange={event => props.handleChangeLoginUser(event)}
                />
                <br />
                <label>Password:</label>
                <br />
                <input
                  type="password"
                  value={props.state.loginPassword}
                  onChange={event => props.handleChangeLoginPassword(event)}
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
                  data-target="#exampleModal"
                >
                  Sign Up
                </a>
                <a
                  type="button"
                  data-dismiss="modal"
                  aria-label="Close"
                  data-toggle="modal"
                  data-target="#signInModal"
                  className="btn submitBtn"
                  onClick={props.handleLogin}
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
