import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Ampituparena = () => {
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
      icon: "🎪",
      heading: "Event Tagline",
      content: (
        <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border border-yellow-500/30">
          <p className="text-lg md:text-xl italic font-semibold text-center">
            <span className="text-yellow-300">"Fuel Your Mind, Test Your Limits!"</span><br />
            <span className="text-orange-300">"Think Fast. Play Smart and Win"</span>
          </p>
        </div>
      ),
      key: "tagline"
    },
    {
      icon: "👥",
      heading: "Team Formation",
      content: (
        <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
          <p className="text-base md:text-lg font-semibold">Each team must consist of <span className="text-accent">2 members</span>.</p>
        </div>
      ),
      key: "team"
    },
    {
      icon: "🎯",
      heading: "Rounds Overview (3 Rounds)",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h4 className="font-semibold text-yellow-300 mb-2">📝 Round 1:</h4>
            <ul className="list-none space-y-1 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>20 multiple-choice questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>No negative marking</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⏰</span>
                <span>Time limit: 15 minutes (form will close automatically)</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h4 className="font-semibold text-yellow-300 mb-2">🖼️ Round 2:</h4>
            <ul className="list-none space-y-1 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>A picture will be displayed on the Smart Board</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⏰</span>
                <span>Teams must respond within 30 seconds</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>No negative marking</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border-l-4 border-indigo-400">
            <h4 className="font-semibold text-yellow-300 mb-2">⚡ Round 3:</h4>
            <ul className="list-none space-y-1 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">▶</span>
                <span>Each team will get 15 seconds to answer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">▶</span>
                <span>Passing is allowed if a team cannot answer</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-indigo-400">▶</span>
                <span>No negative marking</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "⚖️",
      heading: "Fair Play",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Use of mobile phones, internet search, or external help is strictly prohibited",
            "Any misconduct may lead to disqualification",
            "In case of a tie, additional pictures will be given",
            "The first team to answer correctly will be declared the winner"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "fairplay"
    },
    {
      icon: "🏆",
      heading: "Rewards",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">🥇</span> 
            <span className="ml-2">Winners and Runners-up will receive prizes and certificates</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">📜</span> 
            <span className="ml-2">All valid participants will be awarded E-certificates</span>
          </div>
        </div>
      ),
      key: "rewards"
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
            alt="Amp-it-up-Arena"
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
            ⚡ Amp-it-up-Arena
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Knowledge Competition</p>
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

export default Ampituparena;
