import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";

const CueBattle = () => {
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
          alt="Cue Battle"
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
          🎭
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Cue Battle (Non-Technical Event)
          </span>
        </h1>

        {/* Round 1 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🖌️ Round 1: Back Sketch Relay
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>
              <span className="font-semibold text-yellow-300">Team Formation:</span> Each team must have 2 members, seated one behind the other.
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Game Flow:</span> 
              <ul className="list-disc list-inside ml-6">
                <li>The back member is shown a technical word by the organizer.</li>
                <li>They must draw a simple picture of the word on their partner’s back using only one finger.</li>
                <li>The front member must guess the word and say it out loud.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Rules:</span> 
              <ul className="list-disc list-inside ml-6">
                <li>No alphabets, numbers, symbols, or talking — only drawings.</li>
                <li>Time limit: 30–45 seconds per word.</li>
                <li>Correct guesses qualify the team for the next round.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🤐 Round 2: Silent Signals (Earphone Round)
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>
              <span className="font-semibold text-yellow-300">Setup:</span> 
              <ul className="list-disc list-inside ml-6">
                <li>One member wears earphones with loud music so they cannot hear.</li>
                <li>The other member will be shown a word or sentence by the organizer.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Game Flow:</span> 
              <ul className="list-disc list-inside ml-6">
                <li>The non-earphone member mouths the word/sentence silently (lip movements only).</li>
                <li>The earphone-wearing member must guess within the time limit.</li>
              </ul>
            </li>
            <li>
              <span className="font-semibold text-yellow-300">Rules:</span> 
              <ul className="list-disc list-inside ml-6">
                <li>No sounds, gestures, or signals allowed — lip reading only.</li>
                <li>Each team gets 1 minute for this round.</li>
                <li>Correct guesses earn points.</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* Winning Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Winning Criteria
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Teams that clear Round 1 qualify for Round 2.</li>
            <li>Points are awarded for each correct guess in Round 2.</li>
            <li>The team with the highest score is declared the winner.</li>
            <li>In case of a tie, a sudden-death tie-breaker round will be conducted.</li>
          </ul>
        </section>

        {/* Coordinators */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📞 Student Coordinators
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Ms. Giona Jasley: 7358213508</li>
            <li>Ms. Naveena M: 9345475179</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default CueBattle;
