import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track2/BioMystic.jpeg"; // 🔗 update with your banner image

const BioMystic = () => {
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
          alt="Technical Event"
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
            BioMystic : Rules & Rounds
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            This event is designed to test participants’ logical thinking and problem-solving
            abilities through biomedical-themed puzzles and riddles. Teams will decode,
            think fast, and compete under strict time constraints.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Event Objective
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>
              Unscramble given jumbled letters to reveal meaningful biomedical phrases.
            </li>
            <li>Encourage teamwork, speed, and logical accuracy.</li>
          </ul>
        </section>

        {/* Event Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🛠 Event Rounds
          </h2>

          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 1: Unscramble the Letters, Unlock the Phrases
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Objective: Decode biomedical phrases from scrambled letters.</li>
              <li>Time limit: 20 minutes.</li>
              <li>Correct decoding only will be considered valid.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Riddle Rush
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Objective: Solve biomedical riddles quickly and accurately.</li>
              <li>Each riddle tests logical and technical knowledge.</li>
              <li>Time limit enforced; fastest correct responses win.</li>
            </ul>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Two members per team.</li>
            <li>Usage of mobile phones is strictly prohibited.</li>
            <li>Final decisions are made by judges.</li>
            <li>Maintain decorum throughout the event.</li>
            <li>Each round is strictly time-based.</li>
            <li>Late submissions will be disqualified.</li>
            <li>Points are awarded based on accuracy and speed.</li>
            <li>
              In case of a tie between teams, a tie-breaker round will be conducted.
            </li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            For More Information
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Faculty Coordinator:</strong> Ms. B. Nivetha – +91 97870 63689
            <br />
            <strong>Student Coordinator:</strong> Ms. Srivarthini – +91 99405 26581
            <br />
            <strong>Student Coordinator:</strong> Ms. Ramya – +91 80156 12515
            <br />
            <strong>Student Coordinator:</strong> Ms. Shruthi – +91 93633 79962
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default BioMystic;
