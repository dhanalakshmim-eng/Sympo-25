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
      <div className='flex justify-center z-50 p-4 shadow'>
        <a
        href="https://forms.gle/YRbsnJiPvX2qFED79" // Replace with your actual Google Form URL
        target="_blank"
        rel="noopener noreferrer"
        >
        <NewButton style1="true" label="Register"/>
        </a>
      </div>
      <NonCircuitTec />
      <NonCircuitnTech />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp">
      </div>
      <br />
    </div>
  )
}

export default NonCircuit