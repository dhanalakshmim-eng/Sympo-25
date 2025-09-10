import React from "react";
import "./Button.css";

const NewButton = (props) => {
  return (
    <button className="wreck-btn">{props.label}</button>
  );
};

export default NewButton;
