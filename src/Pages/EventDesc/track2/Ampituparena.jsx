import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import AmpItUpBanner from "../../../assets/symposium/Sympo'25/Track2/Amp-it-up-arena.jpeg"; // <-- replace with actual banner image

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const AmpItUpArena = () => {
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
      heading: "Description",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Amp-it-up-Arena is a thrilling 3-round quiz event designed to challenge your knowledge, speed, and technical thinking. 
          Teams of two will compete in <strong>Round 1</strong> through a Google Form with 20 MCQs (15-minute limit, no negative marking). 
          Qualifying teams move to <strong>Round 2</strong>, where they must identify connections from displayed images within 30 seconds. 
          In <strong>Round 3</strong>, teams tackle technical connexions with just 15 seconds per question; passing is allowed. 
          <br /><br />
          Fair play is mandatory—no gadgets or external help. Winners and runners-up receive prizes and certificates, 
          while all valid participants get E-certificates. 
          <span className="font-bold text-primary"> Think fast, play smart, and fuel your mind!</span>
        </p>
      ),
      key: "description"
    },
    {
      icon: "🎯",
      heading: "Objective",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-base md:text-lg">
          <li>To bring together young minds with a flair for quizzing and intellectual curiosity.</li>
          <li>To provide a platform for beginners to engage with knowledge-based competitions and expand their learning horizons.</li>
          <li>To focus on specific thematic areas of quizzing, encouraging participants to explore and master diverse subjects.</li>
          <li>To promote healthy competition and foster collaborative learning through discussion and exchange of ideas during the event.</li>
        </ul>
      ),
      key: "objective"
    },
    {
      icon: "🌀",
      heading: "Rounds Overview (3 Rounds)",
      content: (
        <div className="space-y-4">
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <h3 className="font-semibold text-blue-400">Round 1</h3>
            <ul className="list-disc ml-6">
              <li>20 multiple-choice questions</li>
              <li>No negative marking</li>
              <li>Time limit: 15 minutes (form will close automatically)</li>
            </ul>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <h3 className="font-semibold text-green-400">Round 2</h3>
            <ul className="list-disc ml-6">
              <li>A picture will be displayed on the Smart Board</li>
              <li>Teams must respond within 30 seconds</li>
              <li>No negative marking</li>
            </ul>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <h3 className="font-semibold text-purple-400">Round 3</h3>
            <ul className="list-disc ml-6">
              <li>Each team will get 15 seconds to answer</li>
              <li>Passing is allowed if a team cannot answer</li>
              <li>No negative marking</li>
            </ul>
          </div>
        </div>
      ),
      key: "rounds"
    },
    {
      icon: "⚖️",
      heading: "Fair Play",
      content: (
        <ul className="list-disc ml-6 space-y-2 text-base md:text-lg">
          <li>Use of mobile phones, internet search, or external help is strictly prohibited.</li>
          <li>Any misconduct may lead to disqualification.</li>
          <li>In case of a tie, additional pictures will be given.</li>
          <li>The first team to answer correctly will be declared the winner.</li>
        </ul>
      ),
      key: "fairplay"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          Teams will be judged based on <strong>accuracy, speed, and logical reasoning</strong> across all three rounds. 
          In Round 1, scores will be based on the number of correct responses within the time limit. 
          In Rounds 2 and 3, teams will be evaluated on how quickly and accurately they identify the correct connections. 
          No negative marking ensures fairness, but time-bound answering adds a competitive edge. 
          <br /><br />
          In the case of a tie, a <em>sudden-death tie-breaker</em> will determine the winner. 
          Judges’ decisions will be <span className="font-semibold text-accent">final and binding</span>.
        </p>
      ),
      key: "judging"
    },
    {
      icon: "📞",
      heading: "Contacts",
      content: (
        <div className="space-y-2 text-base md:text-lg">
          <p><span className="font-bold">Student Coordinators:</span></p>
          <ul className="ml-6 list-disc">
            <li>Jamal Mohammed Faazil – 7871335565</li>
            <li>Mohammed Thammen.M – 8668178321</li>
          </ul>
          <p className="mt-3"><span className="font-bold">Faculty Coordinator:</span></p>
          <ul className="ml-6 list-disc">
            <li>Mr. J. Arul Prakash – 9840721704</li>
          </ul>
        </div>
      ),
      key: "contacts"
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
            src={AmpItUpBanner}
            alt="Amp-it-up-Arena Quiz Event"
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
            ⚡ Amp-it-up-Arena
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Quiz Competition</p>
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

export default AmpItUpArena;
