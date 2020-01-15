import React from "react";

function Modal(props) {
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
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body" value={props.buttonFalse}>
              <div className="create-event-form">
                <h3 className="modal-title" id="EventModalLabel">
                  Create Event
                </h3>
                <form>
                  <label htmlFor="eventName">Event Name</label>
                  <br />
                  <input
                    type="text"
                    id="eventName"
                    value={props.eventName}
                    onChange={event => props.eventNameChange(event)}
                  />
                  <br />
                  <label htmlFor="eventDate">Date</label>
                  <br />
                  <input
                    type="date"
                    id="eventDate"
                    value={props.eventDate}
                    onChange={event => props.handleDateChange(event)}
                  />
                </form>
                <button
                  className="btn submitBtn"
                  onClick={event => props.grabEventInfo(event)}
                >
                  Submit
                </button>
              </div>
              <span className="center-content">OR</span>
              <div className="select-event-body">
                <h3 className="modal-title" id="EventModalLabel">
                  Choose Event
                </h3>
                <div class="dropdown">
                  <button
                    class="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    Select Event
                  </button>
                  <div class="dropdown-menu" aria-labelledby="dropdownMenu2">
                    {/* {props.eventItems.map(item => {
                      <button class="dropdown-item" type="button">
                        {item.name}
                      </button>
                    })} */}
                  </div>
                </div>
                <button
                  className="btn submitBtn chooseEventBtn"
                  onClick={event => props.addToEvent(event)}
                >
                  Submit
                </button>
              </div>
            </div>




          </div>
        </div>
      </div>
    </div>
  );
}
export default Modal;

{
  /* <div
class="modal fade"
id="saveModal"
tabindex="-1"
role="dialog"
aria-labelledby="exampleModalLabel"
aria-hidden="true"
>
<div class="modal-dialog" role="document">
  <div class="modal-content">
    <div class="modal-body">
      <div class="row">
        <div class="col-md-5 modalLeft">
          <h2>Create Event</h2>
          <br />
          <button class="btn signUpInBtn">Let's Go!</button>
        </div>
        <div class="col-md-2 modalCenter">
          <h2>-or-</h2>
        </div>
        <div class="col-md-5 modalRight">
          <h2>Choose Event</h2>
          <br />
          <div class="btn-group">
            <button
              type="button"
              class="btn btn-info saveDropdown dropdown-toggle"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Action
            </button>
            <div class="dropdown-menu saveDropdown">
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>

          <footer>
            <button class="btn submitBtn">Let's Go!</button>
          </footer>
        </div>
      </div>
    </div>
  </div>
</div>
</div> */
}
