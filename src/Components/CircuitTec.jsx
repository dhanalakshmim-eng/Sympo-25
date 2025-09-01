import React from "react";
import randomColor from "randomcolor";
import "../text.css";
import Card from "./Card";
import Image from '../utils/Img/TechLogo.jpg';
import energia from "../assets/symposium/energiaNova.jpg";
import batallia from "../assets/symposium/robots.png";
import bizqueset from "../assets/symposium/Biquest.png"
import tescaflow from "../assets/symposium/Tescaflow.jpg"
import cassedete from "../assets/symposium/cassedete.jpg"

import RandomEvents from "./RandomEvents";
import { Link } from "react-router-dom";

const CircuitTec = () => {
  const color = randomColor();
  const CirTech = RandomEvents("Circuit Branch - Technical Events");

  // Events data
  const circuittechnicalEvents = [
    {
      id: 1,
      imageSrc: energia, 
      altText: "Energia Nova",
      label: "Energia Nova",
      path: "/energianova",
      // onClick: () => alert("Energia Nova clicked"),
    },
    {
      id: 2,
      imageSrc: cassedete, 
      altText: "Casse-dete",
      label: "Casse-dete",
      path: "/cassedete",
    },
    {
      id: 3,
      imageSrc: batallia, 
      altText: "Batallia de Robots",
      label: "Batallia de Robots",
      path: "/batallia",
    },
    {
      id: 4,
      imageSrc: tescaflow, 
      altText: "Tescaflow",
      label: "Tescaflow",
      path: "/tescaflow",
    },
    {
      id: 5,
      imageSrc: bizqueset, 
      altText: "BizQuest",
      label: "BizQueset",
      path: "/bizqueset",
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
