import React from "react";
import "./Button.css";

const NewButton = (props) => {
  return (
    <button style={props.style1 && {border:"white solid 2px"}}className="wreck-btn">{props.label}</button>
  );
};

export default NewButton;
