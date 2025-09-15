import React from 'react'
import NonCircuitnTech from '../Components/NonCircuitnTech'
import NonCircuitTec from "../Components/NonCircuitTec"
import EventButton from "../Components/EventButton"
import NewButton from '../Components/Button/NewButton'
import { Link } from 'react-router-dom'
import TrackInfo from '../Pages/TrackInfo'

import img from "../assets/symposium/Old/track1.jpg"
const NonCircuit = () => {
  return (
    <div>
      <TrackInfo 
      label="TRACK I"
      
      Description="Registration for Technovanza is now open! Secure your spot today and
            be part of an event that celebrates innovation and collaboration.
            Don’t miss the opportunity to engage with tech enthusiasts and experts." />
      <NonCircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
      <a
        href="https://docs.google.com/Old/forms/d/e/1FAIpQLSevyF8IMwzejiL3Cx04Q-fxlwnxGz3b41DsBDvRTE-rzIVPMA/viewform" // Replace with your actual Google Form URL
        target="_blank"
        rel="noopener noreferrer"
      >
      <NewButton style1="true" label="Register" />
      </a>
      </div>
      <br />
    </div>
  )
}

export default NonCircuit