import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import TrackOTronBanner from "../../../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg"; // 🔗 replace with actual image path

const TrackOTron = () => {
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
          src={TrackOTronBanner}
          alt="Track-O-Tron Event"
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
          🚀
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            The Cosmic Tale of Track-O-Tron
          </span>
        </h1>

        {/* Story Intro */}
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Once upon a time, in another universe, a legendary arena called{" "}
            <strong>Track-O-Tron</strong> thrived—a place where robots were not
            just machines, but warriors of innovation.  
            From that distant universe, the arena travelled across galaxies,
            conducted epic battles in many worlds, and now, traveling through the
            void of space aboard an alien spaceship, has arrived at{" "}
            <strong>JCE College, Room M101!</strong>
          </p>
        </section>

        {/* Adventurers */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🌌 The Cosmic Adventurers
          </h2>
          <p className="text-body lg:text-2xl">
            Teams of up to <strong>four</strong>—or lone inventors—may bring
            their creations: wired, wireless, autonomous, or semi-autonomous.  
            But beware: <strong>safety is law</strong>. Even intergalactic heroes
            must follow the rules.
          </p>
        </section>

        {/* Challenges */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            ⚔️ The Galactic Challenges
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Line of Destiny – follow the cosmic path</li>
            <li>Maze of Shadows – dodge obstacles like an interstellar pilot</li>
            <li>Battleground of Titans – Robo Soccer / Sumo</li>
            <li>Hands of Steel – Pick & Place mastery</li>
            <li>Pathfinder’s Quest – autonomous navigation</li>
            <li>Rise of Titans – humanoid/biped challenges</li>
          </ul>
          <p className="mt-4 text-body lg:text-2xl">
            Each robot gets <strong>5–10 minutes of action</strong>, followed by{" "}
            <strong>2–3 minutes of questioning</strong> by the guardians (judges).  
            Once the mission begins, no outside help may intervene. Bring your
            own batteries, tools, chargers, and spares.  
            <strong>Any mischief = instant disqualification.</strong>
          </p>
        </section>

        {/* Path to Glory */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🌠 The Path to Cosmic Glory
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Design & strength</li>
            <li>Creativity & originality</li>
            <li>Speed & precision</li>
            <li>Code intelligence</li>
            <li>Storytelling of the invention</li>
            <li>Discipline & respect for rules</li>
          </ul>
        </section>

        {/* Laws */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Laws of the Galactic Arena
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>The word of the guardians is final.</li>
            <li>Rule-breakers face instant disqualification.</li>
            <li>
              Only those who build, battle, and demonstrate will earn the{" "}
              <strong>Scrolls of Honor (certificates)</strong>.
            </li>
          </ul>
        </section>

        {/* Closing Line */}
        <section className="text-gray-300 text-body lg:text-2xl text-justify">
          <p>
            The legend now thrives on Earth, in <strong>Room M101</strong>, where
            students become creators, robots become warriors, and innovation
            becomes the ultimate intergalactic weapon.  
            <br />
            <span className="gradient-text font-bold">
              Will you answer the call? The spaceship has landed—the arena
              awaits.
            </span>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default TrackOTron;
