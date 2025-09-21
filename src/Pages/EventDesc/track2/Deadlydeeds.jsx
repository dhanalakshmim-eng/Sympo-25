import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Deadlydeeds = () => {
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
      icon: "🕵️‍♂️",
      heading: "Event Description",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            On the night of <span className="font-bold text-primary">October 10th</span>, the shadows will gather at JCE College, where a tale of <span className="highlight bg-accent px-2 py-1 rounded-md">deceit</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">secrets</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">dark puzzles</span> awaits. A crime has been committed—one so twisted, even the walls whisper in silence. The suspects? Lurking among you. The clues? Buried in riddles, sealed within games, waiting for the brave (or foolish) to uncover them. You shall have only <span className="text-red-400 font-bold">10 minutes</span> to solve all mysteries, expose the culprit, and escape the clutches of Nevermore. Fail… and the truth will remain hidden forever.
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "The mystery must be solved within 10 minutes",
            "Participants must remain in detective mode at all times",
            "All puzzles and riddles are open to every team—observation and teamwork are key",
            "Skipping games is forbidden; every clue may carry crucial weight",
            "Collaboration is encouraged, but deception will lead to disqualification",
            "The coordinators' decisions are final and binding, like ravens in the night",
            "Team Size: 2–4 detectives",
            "Game Duration: 10 minutes total"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">🔍</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🛠",
      heading: "Event Flow – The Wednesday Way",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg border-l-4 border-red-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🌙 Opening Ritual:</h4>
            <p className="text-base md:text-lg">A gloomy briefing welcomes detectives to the halls of Nevermore</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🔍 The Hunt Begins:</h4>
            <p className="text-base md:text-lg">Teams dive into 10 mini-investigations (Find the Path, Jumbled Words, Odd One Out, etc.)</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🧩 Gathering Evidence:</h4>
            <p className="text-base md:text-lg">Every solved puzzle yields sinister tokens: fingerprints, blood-stained notes, or suspicious weapons</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-yellow-300 mb-2">❓ Interrogation & Theories:</h4>
            <p className="text-base md:text-lg">Detectives use evidence to question suspects and build deductions</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border-l-4 border-indigo-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🌫️ The Last Shadows:</h4>
            <p className="text-base md:text-lg">Hidden motives surface, leading to the final reveal</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border-l-4 border-yellow-400">
            <h4 className="font-semibold text-yellow-300 mb-2">⚖️ Accusation & Verdict:</h4>
            <p className="text-base md:text-lg">Teams present their final theory—the killer, weapon, and motive</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-pink-900/30 to-red-900/30 rounded-lg border-l-4 border-pink-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🎭 Grand Unveiling:</h4>
            <p className="text-base md:text-lg">The host unmasks the true culprit, tying all sinister clues together</p>
          </div>
        </div>
      ),
      key: "flow"
    },
    {
      icon: "💀",
      heading: "Closing Words",
      content: (
        <div className="p-4 bg-gradient-to-r from-black/30 to-gray-900/30 rounded-lg border border-gray-500/30">
          <p className="text-base md:text-lg italic text-center font-semibold">
            <span className="text-red-400">"The shadows will not wait, and neither will the truth.</span> <br />
            <span className="text-yellow-400">Ten minutes is all you have… solve the Nevermore Mystery, or become part of it."</span>
          </p>
        </div>
      ),
      key: "closing"
    },
    {
      icon: "🏛️",
      heading: "Event Footer",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed italic">
            Organized under <span className="font-bold text-primary">TECHNOVANZA 2025-26</span>: An Inter Collegiate National Level Technical Symposium at <span className="font-bold text-accent">Jerusalem College of Engineering, Pallikaranai, Chennai</span>.
          </p>
        </div>
      ),
      key: "footer"
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
            src={EventImage}
            alt="Nevermore Mystery Event"
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
            🕵️‍♂️ SINISTER SCHEMES
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Mystery Detective Event</p>
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

export default Deadlydeeds;
