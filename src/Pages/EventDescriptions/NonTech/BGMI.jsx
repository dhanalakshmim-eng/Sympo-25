import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import BGMIImage from "../../../assets/symposium/Old/BGMI_FINAL.jpg";
import "./MysteryVault.css";

const BGMI = () => {
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
          src={BGMIImage}
          alt="BGMI Tournament"
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
          🎮  
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            BGMI Tournament
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Greetings from the Department of Cybersecurity! 🎮  
            Welcome to <strong>🔥 BGMI TOURNAMENT 🔥</strong>, the ultimate showdown in the world of <strong>Battlegrounds Mobile India</strong>!  
          </p>
          <p>
            Get ready to unleash your gaming prowess in this high-octane tournament, where strategy, precision, and teamwork will be your keys to victory! ⚔️  
          </p>
          <p>
            As part of our college symposium, this event promises heart-pounding action, fierce competition, and a chance to claim glory. Assemble your squad, gear up, and battle for the ultimate title! 🏆
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Event Details:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>📱 <strong>Platform:</strong> Battlegrounds Mobile India (BGMI)</li>
            <li>🗺️ <strong>Game Mode:</strong> Battle Royale - Erangle</li>
            <li>👥 <strong>Team Size:</strong> 4 Members per Squad</li>
            <li>⚔️ <strong>Fair Play:</strong> Cheating, hacking, or bug-exploiting will result in instant disqualification</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            🎮 Tournament Rules:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🎯 <strong>Battle Royale mode:</strong> Erangle</li>
            <li>⚔️ <strong>Squad Size:</strong> Only 4 members allowed per squad</li>
            <li>🤝 <strong>Fair Play:</strong> No cheating, hacking, or exploiting bugs</li>
            <li>🔴 <strong>Disqualification:</strong> Instant disqualification for any unethical gameplay</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Rounds and Scoring:
          </h2>
          <p className="text-body lg:text-2xl">Total Matches: 3 Matches</p>
          <ul className="list-decimal list-inside mt-4 text-body lg:text-2xl">
            <li>🥇 1st Place: 10 points</li>
            <li>🥈 2nd Place: 6 points</li>
            <li>🥉 3rd Place: 5 points</li>
            <li>🏅 4th Place: 4 points</li>
            <li>🏅 5th Place: 3 points</li>
            <li>🏅 6th Place: 2 points</li>
            <li>🔢 7th & 8th Place: 1 point</li>
            <li>🚫 9th to 16th Place: 0 points</li>
          </ul>
          <p className="mt-4 text-body lg:text-2xl">💥 <strong>Per Kill:</strong> 1 point</p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>⚔️ Are you ready to dominate the Battlegrounds and claim victory?</p>
          <p>
            Assemble your squad, sharpen your strategy, and prepare for an unforgettable experience.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default BGMI;
