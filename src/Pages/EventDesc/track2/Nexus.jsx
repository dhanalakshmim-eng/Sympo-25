import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import NexusImg from "../../../assets/symposium/Sympo'25/Track2/Nexus.jpeg";

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
      icon: "📖",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          A paper presentation is a platform where students or researchers present their ideas, research findings, or innovative concepts in front of an audience. It helps in enhancing knowledge sharing, improving communication skills, and encouraging critical thinking. Through a well-structured presentation, participants can highlight the importance of their chosen topic, explain its practical applications, and discuss future developments.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Objective",
      content: (
        <ul className="list-disc ml-6 space-y-1 text-base md:text-lg">
          <li>To provide a clear and concise understanding of the chosen topic.</li>
          <li>To share innovative ideas, research outcomes, or problem-solving approaches.</li>
          <li>To develop presentation and communication skills.</li>
          <li>To encourage interaction, discussion, and knowledge exchange among peers.</li>
          <li>To inspire future research and practical implementation in the relevant field.</li>
        </ul>
      ),
      key: "objective"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>• Maximum 2 Member in Team</li>
          <li>• Total 10 minutes for each team</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <table className="w-full text-left text-base md:text-lg text-gray-100 border-collapse border border-gray-700">
          <thead>
            <tr className="border-b border-gray-700">
              <th className="px-3 py-2">Criteria</th>
              <th className="px-3 py-2">Mark</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2">Technical Content</td>
              <td className="px-3 py-2">30</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2">Uniqueness/Innovativeness</td>
              <td className="px-3 py-2">30</td>
            </tr>
            <tr className="border-b border-gray-700">
              <td className="px-3 py-2">Presentation Content/Skill</td>
              <td className="px-3 py-2">30</td>
            </tr>
            <tr>
              <td className="px-3 py-2">Question and Answer</td>
              <td className="px-3 py-2">10</td>
            </tr>
          </tbody>
        </table>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Detail",
      content: (
        <div className="text-base md:text-lg leading-relaxed space-y-2 p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div>
            <strong>STAFF CO-ORDINATORS</strong><br />
            Ms. S. SIVAJOTHI KAVITHA - AP/EEE<br />
            Ms. S. PURNIMA -AP/BME<br />
            Ms. S. RUDHRA - AP/EEE<br />
            Ms. D. PRISCILLA SHARLET ASHA -AP/BME<br />
            Dr. G. MERLIN SHEEBA PROF. /ECE<br />
            Ms. S. BHAVANISANKARI - ASSO. PROF/ECE<br />
          </div>
          <div>
            <strong>STUDENT CO-ORDINATORS</strong><br />
            HARINI S - IV EEE (8148837923)<br />
            PRAVIN M - III EEE<br />
            MANOJ A - III EEE<br />
            VISHWA DILIP M R - IV BME (8778022625)<br />
            HARINI R – IV BME<br />
            DIVYA R - IV ECE (9360017650)<br />
            KAVITHA K - IV ECE
          </div>
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
            src={NexusImg}
            alt="Paper Presentation Event"
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
            Paper Presentation
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

export default Nexus;
