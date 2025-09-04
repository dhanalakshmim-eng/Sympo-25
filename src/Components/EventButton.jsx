import React from "react";
import './styles/EventButton.css';

const EventButton = ({label}) => {
    return (
      <button className="eventbutton flex justify-center items-center py-5 ">
        <p className="font-bold ">
        {label}
        </p>
        {Array.from({ length: 6 }).map((_, index) => (
          <div className={`star-${index + 1}`} key={index}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              xmlSpace="preserve"
              version="1.1"
              style={{
                shapeRendering: "geometricPrecision",
                textRendering: "geometricPrecision",
                imageRendering: "optimizeQuality",
                fillRule: "evenodd",
                clipRule: "evenodd",
              }}
              viewBox="0 0 784.11 815.53"
            >
              <defs></defs>
              <g id="Layer_x0020_1">
                <path
                  className="fil0"
                  d="M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z"
                />
              </g>
            </svg>
          </div>
        ))}
      </button>
    );
  };
  
  export default EventButton;
  