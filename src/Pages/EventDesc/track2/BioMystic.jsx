import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import BioMysticBanner from "../../../assets/symposium/Sympo'25/Track2/BioMystic.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const BioMystic = () => {
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
      icon: "🧬",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          In this event, participants will first unscramble jumbled letters to reveal key biomedical phrases and then tackle a rapid-fire round of tricky riddles. Each round is time-bound pushing you to think fast and stay sharp. Accuracy, presence of mind, and teamwork will decide who races ahead and secure the top spot.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          To inspire curiosity and sharpen scientific thinking by engaging participants in interactive bio-related challenges that test their knowledge reasoning and competitive way.
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 1: Unscramble the letters, unlock the phrases</h3>
            <p className="text-base md:text-lg">Description: Decode jumbled letters to reveal bio-phrases.</p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 2: Riddle rush</h3>
            <p className="text-base md:text-lg">Description: Solve tricky bio-riddles with speed and smarts.</p>
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
          <li>1. Two members per team.</li>
          <li>2. Usage of mobile phones are strictly prohibited.</li>
          <li>3. Maintain decorum throughout the event.</li>
          <li>4. Each round is time based.</li>
          <li>5. Late submission will be disqualified.</li>
          <li>6. In case of tie between teams, tie-breaker round will be conducted.</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Points are awarded based on accuracy and speed. Final decision are made by judges.
        </p>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <p><strong>Event co-ordinator</strong></p>
          <p>1. Srivarthni - 9940526581</p>
          <p>2. Shruthi - 9363379962</p>
          <p>3. Ramya - 8015612515</p>
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
            src={BioMysticBanner}
            alt="Bio Challenge Event"
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
            Bio Challenge
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

export default BioMystic;
