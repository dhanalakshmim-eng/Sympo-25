import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import { FaBrain, FaCogs, FaRobot, FaGavel, FaTrophy, FaInfoCircle } from "react-icons/fa";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/SynaptiQ.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const SynaptiQ = () => {
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
      icon: <FaBrain size={30} className="text-accent" />,
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          <span className="font-bold gradient-text">SynaptiQ</span> is a multi-round technical event testing participants' logical thinking, debugging, coding, and creativity using Generative AI. Expect a fusion of <span className="highlight bg-accent px-2 py-1 rounded-md">aptitude</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">programming</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">prompt engineering</span> tasks designed to push your limits and showcase your <span className="text-primary font-semibold">innovative edge</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: <FaCogs size={28} className="text-accent" />,
      heading: "Event Objectives",
      content: (
        <ul className="list-none space-y-3 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span><strong className="text-primary">Evaluate</strong> analytical and debugging skills through practical code challenges</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span><strong className="text-primary">Enhance</strong> algorithmic problem-solving ability in real scenarios</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span><strong className="text-primary">Encourage</strong> creativity and precision via AI prompt engineering</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-accent font-bold text-xl">▶</span>
            <span><strong className="text-primary">Provide</strong> a platform to compete, collaborate, and learn</span>
          </li>
        </ul>
      ),
      key: "objectives"
    },
    {
      icon: <FaRobot size={28} className="text-accent" />,
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-accent">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🚀 Round 1: Quickbit (Syntax & Sense)</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Multiple-choice & short-answer challenges</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Debugging & aptitude questions</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Top performers advance</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">💻 Round 2: Decypher (Coding & Algorithms)</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Multi-level coding challenge (Basic to Advanced)</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Progressive difficulty & real problem-solving</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Advance to finals by success</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🤖 Round 3: Gen AI Verse (Prompt Engineering)</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>AI-driven creative image-recreation using accurate prompts</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-400">▶</span>
                <span>Judged on similarity & precision</span>
              </li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: <FaGavel size={28} className="text-accent" />,
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Team of max 2 (solo allowed)",
            "Personal laptops welcomed",
            "Mobiles prohibited during the event",
            "Time-bound for every round",
            "No malpractice or plagiarism—immediate disqualification",
            "Judges' decision is final"
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
      icon: <FaTrophy size={28} className="text-accent" />,
      heading: "Judging Criteria",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">🥇 Round 1:</span> 
            <span className="ml-2">Accuracy & Speed</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🥈 Round 2:</span> 
            <span className="ml-2">Algorithm correctness & solution efficiency</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🥉 Round 3:</span> 
            <span className="ml-2">Prompt quality & image similarity</span>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: <FaInfoCircle size={28} className="text-accent" />,
      heading: "Contact Info",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Ms. Gopika G:</span> 
              <a href="tel:+916385636336" className="text-accent hover:underline">+91 6385636336</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Mr. Hemachandiran R:</span> 
              <a href="tel:+919840963827" className="text-accent hover:underline">+91 9840963827</a>
            </div>
          </div>
        </div>
      ),
      key: "contacts"
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
            alt="SynaptiQ Event"
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
            ✨ SynaptiQ
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Multi-Round Technical Event</p>
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
              {card.icon}
              <h2 className="text-2xl md:text-3xl font-bold gradient-text">{card.heading}</h2>
            </div>
            <div className="text-gray-100">{card.content}</div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SynaptiQ;
