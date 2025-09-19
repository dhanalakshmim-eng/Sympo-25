import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cinephilia.png";
  const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Cinephilia = () => {
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
      icon: "🎯",
      heading: "Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          The objective of <span className="font-bold gradient-text">CINEPHILIA</span> is to celebrate the art of cinema by testing participants' <span className="highlight bg-accent px-2 py-1 rounded-md">movie knowledge</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">observation skills</span>, memory, and quick thinking through fun and interactive rounds. From decoding BGMs and dialogues to identifying movies through visual clues, the event engages participants in an entertaining yet competitive atmosphere that fosters <span className="text-primary font-semibold">teamwork, creativity, and passion for films</span>.
        </p>
      ),
      key: "objective"
    },
    {
      icon: "📋",
      heading: "General Rules",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Each team can consist of 2 members 👥",
            "Winners will be selected according to their points 🏆", 
            "Mobiles are strictly prohibited 🚫",
            "Use of ChatGPT & other AI tools will lead to disqualification ⚠"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-accent font-bold">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🎵",
      heading: "Round 1: BGM MASTER",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">♪</span>
              <span>Guess the name of the song that the BGM belongs to 🎶</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">⏰</span>
              <span>BGM will be played for 10 seconds. Answer within the time limit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">📈</span>
              <span>Top teams will be shortlisted. Lowest scores will be eliminated</span>
            </li>
          </ul>
        </div>
      ),
      key: "round1"
    },
    {
      icon: "🔕",
      heading: "Round 2: MUTE-A-LOGUE",
      content: (
        <div className="p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border-l-4 border-blue-400">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">🎬</span>
              <span>Find the exact dialogue muted in the clip</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">⏰</span>
              <span>Time limit: 30 seconds</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">🏆</span>
              <span>Top teams will qualify for the final round</span>
            </li>
          </ul>
        </div>
      ),
      key: "round2"
    },
    {
      icon: "🎭",
      heading: "Round 3: CONCEPT PUDI PRIZE ADI",
      content: (
        <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl">🖼️</span>
              <span>Find the movie name by observing the shown images</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl">⏰</span>
              <span>Answer within the allotted time</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-green-400 font-bold text-xl">🏆</span>
              <span>The top team will be declared the Winner</span>
            </li>
          </ul>
        </div>
      ),
      key: "round3"
    },
    {
      icon: "📝",
      heading: "Final Remarks",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 font-bold">⚡</span>
            <span>Organizers reserve the right to modify or cancel the event</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 font-bold">✅</span>
            <span>Participation implies agreement with the rules and guidelines</span>
          </li>
        </ul>
      ),
      key: "remarks"
    },
    {
      icon: "📞",
      heading: "Contact Information",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-3 font-semibold text-accent">Staff Incharge:</div>
          <div className="space-y-1 mb-4">
            <div>Ms. R. Rachel Evelyn</div>
            <div>Mr. M. Mohamed Neina Hasan</div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Incharge:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>M. Hari Hara Sudhan: </span>
              <a href="tel:+919345746676" className="text-accent hover:underline">9345746676</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>T.S. Antony Sebastin: </span>
              <a href="tel:+918667654649" className="text-accent hover:underline">8667654649</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>K. Naveen Kumar</span>
            </div>
          </div>
        </div>
      ),
      key: "contact"
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
            alt="Cinephilia Event"
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
            🎬 CINEPHILIA
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Event Rules and Guidelines 🎉</p>
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

export default Cinephilia;
