import React from "react";

function ProfileOptions(props) {
  return (
    <div className="col-md-4">
      <div className="mobalOptionsMenu">
        <ul>
          <li>Friends</li>
          <li>Invites</li>
          <li>Saved Events</li>
          <li>Favorited Places</li>
          <li>Sign Out</li>
        </ul>
      </div>
      <div className="optionsMenu">
        <h4>OPTIONS</h4>
        <div className="row">
          <div className="col-md-12">
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.friendComponentRender(event)}
            >
              FRIENDS
            </button>
            <br />
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.inviteComponentRender(event)}
            >
              INVITES
            </button>
            <br />
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.savedEvents(event)}
            >
              SAVED EVENTS
            </button>
            <br />
            <button
              className="btn optionButton submitBtn"
              onClick={event => props.grabFaves(event)}
            >
              FAVORITED PLACES
            </button>
            <br />
            <a href="/">
              <button className="btn btn-danger" onClick={props.storageClear}>
                SIGN OUT
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileOptions;
