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
          Viz Your Way is an engaging two-round competition that tests participants' knowledge and creativity in data analysis and visualization:<br /><br />
          <strong>Round 1: Quiz Quest</strong> - A rapid-fire quiz session where teams answer a series of questions to earn points. The top 15 teams qualify for the next round.<br />
          <strong>Round 2: Data Visualization</strong> - Teams analyze a dataset and create visually appealing and informative graphics to present their insights effectively.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          The main objective of this competition is to foster participants' data-driven creativity and enhance their analytical skills. Our goal is to encourage the extraction of useful insights from data and their transformation into effective visual presentations.
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🏃‍♂️ Round 1: Quiz Quest</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li>● Participants will be presented with a series of questions.</li>
              <li>● A strict time limit will be enforced for answering.</li>
              <li>● Points are awarded for correct answers.</li>
              <li>● The top 15 teams will qualify for Round 2.</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">📊 Round 2: Data Visualization</h3>
            <ul className="list-none space-y-2 text-base md:text-lg">
              <li>● A dataset will be provided at the start of the round. Participants must create visuals analyzing the dataset using tools like Python, Excel, Tableau, Power BI, etc.</li>
              <li>● All visualizations must be presented on a single page with a small description or summary.</li>
              <li>● Visuals must be clear, understandable, and informative.</li>
              <li>● A total of 20 minutes will be allotted for this round.</li>
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
          <li>● Each team should comprise 2 members.</li>
          <li>● Gadget usage is strictly prohibited.</li>
          <li>● Each round is strictly time-bound.</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Teams will be judged based on the clarity, understandability, and informativeness of their visualizations. The effective use of a variety of charts and graphs to communicate findings is encouraged. The decision made by the judges will be final.
        </p>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <p>For more information about the competition or for any inquiries, please contact the event coordinators.</p>
          <div className="mt-4">
            <p><strong>LISHIKA SHARON</strong> - 9176126745</p>
            <p><strong>MADHESH RS</strong> - 8667719356</p>
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
            src={EventImage}
            alt="Viz Your Way Event"
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
            Viz Your Way: Data Visualization Competition
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

export default VizYourWay;
