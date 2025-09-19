import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import OratioBanner from "../../../assets/symposium/Sympo'25/Track1/Oratio.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Oratio = () => {
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
      icon: "📖",
      heading: "About ORATIO",
      content: (
        <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/30">
          <p className="text-base md:text-lg leading-relaxed mb-3">
            <span className="font-bold text-primary">TECHNOVANZA 2025–26</span><br />
            <em>An Inter Collegiate National Level Technical Symposium</em>
          </p>
          <p className="text-base md:text-lg leading-relaxed">
            ORATIO is where <span className="font-bold gradient-text">ideas meet expression</span>. It's a platform to showcase <span className="highlight bg-accent px-2 py-1 rounded-md">research</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">creativity</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">innovation</span> with impact. Beyond facts, it's about clarity, confidence, and originality. Each presentation aims to <span className="text-primary font-semibold">inspire, engage, and leave a lasting impression</span>.
          </p>
        </div>
      ),
      key: "about"
    },
    {
      icon: "📝",
      heading: "Abstract Format",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">📄 Title:</span> 
            <span className="ml-2">Times New Roman, Size 16, Bold</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">👥 Author:</span> 
            <span className="ml-2">Max 2 members, Times New Roman, Size 10</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🏫 Affiliation:</span> 
            <span className="ml-2">Times New Roman, Size 8</span>
          </div>
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">📧 Email:</span> 
            <span className="ml-2">Times New Roman, Size 8</span>
          </div>
          <div className="p-3 bg-pink-900/20 rounded-lg border border-pink-500/30">
            <span className="font-semibold text-pink-400">📝 Abstract:</span> 
            <span className="ml-2">Times New Roman, Size 10, Bold</span>
          </div>
          <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
            <span className="font-semibold text-red-400">🔢 Word Limit:</span> 
            <span className="ml-2">Max 200 words (must clearly state problem statement)</span>
          </div>
        </div>
      ),
      key: "format"
    },
    {
      icon: "🎯",
      heading: "Presentation Format",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">📊 Format:</span> 
            <span className="ml-2">Presentation should be only as PPT slides</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">📑 Slides:</span> 
            <span className="ml-2">Maximum number of slides: 6</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">⏰ Duration:</span> 
            <span className="ml-2">Presentation Duration: 8–10 minutes</span>
          </div>
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">❓ Q&A:</span> 
            <span className="ml-2">Q&A Session: 2–3 minutes</span>
          </div>
        </div>
      ),
      key: "presentation"
    },
    {
      icon: "📤",
      heading: "Submission & Participation",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Only one team member should submit the abstract",
            "The topic must fall within the specified domain",
            "ID card is mandatory for all participants",
            "Proper dress code must be followed"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-accent font-bold">✦</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "submission"
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
            src={OratioBanner}
            alt="ORATIO Paper Presentation"
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
            ✨ ORATIO
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Paper Presentation</p>
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

export default Oratio;
