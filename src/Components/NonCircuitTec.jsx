import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";

import OBSSTACKLE from "../assets/symposium/Old/OBS-Stackle.jpg"
import EscapeRoom from "../assets/symposium/Sympo'25/Track1/Escape-Room.jpeg"
import CUEBATTLE from "../assets/symposium/Sympo'25/Track1/CUEBATTLE.png"
import FLIPSTER from "../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg"
import GIGZUP from "../assets/symposium/Sympo'25/Track1/GIGZUP.jpg"
import Oratio from "../assets/symposium/Sympo'25/Track1/Oratio.png"
import SynaptiQ from "../assets/symposium/Sympo'25/Track1/SynaptiQ.png"
import TriSpark from "../assets/symposium/Sympo'25/Track1/TriSpark.png"
import vizyourway from "../assets/symposium/Sympo'25/Track1/VIZYOURWAY.png"
import Site2Sync from "../assets/symposium/Sympo'25/Track1/Site2sync.png"

import RandomEvents from "./RandomEvents";

import { Link } from "react-router-dom";

const NonCircuitTec = () => {
  const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    
    {
      id: 1,
      imageSrc: Site2Sync,
      altText: "Site2Sync",
      label: "Site2Sync",
      path: "/site2Sync",
      
    },
    {
      id: 2,
      imageSrc: SynaptiQ,
      altText: "SynaptiQ",
      label: "SynaptiQ",
      path: "/synaptiq",
      
    },
    {
      id: 3,
      
      imageSrc: FLIPSTER,
      altText: "FLIPSTER",
      label: "FLIPSTER",
      path: "/flipster",
    },
    
    {
      id: 4,
      imageSrc: EscapeRoom, // Replace with actual image path
      altText: "EscapeRoom",
      label: "EscapeRoom",
      path: "/escaperoom",
      
    },
    
    
    {
      id: 5,
      imageSrc: TriSpark,
      altText: "TriSpark",
      label: "TriSpark",
      path: "/triSpark",
    },
    {
      id: 6,
      imageSrc: vizyourway,
      altText: "vizyourway",
      label: "vizyourway",
      path: "/vizyourway",
    },
    
    
  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="techeventfont text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
      >
        Technical Events
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          <div className="img-container-oration justify-center">
          <div className="mt-12 flex justify-center items-center">
          
          <Link to={"/oratio"}> 
            <img
            // ref={tiltRef}
            src={Oratio}
            alt="Technovanza Poster"
            className="max-w-100 md:max-w-[50%] justify-center"
            />
          </Link>
          
        </div>
          </div>
        
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}> 
              <Card imageSrc={card.imageSrc} altText={card.altText} />
            </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default NonCircuitTec;