import React from "react";

function Button({ className, children, onClick }) {
  return (
    <button onClick={onClick} className={["btn", className].join(" ")}>
      {children}
    </button>
  );
}

export default Button;
