import React from "react";
import NonCircuitnTech from "../Components/NonCircuitnTech";
import CircuitTec from "./CircuitTec";
import EventButton from "../Components/EventButton";
import { Link } from "react-router-dom";
import TrackInfo from "./TrackInfo";
import img from "../assets/symposium/OverallPoster.jpeg";
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

      <CircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeN-2jLB-1VDYrKwieEQC7grGuG-QyDJXsfqIpr3YAx-cbtXA/viewform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <NewButton label="Register" />
        </a>
      </div>
      <br />
    </div>
  );
};

export default Circuit;
