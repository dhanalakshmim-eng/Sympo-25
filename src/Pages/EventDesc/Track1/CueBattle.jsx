import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import CueBattleBanner from "../../../assets/symposium/Sympo'25/Track1/CUEBATTLE.png";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const CueBattle = () => {
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
      icon: "🎲",
      heading: "Event Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Cue Battle is a fun and interactive guessing game designed to test communication, creativity, and teamwork — without using words! Teams will face two exciting rounds where they rely solely on drawings and lip-reading skills to guess the correct words or phrases.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "🎯",
      heading: "Event Objective",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          To encourage teamwork, sharpen non-verbal communication, and create a lively, engaging experience where participants rely on creativity and intuition instead of direct speech.
        </p>
      ),
      key: "objective"
    },
    {
      icon: "🛠",
      heading: "Round 1: Back Sketch Relay",
      content: (
        <>
          <h3 className="font-semibold text-lg mb-2">Team Formation:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg mb-3">
            <li>Each team consists of 2 members.</li>
            <li>Members sit one behind the other in a straight line.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-2">Game Flow:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg mb-3">
            <li>The back member is shown a technical word by the organizer.</li>
            <li>They must draw a simple sketch of the word on their partner’s back using one finger.</li>
            <li>The front member must guess the word and say it out loud.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-2">Rules:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg">
            <li>No alphabets, numbers, symbols, or talking allowed — only drawings.</li>
            <li>Time limit: 30–45 seconds per word.</li>
            <li>Teams that guess correctly qualify for the next round.</li>
          </ul>
        </>
      ),
      key: "round1"
    },
    {
      icon: "🛠",
      heading: "Round 2: Silent Signals (Earphone Round)",
      content: (
        <>
          <h3 className="font-semibold text-lg mb-2">Setup:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg mb-3">
            <li>One team member wears earphones with loud music so they cannot hear.</li>
            <li>The other member is shown a word or sentence by the organizer.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-2">Game Flow:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg mb-3">
            <li>The member without earphones silently mouths the word/sentence (lip movements only, no sound).</li>
            <li>The earphone-wearing member must guess the word/sentence within the given time.</li>
          </ul>
          <h3 className="font-semibold text-lg mb-2">Rules:</h3>
          <ul className="list-disc ml-6 text-base md:text-lg">
            <li>No sounds, gestures, or signals allowed — only lip reading.</li>
            <li>Time limit: 1 minute per attempt.</li>
            <li>Each correct guess earns points.</li>
          </ul>
        </>
      ),
      key: "round2"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li>Teams must consist of exactly 2 members.</li>
          <li>Communication is restricted to the method specified in each round.</li>
          <li>Any violation (talking, using gestures, symbols, or cheating) may lead to disqualification.</li>
          <li>The organizer’s decision will be final.</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <ul className="list-disc ml-6 text-base md:text-lg">
          <li>Teams that clear Round 1 qualify for Round 2.</li>
          <li>In Round 2, points are awarded for each correct guess within the time limit.</li>
          <li>The team with the highest total points at the end of Round 2 wins.</li>
          <li>In case of a tie, a sudden-death tie-breaker will be conducted with a new word/sentence.</li>
        </ul>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contact Details",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <p><strong>Student coordinators:</strong></p>
          <p>Ms. Giona Jasley : 7358213508</p>
          <p>Ms. Naveena M : 9345475179</p>
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
            src={CueBattleBanner}
            alt="Cue Battle Event"
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
            Cue Battle
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

export default CueBattle;
