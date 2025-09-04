import React, { useEffect, useRef } from "react"; 
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/Biquest.png"; // Replace with your actual image
import "./EnergiaNova.css";

const Bizqueset = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
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
          alt="Eloquence Event"
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
          ✨<span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">BizQuest</span>
        </h1>

        {/* Rules and Regulations Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">Rules and Regulations</h2>
          <ul className="list-disc list-inside">
            <li>Each team must have 2 members.</li>
            <li>The event will consist of three rounds with details unveiled during the competition.</li>
            <li>Teams must arrive on time, late arrivals may not be permitted.</li>
            <li>Teams will be evaluated on creativity, teamwork, and the effectiveness of their solutions.</li>
            <li>The judges’ and organizers’ decisions are final and cannot be disputed.</li>
          </ul>
          <p className="text-lg font-bold mt-4">CASH PRIZE AWAITS YOU!</p>
        </section>



      </motion.div>
    </div>
  );
};

export default Bizqueset;
