import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/escaperoom.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const EscapeRoom = () => {
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
          <span className="font-bold gradient-text">Escape Room 2.0</span> challenges participants' <span className="highlight bg-accent px-2 py-1 rounded-md">technical knowledge</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">decoding skills</span>, logical reasoning, and problem-solving abilities through a two-stage competition. The event tests quick thinking with technical MCQs and analytical ability in an immersive escape room challenge, where participants must decode puzzles, analyze clues, and apply technical knowledge under pressure. This fosters <span className="text-primary font-semibold">creativity, critical thinking, and decision-making</span> in a fun yet competitive environment.
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
            "Each participant must register individually and participate solo 👤",
            "Be respectful and courteous towards other participants, judges, and staff 🙏", 
            "The decision of the judges will be final and binding 🏆"
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
      icon: "🤔",
      heading: "Round 1: Technical MCQ Round",
      content: (
        <div className="p-4 bg-gradient-to-r from-blue-900/30 to-cyan-900/30 rounded-lg border-l-4 border-blue-400">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">📚</span>
              <span>Format: Multiple-choice questions on technical topics</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-blue-400 font-bold text-xl">📈</span>
              <span>Top participants will be shortlisted based on scores</span>
            </li>
          </ul>
        </div>
      ),
      key: "round1"
    },
    {
      icon: "🔓",
      heading: "Round 2: Escape Room Challenge",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">🕰</span>
              <span><strong>Objective:</strong> Solve puzzles and challenges within the escape room to escape in the given time limit</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-purple-400 font-bold text-xl">🏆</span>
              <span><strong>Winning Criteria:</strong> The participant who escapes fastest or solves the most puzzles wins</span>
            </li>
          </ul>
        </div>
      ),
      key: "round2"
    },
    {
      icon: "🚨",
      heading: "Important Guidelines",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "No use of AI or automated tools 🤖",
            "No collaboration – participants must work individually 🙅", 
            "No damage to the escape room or its contents 🚫"
          ].map((rule, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="text-red-400 font-bold">⚠</span>
              <span>{rule}</span>
            </li>
          ))}
        </ul>
      ),
      key: "guidelines"
    },
    {
      icon: "⚠",
      heading: "Consequences of Misconduct",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-red-900/20 rounded-lg border border-red-500/30">
            <span className="font-semibold text-red-400">🚫</span> 
            <span className="ml-2">Disqualification for misconduct</span>
          </div>
          <div className="p-3 bg-orange-900/20 rounded-lg border border-orange-500/30">
            <span className="font-semibold text-orange-400">⏱</span> 
            <span className="ml-2">Penalties may include time penalties or other consequences</span>
          </div>
        </div>
      ),
      key: "misconduct"
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
            <div>Ms. S. Preethi Parameshwari</div>
            <div>Ms. S. Sandhiyaa</div>
          </div>
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Mr. Subadevan C - III CS: </span>
              <a href="tel:+91863760748" className="text-accent hover:underline">863760748</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Ms. Nivethithaa S - II CS: </span>
              <a href="tel:+918925651912" className="text-accent hover:underline">8925651912</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span>Mr. Rohan S - II CS: </span>
              <a href="tel:+918220849281" className="text-accent hover:underline">8220849281</a>
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
            alt="Escape Room 2.0 Event"
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
            ✨ Escape Room 2.0
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

export default EscapeRoom;
