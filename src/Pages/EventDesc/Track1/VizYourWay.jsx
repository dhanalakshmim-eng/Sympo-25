import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/VIZYOURWAY.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const VizYourWay = () => {
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
          <span className="font-bold gradient-text">Viz Your Way</span> is an engaging two-round competition that challenges participants to showcase their knowledge and creativity in <span className="highlight bg-accent px-2 py-1 rounded-md">data analysis</span> and <span className="highlight bg-accent px-2 py-1 rounded-md">visualization</span>. From a rapid-fire quiz to insightful data graphics, this competition highlights <span className="text-primary font-semibold">speed, accuracy, and storytelling with data</span>.
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
            "Test participants' data analysis and visualization skills",
            "Encourage creativity in presenting insights visually",
            "Evaluate quick thinking, accuracy, and clarity in communication"
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🏃‍♂️ Round 1: Quiz Quest</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Participants answer a series of rapid-fire questions under a strict time limit</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>Points are awarded for correct answers</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-400">▶</span>
                <span>The top 15 teams qualify for Round 2</span>
              </li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">📊 Round 2: Data Visualization</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>A dataset will be provided at the start of the round</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Teams must create insightful visualizations using tools like Python, Excel, Tableau, or Power BI</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>All visuals must be presented on a single page with a short description</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Charts and graphs must be clear, understandable, and informative</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-red-400">⏰</span>
                <span>Time limit: <strong className="text-red-400">20 minutes</strong></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-400">▶</span>
                <span>Final decision will be made by the judges</span>
              </li>
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
          {[
            "Each team must consist of 2 members",
            "Gadget usage is strictly prohibited",
            "Each round is strictly time-bound",
            "Participants must follow the event guidelines",
            "Judges' decisions will be final and binding"
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
            <span className="ml-2">Speed + Accuracy of answers</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🥈 Round 2:</span> 
            <span className="ml-2">Creativity, clarity, and effectiveness of data visualizations</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🥉 Overall:</span> 
            <span className="ml-2">Presentation and communication of insights</span>
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
            alt="Viz A Way Event"
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
            ✨ VIZ A WAY
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Data Visualization Competition</p>
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

export default VizYourWay;
