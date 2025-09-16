import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track2/POTPURRI.png";

const Potpurri = () => {
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
          alt="Potpourri Event"
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
            TECHNOVANZA 25 – POT POURRI
          </span>
        </h1>

        {/* Objective */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Objective
          </h2>
          <p className="text-body lg:text-2xl text-justify">
            “To provide a fun-filled and intellectually engaging platform that
            encourages teamwork, creativity, and quick thinking through a mix of
            entertaining and challenging rounds, fostering a spirit of
            participation and collaboration among students.”
          </p>
        </section>

        {/* Rules */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules of the Event
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>It is a team event which consists of 2 members.</li>
            <li>3 rounds will be held.</li>
            <li>All the 3 rounds will be disclosed on spot.</li>
            <li>
              Participants are requested to assemble 30 minutes prior to the
              event start.
            </li>
            <li>
              Any fraudulent or misbehaving activities will lead to
              disqualification.
            </li>
            <li>Judge's decision will be final.</li>
          </ul>
        </section>

        {/* Coordinators */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📞 Event Coordinators
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>BHAVANA N (II MBA)</strong> – 8428317950 <br />
            <strong>JOEL (II MBA)</strong> – 8610733081
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Potpurri;
