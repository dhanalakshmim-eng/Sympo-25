import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/TriSpark.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const TriSpark = () => {
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
          Welcome to <span className="font-bold gradient-text">TRISPARK</span> — a three-stage coding and logic event that challenges your <span className="highlight bg-accent px-2 py-1 rounded-md">binary decoding</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">visualization</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">code reconstruction</span> skills. Participants will work in teams to decode binary puzzles, reproduce visual outputs from broken code, and reconstruct scrambled code under <span className="text-primary font-semibold">strict time limits</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objectives",
      content: (
        <ul className="list-none space-y-3 text-base md:text-lg">
          {[
            "Assess participants' logical thinking and problem-solving skills",
            "Enhance technical skills in Python and visualization libraries",
            "Develop efficiency in debugging and code reconstruction"
          ].map((objective, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-accent font-bold text-xl">▶</span>
              <span><strong className="text-primary">{objective.split(' ')[0]}</strong> {objective.slice(objective.indexOf(' ') + 1)}</span>
            </li>
          ))}
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🔢 Round 1: Decode the Puzzle</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p><strong className="text-yellow-300">Prerequisite:</strong> Basic knowledge of binary numbers and ASCII conversion</p>
              <p><strong className="text-yellow-300">Objective:</strong> Test participants' logical thinking and technical skills by decoding binary codes into meaningful words</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Participants will be given binary codes representing letters or words — only correctly decoded answers are valid</li>
                <li>Time limit: <strong className="text-red-400">20 minutes</strong> (no extra time provided)</li>
                <li>In case of a tie, a quick bonus binary puzzle will decide the winner</li>
                <li>Judges' decisions are final</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">📊 Round 2: Depict the Code</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p><strong className="text-yellow-300">Prerequisite:</strong> Basic knowledge of Python and visualization libraries (Matplotlib, Pandas, NumPy)</p>
              <p><strong className="text-yellow-300">Objective:</strong> Enhance debugging skills, logical thinking, and coding confidence through hands-on practice</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Participants must generate the given visual output (graph/chart) from an incomplete code containing blanks and errors</li>
                <li>Time limit: <strong className="text-red-400">20 minutes</strong></li>
                <li>Judges' decisions are final</li>
              </ul>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">⚙️ Round 3: Design the Code</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p><strong className="text-yellow-300">Prerequisite:</strong> Basic knowledge of Python (syntax, logic, debugging)</p>
              <p><strong className="text-yellow-300">Objective:</strong> Test logical thinking and coding efficiency by reconstructing scrambled codes</p>
              <ul className="list-disc ml-6 mt-2 space-y-1">
                <li>Participants will receive scrambled codes (split into 4 parts and mixed). Only correctly assembled and executable codes are valid</li>
                <li>Time limit: <strong className="text-red-400">20 minutes</strong> (no extra time provided)</li>
                <li>In case of a tie, a quick coding quiz will decide the winner</li>
                <li>Judges' decisions are final</li>
              </ul>
            </div>
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
            "Team size: Maximum of 2 members per team",
            "Participants must adhere strictly to the time limits",
            "Any violation of event guidelines will lead to disqualification",
            "Judges' decisions are final and binding"
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
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">🎯</span> 
            <span className="ml-2">Accuracy of answers</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">⚡</span> 
            <span className="ml-2">Efficiency in solving problems</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🧠</span> 
            <span className="ml-2">Logical approach and problem-solving skills</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">💻</span> 
            <span className="ml-2">Code quality in debugging and reconstruction</span>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "For More Information",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="text-center p-4 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-bold text-yellow-400">📢 To be announced</span>
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
            alt="TRISPARK Event"
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
            ✨ TRISPARK
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Decode, Depict and Develop</p>
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

export default TriSpark;
