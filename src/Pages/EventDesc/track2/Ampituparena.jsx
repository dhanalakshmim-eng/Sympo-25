import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";

const Ampituparena = () => {
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
          alt="Amp-it-up-Arena"
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
          ⚡
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Amp-it-up-Arena
          </span>
        </h1>

        {/* Tagline */}
        <p className="italic text-body lg:text-xl text-gray-300">
          “Fuel Your Mind, Test Your Limits!” <br /> “Think Fast. Play Smart and Win”
        </p>

        {/* Team Formation */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            👥 Team Formation
          </h2>
          <p className="text-body lg:text-2xl">Each team must consist of 2 members.</p>
        </section>

        {/* Rounds Overview */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Rounds Overview (3 Rounds)
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-3">
            <li>
              <span className="font-semibold text-yellow-300">Round 1:</span> 20 multiple-choice
              questions. <br /> ➤ No negative marking. <br /> ➤ Time limit: 15 minutes (form will close automatically).
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Round 2:</span> A picture will be displayed on the Smart Board. <br /> ➤ Teams must respond within 30 seconds. <br /> ➤ No negative marking.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Round 3:</span> Each team will get 15 seconds to answer. <br /> ➤ Passing is allowed if a team cannot answer. <br /> ➤ No negative marking.
            </li>
          </ul>
        </section>

        {/* Fair Play */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            ⚖️ Fair Play
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Use of mobile phones, internet search, or external help is strictly prohibited.</li>
            <li>Any misconduct may lead to disqualification.</li>
            <li>In case of a tie, additional pictures will be given.</li>
            <li>The first team to answer correctly will be declared the winner.</li>
          </ul>
        </section>

        {/* Rewards */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Rewards
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Winners and Runners-up will receive prizes and certificates.</li>
            <li>All valid participants will be awarded E-certificates.</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Ampituparena;
