import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import PotpurriBanner from "../../../assets/symposium/Sympo'25/Track2/POTPURRI.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Potpurri = () => {
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
      icon: "🎉",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Step into a world of laughter, energy, and excitement! Get ready to test your creativity, quick thinking, and teamwork through a series of super fun and engaging games.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Objectives",
      content: (
        <ul className="list-disc ml-6 space-y-1 text-base md:text-lg">
          <li>Encourage Teamwork & Collaboration – Build stronger bonds among students through group participation and team-based challenges.</li>
          <li>Enhance Creativity & Imagination – Motivate students to think outside the box while expressing ideas in unique and fun ways.</li>
          <li>Develop Quick Thinking & Problem-Solving Skills – Sharpen analytical and decision-making abilities through fast-paced games.</li>
          <li>Promote Healthy Competition – Foster a spirit of sportsmanship and fair play in a fun and engaging environment.</li>
          <li>Relieve Stress & Boost Energy – Provide students with a refreshing break from academics while energizing them with laughter and fun.</li>
          <li>Improve Communication Skills – Strengthen verbal and non-verbal communication through interactive games.</li>
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 1 – Connections</h3>
            <p className="text-base md:text-lg">
              “Connections” is a fun and brain-teasing event where participants have to identify the link between pictures, words, symbols, or clues displayed on the screen. Each puzzle forms a hidden connection – it could be a movie, personality, proverb, object, or even a trending concept.<br />
              This event tests your creativity, observation, general knowledge, and presence of mind. It’s not just about knowing the answer but about thinking outside the box and spotting the clever link that ties everything together.
            </p>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 2 – Dumbcharads</h3>
            <p className="text-base md:text-lg">
              Get ready to laugh your hearts out! In Dumb Charades, one teammate acts out a movie or phrase without uttering a single word, while the rest of the team tries to crack the code. It’s all about quick guesses, funny actions, and loads of entertainment!
            </p>
          </div>
          <div className="p-4 bg-gradient-to-r from-yellow-900/30 to-orange-900/30 rounded-lg border-l-4 border-yellow-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">Round 3 – Surprise round</h3>
            <p className="text-base md:text-lg">
              The event will be disclosed on the spot
            </p>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "📜",
      heading: "Rules of the Event",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>1. It is a team event which consists of 2 members</li>
          <li>2. 3 rounds will be held</li>
          <li>3. Participants are requested to assemble 30 minutes prior the event starts</li>
          <li>4. Any fraudulent or misbehaving activities occurs, the team will be disqualified</li>
          <li>5. Judge’s decision will be final</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <p>BHAVANA N ( II MBA) - 8428317950</p>
          <p>JOEL ( II MBA) - 8610733081</p>
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
            src={PotpurriBanner}
            alt="Fun Games Event"
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
            Fun Games
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

export default Potpurri;
