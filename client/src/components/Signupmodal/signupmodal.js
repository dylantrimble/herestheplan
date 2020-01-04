import React from "react";

function Modal({ children }) {
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
                <input type="text" />
                <br />
                <label>Username:</label>
                <br />
                <input type="text" />
                <br />
                <label>Password:</label>
                <br />
                <input type="text" />
                <hr />
              </form>
              <footer className="buttonWrap">{children}</footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
