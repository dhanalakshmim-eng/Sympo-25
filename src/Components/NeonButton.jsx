import React, { useState } from "react";
import styled from "styled-components";

const NeonButton = ({ label, onClick, tooltip }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <StyledWrapper>
      <button
        className="button"
        onClick={onClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        {label}
      </button>
      {isHovered && <Tooltip>{tooltip}</Tooltip>}
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  position: relative;
  display: inline-block;

  .button {
    cursor: pointer;
    position: relative;
    width: 250px; /* Fixed width */
    height: 60px; /* Fixed height */
    text-decoration: none;
    border: none;
    color: #fff;
    font-size: 1.2em;
    font-weight: bold;
    text-transform: uppercase;
    font-family: sans-serif;
    letter-spacing: 4px;
    overflow: hidden;
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .button:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    background: rgba(255, 255, 255, 0.1);
  }
  .button::after {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.4),
      transparent
    );
    transition: 0.5s;
    transition-delay: 0.5s;
  }
  .button:hover:after {
    left: 100%;
  }
  .button span {
    position: absolute;
    display: block;
    transition: 0.5s ease;
  }
  .button span:nth-child(1) {
    top: 0;
    left: 0;
    width: 0;
    height: 1px;
    background: #fff;
  }
  .button:hover span:nth-child(1) {
    width: 100%;
    transform: translateX(100%);
  }
  .button span:nth-child(2) {
    top: 0;
    left: 0;
    width: 1px;
    height: 0;
    background: #fff;
  }
  .button:hover span:nth-child(2) {
    height: 100%;
    transform: translateY(100%);
  }
  .button span:nth-child(3) {
    bottom: 0;
    right: 0;
    width: 0;
    height: 1px;
    background: #fff;
  }
  .button:hover span:nth-child(3) {
    width: 100%;
    transform: translateX(-100%);
  }
  .button span:nth-child(4) {
    bottom: 0;
    right: 0;
    width: 1px;
    height: 0;
    background: #fff;
  }
  .button:hover span:nth-child(4) {
    height: 100%;
    transform: translateY(-100%);
  }
`;

const Tooltip = styled.div`
  position: absolute;
  bottom: 120%; /* Adjust this to position the tooltip above the button */
  left: 50%;
  transform: translateX(-50%);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px; /* Slightly rounded corners */
  padding: 10px 15px;
  color: #fff;
  font-size: 0.9em;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(5px); /* Glass-like effect */
  border: 1px solid rgba(255, 255, 255, 0.3);

  &::after {
    content: '';
    position: absolute;
    top: 100%; /* Position at the bottom edge of the tooltip */
    left: 50%;
    transform: translateX(-50%);
    width: 0;
    height: 0;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-top: 8px solid rgba(255, 255, 255, 0.1); /* Match the tooltip background */
    z-index: 1; /* Ensure it appears above other elements */
  }
`;

export default NeonButton;