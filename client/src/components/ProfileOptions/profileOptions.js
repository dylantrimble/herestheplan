import React from "react";

function ProfileOptions(props) {
  return (
    <div className="col-md-4 right">
      <div>OPTIONS</div>
      <div className="row">
        <div className="col-md-12 options">
          <button
            className="optionButton"
            onClick={event => props.friendComponentRender(event)}
          >
            FRIENDS
          </button>
          <br />
          <button
            className="optionButton"
            onClick={event => props.inviteComponentRender(event)}
          >
            INVITES
          </button>
          <br />
          <button
            className="optionButton"
            onClick={event => props.savedEvents(event)}
          >
            SAVED EVENTS
          </button>
          <br />
          <button
            className="optionButton"
            onClick={event => props.grabFaves(event)}
          >
            FAVORITED PLACES
          </button>
          <br />
          <a href="/">
            <button className="btn-danger" onClick={props.storageClear}>
              SIGN OUT
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProfileOptions;
