import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from "../utils/Img/TechLogo.jpg";

import OBSSTACKLE from "../assets/symposium/Old/OBS-Stackle.jpg"
import EscapeRoom from "../assets/symposium/Sympo'25/Escape-Room.jpeg"
import CUEBATTLE from "../assets/symposium/Sympo'25/CUEBATTLE.png"
import FLIPSTER from "../assets/symposium/Sympo'25/FLIPSTER.jpg"
import GIGZUP from "../assets/symposium/Sympo'25/GIGZUP.jpg"
import Oratio from "../assets/symposium/Sympo'25/Oratio.png"
import SynaptiQ from "../assets/symposium/Sympo'25/SynaptiQ.png"
import TriSpark from "../assets/symposium/Sympo'25/TriSpark.png"
import vizyourway from "../assets/symposium/Sympo'25/VIZ YOUR WAY.png"
import Cinephilia from "../assets/symposium/Sympo'25/Cinephilia.jpeg"

import RandomEvents from "./RandomEvents";

import { Link } from "react-router-dom";

const NonCircuitTec = () => {
  const noncircuittec = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 9,
      imageSrc: Cinephilia, // Replace with actual image path
      altText: "Cinephilia",
      label: "Cinephilia",
      path: "/Cinephilia",
    },
    {
      id: 1,
      imageSrc: EscapeRoom, // Replace with actual image path
      altText: "EscapeRoom",
      label: "EscapeRoom",
      path: "/escaperoom",
    },
    {
      id: 2,
      imageSrc: CUEBATTLE,
      altText: "CUEBATTLE",
      label: "CUEBATTLE",
      path: "/cuebattle",
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
      imageSrc: GIGZUP,
      altText: "GIGZUP",
      label: "GIGZUP",
      path: "/gigzup",
    },
    {
      id:5,
      imageSrc:Oratio,
      altText: "Oratio",
      label: "Oratio",
      path: "/oratio",
    },
    {
      id: 6,
      imageSrc: SynaptiQ,
      altText: "SynaptiQ",
      label: "SynaptiQ",
      path: "/synaptiq",
    },
    {
      id: 7,
      imageSrc: TriSpark,
      altText: "TriSpark",
      label: "TriSpark",
      path: "/TriSpark",
    },
    {
      id: 8,
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