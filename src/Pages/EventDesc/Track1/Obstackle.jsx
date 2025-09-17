import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import StumbleGuysBanner from "../../../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.png"; // 🔗 replace with actual image path

const StumbleGuys = () => {
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
          src={StumbleGuysBanner}
          alt="Stumble Guys Event"
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
        {/* Title */}
        <h1>
          🎮
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Stumble Guys Knockout Challenge
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>Stumble Guys</strong> is a fun online knockout game where
            players race, jump, and dodge hilarious obstacles. Only the boldest
            survive to the finale and claim the champion’s crown!
          </p>
        </section>

        {/* Event Details */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📌 Event Details
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Participation:</strong> Individual
          </p>
        </section>

        {/* General Instructions */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 General Instructions
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Players must follow all instructions given by the coordinators.</li>
            <li>
              Any attempt to tamper with the system or game will result in
              disqualification.
            </li>
            <li>
              From each batch, top performers will qualify for the Grand Finale.
            </li>
            <li>
              The decision of the coordinators/judges will be final and binding.
            </li>
            <li>
              No replays will be given for individual player disconnects (unless
              the entire lobby crashes).
            </li>
            <li>No cheating, hacking, or use of unfair mods is allowed.</li>
          </ul>
        </section>

        {/* Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🛠 Event Rounds
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Qualifiers: Batch-wise Rounds</li>
            <li>Grand Finale</li>
          </ul>
        </section>

        {/* Round Details */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🔎 Round Details
          </h2>
          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 1: Qualifiers (Batch-wise Rounds)
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Participants will compete in multiple rounds in the lab.</li>
              <li>Only the top finishers from each batch will advance.</li>
              <li>Elimination is based on game performance.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Grand Finale
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Qualified players compete in the final knockout challenge.</li>
              <li>The last standing/top performer will be crowned champion.</li>
            </ul>
          </div>
        </section>

        {/* Final */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Final
          </h2>
          <p className="text-body lg:text-2xl">
            The champion will be crowned in the <strong>Grand Finale</strong>.
            Certificates and prizes will be awarded to the{" "}
            <strong>top 3 performers</strong>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default StumbleGuys;
