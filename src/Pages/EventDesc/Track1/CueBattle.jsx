import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const CueBattle = () => {
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
      icon: "🖌️",
      heading: "Round 1: Back Sketch Relay",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h4 className="font-semibold text-yellow-300 mb-2">👥 Team Formation:</h4>
            <p className="text-base md:text-lg">Each team must have 2 members, seated one behind the other.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🎯 Game Flow:</h4>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>The back member is shown a technical word by the organizer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>They must draw a simple picture of the word on their partner's back using only one finger</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>The front member must guess the word and say it out loud</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-yellow-300 mb-2">📜 Rules:</h4>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-400">✦</span>
                <span>No alphabets, numbers, symbols, or talking — only drawings</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✦</span>
                <span>Time limit: 30–45 seconds per word</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">✦</span>
                <span>Correct guesses qualify the team for the next round</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "round1"
    },
    {
      icon: "🤐",
      heading: "Round 2: Silent Signals (Earphone Round)",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border-l-4 border-indigo-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🎧 Setup:</h4>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">▶</span>
                <span>One member wears earphones with loud music so they cannot hear</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">▶</span>
                <span>The other member will be shown a word or sentence by the organizer</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🎯 Game Flow:</h4>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>The non-earphone member mouths the word/sentence silently (lip movements only)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>The earphone-wearing member must guess within the time limit</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg border-l-4 border-red-400">
            <h4 className="font-semibold text-yellow-300 mb-2">📜 Rules:</h4>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-red-400">✦</span>
                <span>No sounds, gestures, or signals allowed — lip reading only</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✦</span>
                <span>Each team gets 1 minute for this round</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">✦</span>
                <span>Correct guesses earn points</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "round2"
    },
    {
      icon: "🏆",
      heading: "Winning Criteria",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">🥇</span> 
            <span className="ml-2">Teams that clear Round 1 qualify for Round 2</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🥈</span> 
            <span className="ml-2">Points are awarded for each correct guess in Round 2</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🥉</span> 
            <span className="ml-2">The team with the highest score is declared the winner</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">⚡</span> 
            <span className="ml-2">In case of a tie, a sudden-death tie-breaker round will be conducted</span>
          </div>
        </div>
      ),
      key: "criteria"
    },
    {
      icon: "📞",
      heading: "Student Coordinators",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Ms. Giona Jasley: </span>
              <a href="tel:+917358213508" className="text-accent hover:underline">7358213508</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Ms. Naveena M: </span>
              <a href="tel:+919345475179" className="text-accent hover:underline">9345475179</a>
            </div>
          </div>
        </div>
      ),
      key: "contact"
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
            alt="Cue Battle"
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
            🎭 Cue Battle
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Non-Technical Event</p>
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

export default CueBattle;
