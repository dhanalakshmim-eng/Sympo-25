import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/Site2sync.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Site2Sync = () => {
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
          <span className="font-bold gradient-text">SITE2SYNC</span> is a technical web development event where participants will <span className="highlight bg-accent px-2 py-1 rounded-md">debug</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">design</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">build</span> a mini functional website under time-bound conditions. The event is designed to evaluate participants' <span className="text-primary font-semibold">problem-solving skills, creativity, and coding ability</span>.
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
            "To build a mini functional website based on the given theme",
            "Test participants' debugging and web development skills",
            "Encourage creativity, originality, and structured coding practices",
            "Provide a platform to compete, collaborate, and learn"
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
          <div className="p-4 bg-gradient-to-r from-red-900/30 to-orange-900/30 rounded-lg border-l-4 border-red-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🐛 Round 1: Debugging the Web</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p><strong>Setup:</strong> Each team will be given HTML, CSS, and JavaScript files containing hidden flaws with a reference output</p>
              <p><strong>Task:</strong> Identify and fix three hidden issues to match the reference design</p>
              <p><strong>Time Limit:</strong> 30 minutes (including evaluation)</p>
              <p><strong>Evaluation:</strong> Accuracy in matching the reference design</p>
              <p><strong>Outcome:</strong> Top-performing teams will qualify for Round 2</p>
            </div>
          </div>
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🏗️ Round 2: Buildathon – Vibe Coding</h3>
            <div className="space-y-2 text-base md:text-lg">
              <p><strong>Task:</strong> Build a mini functional website (2–3 pages) based on a theme revealed at the start</p>
              <p><strong>Allowed Tools:</strong> AI platforms such as ChatGPT, Lovable AI, Replit AI, or similar tools</p>
              <p><strong>Time Limit:</strong> 1.5 to 2 hours (strict). Late submissions will not be accepted</p>
              <div>
                <strong>Evaluation Criteria:</strong>
                <ul className="list-disc ml-6 mt-1">
                  <li>Creativity & Originality</li>
                  <li>Functionality & User Experience</li>
                  <li>Responsiveness (Mobile/Desktop Compatibility)</li>
                  <li>Code Quality & Structure</li>
                </ul>
              </div>
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
            "A team can have maximum 2 members (single participation allowed)",
            "Personal devices such as laptops, USB drives, or any storage devices are strictly prohibited",
            "Systems will be provided",
            "Internet access will be disabled unless explicitly allowed by the event coordinators",
            "All code must be written during the event. Pre-written code is not allowed",
            "Any form of cheating, code sharing, or use of unauthorized tools will result in immediate disqualification",
            "Event is time-bound in all rounds",
            "Judges' decision will be final and binding"
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
            <span className="font-semibold text-yellow-400">🥇 Round 1:</span> 
            <span className="ml-2">Accuracy in debugging and matching the reference design</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🥈 Round 2:</span> 
            <span className="ml-2">Creativity, functionality, responsiveness, and code quality</span>
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
            alt="SITE2SYNC Event"
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
            ✨ SITE2SYNC
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Technical Web Development Event</p>
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

export default Site2Sync;
