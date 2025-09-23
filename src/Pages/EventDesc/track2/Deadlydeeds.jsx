


import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import NevermoreBanner from "../../../assets/symposium/Sympo'25/Track2/dEADLYDEEDS.jpeg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Deadlydeeds = () => {
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
      icon: "🕵️",
      heading: "The Nevermore Mystery",
      content: (
        <div className="text-base md:text-lg leading-relaxed">
          On the night of October 10th, the shadows will gather at JCE College, where a tale of deceit, secrets, and dark puzzles awaits.<br /><br />
          A crime has been committed—one so twisted, even the walls whisper in silence.<br /><br />
          The suspects? Lurking among you.<br />
          The clues? Buried in riddles, sealed within games, waiting for the brave (or foolish) to uncover them.<br /><br />
          The clock will strike, and you shall have only 10 minutes to solve all mysteries, expose the culprit, and escape the clutches of Nevermore. Fail… and the truth will remain hidden forever.<br /><br />
          Dare to step into the darkness, detectives—the Nevermore Mystery begins at JCE College, October 10.
        </div>
      ),
      key: "description"
    },
    {
      icon: "🎲",
      heading: "Event Flow – The Wednesday Way",
      content: (
        <ol className="list-decimal ml-6 text-base md:text-lg space-y-2">
          <li>
            Opening Ritual – A gloomy briefing welcomes detectives to the halls of Nevermore, where suspects lurk and secrets rot.
          </li>
          <li>
            The Hunt Begins – Teams dive into 10 mini-investigations (Find the Path, Jumbled Words, Odd One Out, etc.), each peeling back a layer of the mystery.
          </li>
          <li>
            Gathering Evidence – Every solved puzzle yields sinister tokens: fingerprints, blood-stained notes, or suspicious weapons.
          </li>
          <li>
            Interrogation & Theories – Detectives wield their evidence to question suspects and weave chilling deductions.
          </li>
          <li>
            The Last Shadows – Twists surface, revealing hidden motives and the culprit’s darkest fingerprint.
          </li>
          <li>
            Accusation & Theories – Teams deliver their final verdict: the killer, the weapon, and the motive.
          </li>
          <li>
            The Grand Unveiling – The host unmasks the true culprit, exposing how every sinister clue was woven together in the Nevermore mystery.
          </li>
        </ol>
      ),
      key: "flow"
    },
    {
      icon: "📜",
      heading: "Rules & Regulations",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li><strong>Duration of Doom</strong><br />The entire mystery must be solved within 10 minutes—every second wasted brings you closer to eternal failure.</li>
          <li><strong>Stay in Character</strong><br />Participants must remain in detective mode at all times, keeping the chilling immersion of the mystery alive.</li>
          <li><strong>Clues of the Macabre</strong><br />All puzzles, riddles, and dark games are open to every team—but only the most observant eyes and unshaken teamwork will catch the shadows between the lines.</li>
          <li><strong>No Escaping the Maze</strong><br />Each challenge holds a vital piece of the grand riddle. Skipping games is forbidden, for even the smallest clue may carry the weight of guilt or innocence.</li>
          <li><strong>Teamwork in the Shadows</strong><br />Collaboration is encouraged, but deception or hostility will awaken the wrath of the guardians (coordinators).</li>
          <li><strong>The Final Word</strong><br />The coordinators’ decisions are absolute and binding—their verdicts echo like ravens in the night.</li>
          <li>Team Size: 2–4 detectives</li>
          <li>Game Duration: 10 minutes total</li>
        </ul>
      ),
      key: "rules"
    },
    {
      icon: "🕯️",
      heading: "Closing Line",
      content: (
        <div className="text-base md:text-lg leading-relaxed italic">
          "The shadows will not wait, and neither will the truth. Ten minutes is all you have… solve the Nevermore Mystery, or become part of it."
        </div>
      ),
      key: "closing"
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
            src={NevermoreBanner}
            alt="Nevermore Mystery Event"
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
          Sinister Schemes
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

export default Deadlydeeds;
