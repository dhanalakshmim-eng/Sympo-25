import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const BioMystic = () => {
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
      icon: "🧠",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          This event is designed to test participants' <span className="highlight bg-accent px-2 py-1 rounded-md">logical thinking</span> and <span className="highlight bg-accent px-2 py-1 rounded-md">problem-solving abilities</span> through biomedical-themed puzzles and riddles. Teams will decode, think fast, and compete under <span className="text-primary font-semibold">strict time constraints</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <ul className="list-none space-y-3 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span>Unscramble given jumbled letters to reveal meaningful <strong className="text-primary">biomedical phrases</strong></span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span>Encourage <strong className="text-primary">teamwork, speed, and logical accuracy</strong></span>
          </li>
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🔤 Round 1: Unscramble the Letters, Unlock the Phrases</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span><strong>Objective:</strong> Decode biomedical phrases from scrambled letters</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⏰</span>
                <span><strong>Time limit:</strong> 20 minutes</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Correct decoding only will be considered valid</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🧩 Round 2: Riddle Rush</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span><strong>Objective:</strong> Solve biomedical riddles quickly and accurately</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Each riddle tests logical and technical knowledge</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Time limit enforced; fastest correct responses win</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Two members per team",
            "Usage of mobile phones is strictly prohibited",
            "Final decisions are made by judges",
            "Maintain decorum throughout the event",
            "Each round is strictly time-based",
            "Late submissions will be disqualified",
            "Points are awarded based on accuracy and speed",
            "In case of a tie between teams, a tie-breaker round will be conducted"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "📞",
      heading: "For More Information",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-3 font-semibold text-accent">Faculty Coordinator:</div>
          <div className="mb-4">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. B. Nivetha: </span>
              <a href="tel:+919787063689" className="text-accent hover:underline">+91 97870 63689</a>
            </div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. Srivarthini: </span>
              <a href="tel:+919940526581" className="text-accent hover:underline">+91 99405 26581</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. Ramya: </span>
              <a href="tel:+918015612515" className="text-accent hover:underline">+91 80156 12515</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. Shruthi: </span>
              <a href="tel:+919363379962" className="text-accent hover:underline">+91 93633 79962</a>
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
            alt="BioMystic Technical Event"
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
            ✨ BioMystic
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Technical Event: Rules & Rounds</p>
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

export default BioMystic;
