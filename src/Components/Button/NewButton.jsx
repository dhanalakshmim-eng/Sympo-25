import React from "react";
import "./Button.css";

const NewButton = ({ label, dept, style1 }) => {
  return (
    <div className="btn-container">
      <button 
        style={style1 && { border: "white solid 2px" }} 
        className="wreck-btn"
      >
        {label}
      </button>
      <p className="dept-caption">{dept}</p>
    </div>
  );
};

export default NewButton;
