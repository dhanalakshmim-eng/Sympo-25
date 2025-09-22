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
          TRISPARK is an intercollegiate coding event conducted under Technovanza 2025–26. The event focuses on enhancing technical knowledge, logical thinking, and problem-solving skills through coding-based challenges.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          The main objective of TRISPARK is to test and improve participants’ logical reasoning, debugging proficiency, and coding efficiency while encouraging teamwork and competitive spirit.
        </p>
      ),
      key: "objectives"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-4">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🏃‍♂️ Round 1 – Decode the Puzzle</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li>Prerequisite: Knowledge of binary numbers & ASCII conversion.</li>
              <li>Task: Decode binary codes into meaningful words within 20 minutes.</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🔍 Round 2 – Depict the Code</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li>Prerequisite: Knowledge of Python and visualization libraries.</li>
              <li>Task: Debug incomplete code with blanks and errors to reproduce a given graph/chart.</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border-l-4 border-yellow-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">💡 Round 3 – Design the Code&</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li>Prerequisite: Knowledge of Python (syntax, logic, debugging).</li>
              <li>Task: Reconstruct scrambled codes (split into 4 mixed parts) into a valid executable program.</li>
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
          <li>• Each team can have a maximum of two participants.</li>
          <li>• Only valid, executable solutions will be considered.</li>
          <li>• Each round has a 20-minute time limit.</li>
          <li>• Tie-breakers will be used in case of equal scores.</li>
          <li>• Judges’ decisions are final.</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>• Accuracy of solutions</li>
          <li>• Logical approach</li>
          <li>• Debugging skills</li>
          <li>• Time management and efficiency</li>
        </ul>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <p>Student Coordinators:</p>
          <p>Bhuvaneshkumar T (+91 8778858424)</p>
          <p>Pragadesh R (+91 63792 53307)</p>
          <br />
          <p>Faculty Coordinator:</p>
          <p>Mrs. E. Brindha (+91 97919 72394)</p>
        </div>
      ),
      key: "contact"
    },

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
            TRISPARK
          </h1>
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
