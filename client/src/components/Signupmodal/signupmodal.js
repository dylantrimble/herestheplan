import React from "react";
import Button from "../Button/button"

function Modal(props) {
  console.log(props)
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
                <input type="text" value={props.fullName} onChange={(event) => props.handleChangeFullName(event)} />
                <br />
                <label>Username:</label>
                <br />
                <input type="text" value={props.username} onChange={(event) => props.handleChangeUsername(event)} />
                <br />
                <label>Password:</label>
                <br />
                <input type="password" value={props.password} onChange={(event) => props.handleChangePassword(event)} />
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
                  Sign In</a>
                <Button className="submitBtn" onClick={event => props.handleNewUser(event)}>Submit</Button>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
