


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import TrackOTronBanner from "../../../assets/symposium/Sympo'25/Track2/TRACK TRON.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const TrackOTron = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.06,
        glare: true,
        "max-glare": 0.28
      });
    }
  }, []);

  const sectionCards = [
    {
      icon: "🚀",
      heading: "The Cosmic Tale of Track-O-Tron",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          Once upon a time, in another universe, a legendary arena called Track-O-Tron thrived—a place where robots were not just machines, but warriors of innovation.<br /><br />
          From that distant universe, the arena travelled across galaxies, conducted epic battles in many worlds, and now, traveling through the void of space aboard an alien spaceship, has arrived at JCE College, Room M101!
        </div>
      ),
      key: "cosmic-tale"
    },
    {
      icon: "👾",
      heading: "The Cosmic Adventurers",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          Teams of up to four—or lone inventors—may bring their creations: wired, wireless, autonomous, or semi-autonomous. But beware: safety is law. Even intergalactic heroes must follow the rules.
        </div>
      ),
      key: "adventurers"
    },
    {
      icon: "🪐",
      heading: "The Galactic Challenges",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          Every robot faces 5–10 minutes of action, followed by 2–3 minutes of questioning by the guardians (judges). Challenges include:<br />
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Line of Destiny – follow the cosmic path</li>
            <li>Maze of Shadows – dodge obstacles like an interstellar pilot</li>
            <li>Battleground of Titans – Robo Soccer / Sumo</li>
            <li>Hands of Steel – Pick & Place mastery</li>
            <li>Pathfinder’s Quest – autonomous navigation</li>
            <li>Rise of Titans – humanoid/biped challenges</li>
          </ul>
          Once the mission begins, no outside help may intervene. Inventors must be ready with batteries, tools, chargers, and spare parts. The guardians’ eyes are sharp—any mischief leads to immediate disqualification.
        </div>
      ),
      key: "challenges"
    },
    {
      icon: "⚖️",
      heading: "Laws of the Galactic Arena",
      content: (
        <ul className="list-disc ml-6 text-base md:text-lg">
          <li>The word of the guardians is final.</li>
          <li>Rule-breakers face instant disqualification.</li>
          <li>Only those who build, battle, and demonstrate will earn the Scrolls of Honor (certificates).</li>
        </ul>
      ),
      key: "laws"
    },
    
    {
      icon: "🏆",
      heading: "The Path to Cosmic Glory",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          Victory depends not just on skill, but on the spirit of the creation:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Design & strength</li>
            <li>Creativity & originality</li>
            <li>Speed & precision</li>
            <li>Code intelligence</li>
            <li>Storytelling of the invention</li>
            <li>Discipline & respect for rules</li>
          </ul>
        </div>
      ),
      key: "glory"
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row items-start justify-between max-w-7xl mx-auto p-6 gap-10 bg-gradient-to-br from-navy-900 via-blue-900 to-indigo-900 rounded-xl shadow-2xl backdrop-blur min-h-screen">
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center lg:sticky lg:top-10"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <div className="relative">
          <img
            src={TrackOTronBanner}
            alt="Track-O-Tron Arena"
            className="w-5/6 md:w-4/5 lg:w-full object-cover rounded-2xl shadow-2xl border-4 border-gradient"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-2xl"></div>
        </div>
      </motion.div>

      <div className="lg:w-4/6 w-full flex flex-col gap-6 overflow-auto custom-scrollbar pb-3" style={{ maxHeight: "calc(100vh - 60px)" }}>
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center lg:text-left"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold gradient-text drop-shadow-lg mb-2">
            Track-O-Tron
          </h1>
        </motion.div>

        {sectionCards.map((card, i) => (
          <motion.div
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            key={card.key}
            className="glass-container px-6 py-5 rounded-xl shadow-glass border border-white/10 bg-black/30 backdrop-blur-md hover:bg-black/40 transition-all duration-300"
          >
            <div className="flex items-center mb-4 gap-3">
              <span className="text-3xl">{card.icon}</span>
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">{card.heading}</h2>
            </div>
            <div className="text-gray-100">{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default TrackOTron;
