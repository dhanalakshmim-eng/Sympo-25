import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track2/Nexus.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Nexus = () => {
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
        <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border border-blue-500/30">
          <p className="text-base md:text-lg leading-relaxed">
            Showcase <span className="font-bold text-primary">innovative ideas and research</span> through impactful paper presentations, fostering <span className="highlight bg-accent px-2 py-1 rounded-md">creativity</span> and <span className="highlight bg-accent px-2 py-1 rounded-md">knowledge sharing</span> among students.
          </p>
        </div>
      ),
      key: "objective"
    },
    {
      icon: "📌",
      heading: "Themes",
      content: (
        <div className="grid grid-cols-1 gap-3">
          {[
            "AI and Machine Learning in Medical Diagnostics",
            "Integrated Medical Data Platforms for Improved Diagnostics",
            "Big Data Analytics in Clinical Decision-Making",
            "IoT for Diagnostics and Rehabilitation Medicine",
            "Interface System for Cognitive Support",
            "Assistive Technologies and Tools",
            "Communication and Mobility Aids",
            "Telemedicine Technologies"
          ].map((theme, index) => (
            <div key={index} className="p-3 bg-gradient-to-r from-green-900/20 to-teal-900/20 rounded-lg border-l-4 border-green-400">
              <span className="text-green-400 font-bold">▶</span>
              <span className="ml-2 text-base md:text-lg">{theme}</span>
            </div>
          ))}
        </div>
      ),
      key: "themes"
    },
    {
      icon: "📍",
      heading: "Event Details",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🏢 Venue:</span> 
            <span className="ml-2">BME Department, 3rd Floor, Main Block</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">📅 Date:</span> 
            <span className="ml-2">10th October</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">⏰ Time:</span> 
            <span className="ml-2">10:30 AM onwards (15 minutes for each team)</span>
          </div>
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">👥 Team Size:</span> 
            <span className="ml-2">Maximum 2 Members</span>
          </div>
        </div>
      ),
      key: "details"
    },
    {
      icon: "📞",
      heading: "Contact",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-green-400 rounded-full"></span>
            <span className="font-semibold">Vishwa Dilip M.R: </span>
            <a href="tel:+918778022625" className="text-accent hover:underline">+91 8778022625</a>
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
            alt="Nexus Paper Presentation"
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
            ✨ NEXUS
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Paper Presentation Event</p>
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

export default Nexus;
