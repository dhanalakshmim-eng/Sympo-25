import React from "react";
import NonCircuitnTech from "../Components/NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "../Components/EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/Old/OverallPoster.jpeg";
import "./styles/animation.css";
import NewButton from "../Components/Button/NewButton";
const Circuit = () => {
  return (
    <div>
      <TrackInfo
        label="TRACK II"
        Image={img}
        Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts."
      />
        <NewButton label="Register" />

      <CircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://forms.gle/dZ8AyUzLBfmS5EyF7 "
          target="_blank"
          rel="noopener noreferrer"
        >
        
        </a>
      </div>
      <br />
    </div>
  );
};

export default Circuit;
