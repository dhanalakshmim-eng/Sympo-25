import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import ThinktankBanner from "../../../assets/symposium/Sympo'25/Track2/THINK TANK.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Thinktank = () => {
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
      icon: "📝",
      heading: "Business Quiz – Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>Team Size: 2 Members per team</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "📜",
      heading: "General Instructions",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>Each team must consist of exactly 2 participants.</li>
          <li>Teams must report on time; late arrivals may not be permitted.</li>
          <li>Topics for all rounds will be revealed on the spot.</li>
          <li>Use of mobile phones, smart devices, or external assistance is strictly prohibited.</li>
          <li>Any form of cheating, malpractice, or code/answer sharing will lead to immediate disqualification.</li>
          <li>The judges’ and organizers’ decisions are final and binding.</li>
        </ul>
      ),
      key: "instructions"
    },
    {
      icon: "🛠",
      heading: "Event Rounds",
      content: (
        <div className="space-y-6">
          <div className="p-4 bg-gradient-to-r from-blue-900/30 to-purple-900/30 rounded-lg border-l-4 border-blue-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Prelims (Round 1)</h3>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li>Format: Screening round with a set of objective and short-answer questions on business concepts.</li>
              <li>Task: Teams must attempt all questions within the time limit.</li>
              <li>Evaluation: Based on accuracy and total score.</li>
              <li>Outcome: Top teams qualify for the next round.</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 2: Logo Identification</h3>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li>Format: Teams will be shown a series of logos, taglines, or brand elements.</li>
              <li>Task: Identify the brand/company correctly.</li>
              <li>Evaluation: Accuracy and speed.</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border-l-4 border-yellow-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 3: Rapid Fire</h3>
            <ul className="list-disc ml-6 text-base md:text-lg">
              <li>Format: Quick-fire questioning.</li>
              <li>Task: Answer as many as possible within the given time.</li>
              <li>Evaluation: Spontaneity, correctness, and teamwork.</li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "🏆",
      heading: "Evaluation Criteria",
      content: (
        <ul className="list-disc ml-6 text-base md:text-lg">
          <li>Spontaneity & Presence of Mind</li>
          <li>Teamwork & Coordination</li>
          <li>Effectiveness of Responses</li>
        </ul>
      ),
      key: "criteria"
    },
    {
      icon: "🥇",
      heading: "Final Results",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          Winners will be declared based on their overall performance across all rounds.<br />
          Cash prizes and certificates await the top-performing teams.
        </div>
      ),
      key: "results"
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
            src={ThinktankBanner}
            alt="Thinktank Business Quiz Event"
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
            Thinktank
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

export default Thinktank;
