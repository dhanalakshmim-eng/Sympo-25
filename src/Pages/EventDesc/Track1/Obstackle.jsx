import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import StumbleGuysBanner from "../../../assets/symposium/Sympo'25/Track1/OBS-TACKLE RACE.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const StumbleGuys = () => {
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
      icon: "🎮",
      heading: "Event Description",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            <span className="font-bold gradient-text">Stumble Guys</span> is a fun online knockout game where players <span className="highlight bg-accent px-2 py-1 rounded-md">race</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">jump</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">dodge</span> hilarious obstacles. Only the boldest survive to the finale and claim the <span className="text-primary font-semibold">champion's crown!</span>
          </p>
        </div>
      ),
      key: "desc"
    },
    {
      icon: "📌",
      heading: "Event Details",
      content: (
        <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
          <span className="font-semibold text-blue-400">👤 Participation:</span> 
          <span className="ml-2 text-lg font-bold text-primary">Individual</span>
        </div>
      ),
      key: "details"
    },
    {
      icon: "📜",
      heading: "General Instructions",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Players must follow all instructions given by the coordinators",
            "Any attempt to tamper with the system or game will result in disqualification",
            "From each batch, top performers will qualify for the Grand Finale",
            "The decision of the coordinators/judges will be final and binding",
            "No replays will be given for individual player disconnects (unless the entire lobby crashes)",
            "No cheating, hacking, or use of unfair mods is allowed"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "instructions"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">🥇 Round 1:</span> 
            <span className="ml-2">Qualifiers: Batch-wise Rounds</span>
          </div>
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">🏆 Round 2:</span> 
            <span className="ml-2">Grand Finale</span>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "🔎",
      heading: "Round Details",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🥇 Round 1: Qualifiers (Batch-wise Rounds)</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Participants will compete in multiple rounds in the lab</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Only the top finishers from each batch will advance</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Elimination is based on game performance</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border-l-4 border-yellow-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🏆 Round 2: Grand Finale</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▶</span>
                <span>Qualified players compete in the final knockout challenge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-yellow-400">▶</span>
                <span>The last standing/top performer will be crowned champion</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "details"
    },
    {
      icon: "🏆",
      heading: "Final Championship",
      content: (
        <div className="p-4 bg-gradient-to-r from-gold-900/30 to-yellow-900/30 rounded-lg border border-yellow-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            The champion will be crowned in the <span className="font-bold text-primary">Grand Finale</span>. Certificates and prizes will be awarded to the <span className="font-bold gradient-text">top 3 performers</span>.
          </p>
        </div>
      ),
      key: "final"
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
            src={StumbleGuysBanner}
            alt="Stumble Guys Event"
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
            🎮 Stumble Guys
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Knockout Challenge</p>
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

export default StumbleGuys;
