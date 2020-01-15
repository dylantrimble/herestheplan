import React from "react";

function FriendComponent(props) {
  return (
    <div className="col-md-3 friendComponent">
      <h4 className="componentHeader">Friends List</h4>
      <button className="closeFriend" onClick={props.closeComponent}>X</button>
      <div>
        <div>
          <ul>
            <li className="friend">Patrick Arndt</li>
            <li className="friend">Barbara Santiago</li>
            <li className="friend">Micheal Young</li>
            <li className="friend">Nancy Turner</li>
            <li className="friend">Kelly Mitchell</li>
          </ul>
        </div>
        <button className="btn submitBtn">Add Friend</button>
      </div>
    </div>
  );
}

export default FriendComponent;