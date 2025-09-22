import React from "react";
import NonCircuitnTech from "../Components/NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "../Components/EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";

import "./styles/animation.css";
import VoltageButton from '../Components/VoltageButton';
import NewButton from "../Components/Button/NewButton";
const Circuit = () => {
  return (
    <div>
      <TrackInfo
        label="TRACK II"
      
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />
      <div className="event-buttons-container flex flex-col sm:flex-row justify-center items-center gap-8 mt-5">
        <a
        href="https://forms.gle/dZ8AyUzLBfmS5EyF7" // Replace with your actual Google Form URL
        target="_blank"
        rel="noopener noreferrer"
        >
        <VoltageButton
          label={
            <span style={{
              fontFamily: 'collegefont',
              fontWeight: 'bold',
              letterSpacing: '0.07em',
              fontSize: '25px',
            }}>Register</span>
          }
        />
        </a>
      </div>
        

      <CircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
      </div>
      <br />
    </div>
  );
};

export default Circuit;
