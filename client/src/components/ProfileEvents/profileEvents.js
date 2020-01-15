import React from "react";

function ProfileEvents(props) {
  return (
    <div className="cardDiv eventCard">
      <div className="card">
        <div className="card-body">
          <h3 className="card-title">{props.name}</h3>
          <p className="eventDate">{props.date}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileEvents;