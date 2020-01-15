import React from "react";

function InviteComponent(props) {
  return (
    <div className="col-md-3 inviteComponent">
      <h4 className="componentHeader">Invites</h4>
      <button className="closeInvite" onClick={props.closeComponent}>X</button>
      <div>
        <ul>
          <li>
            <h5>Dyl's birthday</h5>
            <button>Accept</button>
            <button>Decline</button>
          </li>
          <li>
            <h5>Sneaky Cats</h5>
            <button>Accept</button>
            <button>Decline</button>
          </li>
          <li>
            <h5>Orange Balloon</h5>
            <button>Accept</button>
            <button>Decline</button>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default InviteComponent;
