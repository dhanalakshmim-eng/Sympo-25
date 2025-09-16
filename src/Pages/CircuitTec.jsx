import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "../Components/Card";
import Image from '../utils/Img/TechLogo.jpg';
import AmpItUpArena from "../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg"
import BioMystic from "../assets/symposium/Sympo'25/Track2/BioMystic.jpeg"
import dEADLYDEEDS from "../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg"
import Nexus from "../assets/symposium/Sympo'25/Track2/Nexus.jpeg"
import POTPURRI from "../assets/symposium/Sympo'25/Track2/POTPURRI.png"
import THINKTANK from "../assets/symposium/Sympo'25/Track2/THINK TANK.png"
import TRACKTRON from "../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg"

import iplauction from "../assets/symposium/Old/iplauction.jpg"


import RandomEvents from "../Components/RandomEvents";
import { Link } from "react-router-dom";



const CircuitTec = () => {
  const color = randomColor();
  const CirTech = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: AmpItUpArena,
      altText: "Amp-It-Up-Arena",
      path: "/ampItUpArena",
    },
    {
      id: 2,
      imageSrc: BioMystic,
      altText: "BioMystic",
      path: "/bioMystic",
    },
    {
      id: 3,
      imageSrc: dEADLYDEEDS, 
      altText: "Deadly Deeds",
      label: "Deadly Deeds",
      path: "/deadlydeeds",
    },
    {
      id: 4,
      imageSrc: Nexus, 
      altText: "Nexus",
      label: "Nexus",
      path: "/nexus",
    },
    {
      id: 5,
      imageSrc: POTPURRI, 
      altText: "POTPURRI",
      label: "POTPURRI",
      path: "/potpurri",
    },
    {
      id: 6,
      imageSrc: THINKTANK, 
      altText: "THINKTANK",
      label: "THINKTANK",
      path: "/thinktank",
    },
    {
      id: 7,
      imageSrc: TRACKTRON, 
      altText: "TRACKTRON",
      label: "TRACKTRON",
      path: "/tracktron",
    },

  ];

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h3
        className="text-3xl md:text-4xl font-bold text-center mb-8 text-white uppercase event-text tracking-widest"
        style={{
          textShadow: `2px 2px 15px ${color}`,
        }}
      >
       Technical Events
      </h3>

      <div>
        <main className="card-container gap-10 relative flex flex-wrap justify-center w-full">
          {/* Loop through each event and render a Card */}
          {circuittechnicalEvents.map((card) => (
            <Link to={card.path} key={card.id}>
            <Card
              imageSrc={card.imageSrc}
              altText={card.altText}
              // label={card.label}
              // onClick={card.onClick}
            />
          </Link>
          ))}
        </main>
      </div>
    </div>
  );
};

export default CircuitTec;
