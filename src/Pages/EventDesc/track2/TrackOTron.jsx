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
      heading: "The Cosmic Tale",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            Once upon a time, in another universe, a legendary arena called <span className="font-bold gradient-text">Track-O-Tron</span> thrived—a place where robots were not just machines, but <span className="highlight bg-accent px-2 py-1 rounded-md">warriors of innovation</span>. From that distant universe, the arena travelled across galaxies, conducted epic battles in many worlds, and now, traveling through the void of space aboard an alien spaceship, has arrived at <span className="text-primary font-semibold">JCE College, Room M101!</span>
          </p>
        </div>
      ),
      key: "tale"
    },
    {
      icon: "🌌",
      heading: "The Cosmic Adventurers",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Teams of up to <span className="font-bold text-primary">four</span>—or lone inventors—may bring their creations: <span className="highlight bg-accent px-2 py-1 rounded-md">wired</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">wireless</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">autonomous</span>, or <span className="highlight bg-accent px-2 py-1 rounded-md">semi-autonomous</span>. But beware: <span className="text-red-400 font-semibold">safety is law</span>. Even intergalactic heroes must follow the rules.
        </p>
      ),
      key: "adventurers"
    },
    {
      icon: "⚔️",
      heading: "The Galactic Challenges",
      content: (
        <div className="space-y-3">
          {[
            "Line of Destiny – follow the cosmic path",
            "Maze of Shadows – dodge obstacles like an interstellar pilot", 
            "Battleground of Titans – Robo Soccer / Sumo",
            "Hands of Steel – Pick & Place mastery",
            "Pathfinder's Quest – autonomous navigation",
            "Rise of Titans – humanoid/biped challenges"
          ].map((challenge, index) => (
            <div key={index} className="p-3 bg-gradient-to-r from-blue-900/20 to-purple-900/20 rounded-lg border-l-4 border-blue-400">
              <span className="text-blue-400 font-bold">⚡</span>
              <span className="ml-2 text-base md:text-lg">{challenge}</span>
            </div>
          ))}
          <div className="mt-4 p-4 bg-gradient-to-r from-orange-900/30 to-red-900/30 rounded-lg border border-orange-500/30">
            <p className="text-base md:text-lg leading-relaxed">
              Each robot gets <span className="font-bold text-yellow-400">5–10 minutes of action</span>, followed by <span className="font-bold text-yellow-400">2–3 minutes of questioning</span> by the guardians (judges). Once the mission begins, no outside help may intervene. Bring your own batteries, tools, chargers, and spares. <span className="text-red-400 font-bold">Any mischief = instant disqualification.</span>
            </p>
          </div>
        </div>
      ),
      key: "challenges"
    },
    {
      icon: "🌠",
      heading: "The Path to Cosmic Glory",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Design & strength",
            "Creativity & originality",
            "Speed & precision", 
            "Code intelligence",
            "Storytelling of the invention",
            "Discipline & respect for rules"
          ].map((criteria, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-yellow-400 font-bold">⭐</span>
              <span>{criteria}</span>
            </li>
          ))}
        </ul>
      ),
      key: "glory"
    },
    {
      icon: "📜",
      heading: "Laws of the Galactic Arena",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "The word of the guardians is final",
            "Rule-breakers face instant disqualification",
            "Only those who build, battle, and demonstrate will earn the Scrolls of Honor (certificates)"
          ].map((law, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">⚖️</span>
              <span>{law}</span>
            </li>
          ))}
        </ul>
      ),
      key: "laws"
    },
    {
      icon: "🛸",
      heading: "The Call to Action",
      content: (
        <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 rounded-lg border border-indigo-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            The legend now thrives on Earth, in <span className="font-bold text-primary">Room M101</span>, where students become creators, robots become warriors, and innovation becomes the ultimate intergalactic weapon.
          </p>
          <p className="text-lg md:text-xl font-bold gradient-text text-center mt-3">
            Will you answer the call? The spaceship has landed—the arena awaits.
          </p>
        </div>
      ),
      key: "call"
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
            alt="Track-O-Tron Event"
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
            🚀 Track-O-Tron
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">The Cosmic Robotics Arena</p>
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
