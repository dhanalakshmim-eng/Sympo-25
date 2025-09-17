import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

const Deadlydeeds = () => {
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
          alt="Nevermore Mystery Event"
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
          🕵️‍♂️
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            SINISTER SCHEMES
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            On the night of October 10th, the shadows will gather at JCE College,
            where a tale of deceit, secrets, and dark puzzles awaits. A crime
            has been committed—one so twisted, even the walls whisper in
            silence. The suspects? Lurking among you. The clues? Buried in
            riddles, sealed within games, waiting for the brave (or foolish) to
            uncover them. You shall have only 10 minutes to solve all mysteries,
            expose the culprit, and escape the clutches of Nevermore. Fail… and
            the truth will remain hidden forever.
          </p>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>The mystery must be solved within 10 minutes.</li>
            <li>Participants must remain in detective mode at all times.</li>
            <li>
              All puzzles and riddles are open to every team—observation and
              teamwork are key.
            </li>
            <li>
              Skipping games is forbidden; every clue may carry crucial weight.
            </li>
            <li>
              Collaboration is encouraged, but deception will lead to
              disqualification.
            </li>
            <li>
              The coordinators’ decisions are final and binding, like ravens in
              the night.
            </li>
            <li>Team Size: 2–4 detectives.</li>
            <li>Game Duration: 10 minutes total.</li>
          </ul>
        </section>

        {/* Event Flow */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🛠 Event Flow – The Wednesday Way
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              <strong>Opening Ritual:</strong> A gloomy briefing welcomes
              detectives to the halls of Nevermore.
            </li>
            <li>
              <strong>The Hunt Begins:</strong> Teams dive into 10
              mini-investigations (Find the Path, Jumbled Words, Odd One Out,
              etc.).
            </li>
            <li>
              <strong>Gathering Evidence:</strong> Every solved puzzle yields
              sinister tokens: fingerprints, blood-stained notes, or suspicious
              weapons.
            </li>
            <li>
              <strong>Interrogation & Theories:</strong> Detectives use evidence
              to question suspects and build deductions.
            </li>
            <li>
              <strong>The Last Shadows:</strong> Hidden motives surface, leading
              to the final reveal.
            </li>
            <li>
              <strong>Accusation & Verdict:</strong> Teams present their final
              theory—the killer, weapon, and motive.
            </li>
            <li>
              <strong>Grand Unveiling:</strong> The host unmasks the true
              culprit, tying all sinister clues together.
            </li>
          </ul>
        </section>

        {/* Closing Line */}
        <section className="text-gray-300">
          <p className="italic text-body lg:text-2xl">
            "The shadows will not wait, and neither will the truth. Ten minutes
            is all you have… solve the Nevermore Mystery, or become part of it."
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Deadlydeeds;
