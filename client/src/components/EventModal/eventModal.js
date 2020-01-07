import React from "react";

function Modal({ children }) {
  return (
    <div>
      <div
        className="modal fade"
        id="EventModal"
        tab-index="-1"
        role="dialog"
        aria-labelledby="EventModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
          <div className="modal-content modalDiv">
            <div className="modal-header">
              <h5 className="modal-title" id="EventModalLabel">
                Create Event
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
                <label>Event Name</label>
                <br />
                <input type="text" />
                <hr />
              </form>
              <footer className="buttonWrap"><button className="btn submitBtn">Submit</button></footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;
