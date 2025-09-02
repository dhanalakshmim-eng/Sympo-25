import React from 'react'
import NonCircuitnTech from './NonCircuitnTech'
import NonCircuitTec from "./NonCircuitTec"
import EventButton from "./EventButton"
import { Link } from 'react-router-dom'
import TrackInfo from './TrackInfo'
import img from "../assets/symposium/track1.jpg"
const NonCircuit = () => {
  return (
    <div>
      <TrackInfo 
      label="TRACK I"
      Image={img}
      Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts." />
      <NonCircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSevyF8IMwzejiL3Cx04Q-fxlwnxGz3b41DsBDvRTE-rzIVPMA/viewform" // Replace with your actual Google Form URL
        target="_blank"
        rel="noopener noreferrer"
      >
      <EventButton label="Register1" />
      </a>
      </div>
      <br />
    </div>
  )
}

export default NonCircuit