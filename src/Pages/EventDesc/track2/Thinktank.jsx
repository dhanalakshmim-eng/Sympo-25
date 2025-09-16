import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/SynaptiQ.png";

const Thinktank = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EventImage}
          alt="Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            SynaptiQ: Business Knowledge Event
          </span>
        </h1>

        {/* Objective */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Objective
          </h2>
          <p className="text-body lg:text-2xl text-justify">
            To test and build business knowledge while promoting quick thinking,
            teamwork, and healthy competition.
          </p>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each team must have 2 members.</li>
            <li>
              The event will consist of 3 rounds (including prelims): Prelims,
              1st round – Logo, 2nd round – Rapid Fire.
            </li>
            <li>For all the rounds, the topic will be revealed on the spot.</li>
            <li>Teams must arrive on time; late arrivals may not be permitted.</li>
            <li>
              Teams will be evaluated on spontaneity, teamwork, and the
              effectiveness of their solutions.
            </li>
            <li>
              The judges' and organizers' decisions are final and cannot be
              disputed.
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Thinktank;
