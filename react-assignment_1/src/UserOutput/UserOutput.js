// import "./UserOutput.css";
// import "./UserInput/UserInput.css";
import React from "react";
import "../UserInput/UserInput.css";

const UserOutput = (props) => {
  return (
    <div className="userin">
      <p>Hi, I'm {props.userName}</p>
      <p>I'm learning {props.dev}</p>
    </div>
  );
};

export default UserOutput;
