import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const Flipster = () => {
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
          <span className="font-bold gradient-text">"Flip the Quiz, Twist Your Mind!" 🎉</span><br />
          <span className="font-bold text-primary">FLIPSTER: The Ultimate Quiz Twist Challenge🎉</span> is an engaging and fast-paced event designed to test your <span className="highlight bg-accent px-2 py-1 rounded-md">knowledge</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">intuition</span>, and <span className="highlight bg-accent px-2 py-1 rounded-md">strategic thinking</span>. Dive into a world of logos, taglines, domains, and rapid-fire rounds where <span className="text-primary font-semibold">wit, teamwork, and speed</span> will decide the leaderboard.
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
            "Encourage quick thinking and teamwork through a fun quiz format",
            "Test participants' ability to identify logos, taglines, and domains",
            "Promote accuracy, speed, and strategic answering under pressure",
            "Provide an engaging and competitive quiz experience"
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
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🎨 Round 1: Taglines to Techlines – Your Knowledge, Your Power</h3>
            <ul className="ml-4 list-disc text-base md:text-lg space-y-1">
              <li>Identify taglines and technical terms from logos and pictures</li>
              <li>Speed and accuracy are the key factors</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-green-900/30 to-teal-900/30 rounded-lg border-l-4 border-green-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">⚡ Round 2: Decode the Clues, Defend Your Domain</h3>
            <ul className="ml-4 list-disc text-base md:text-lg space-y-1">
              <li>Theme: Technical Rapid Fire Round</li>
              <li>Participants must answer quickly and strategically</li>
            </ul>
          </div>
          <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border-l-4 border-purple-400">
            <h3 className="gradient-subhead font-semibold mb-2 text-xl">🔄 Tie-Breaker (Optional)</h3>
            <ul className="ml-4 list-disc text-base md:text-lg space-y-1">
              <li>Answer with the opposite or incorrect meaning under time pressure</li>
              <li>Only the fastest team wins!</li>
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
            "Each team consists of 2 participants working together",
            "Mobiles, internet, and lifelines are prohibited. Only your brain does the heavy lifting",
            "Judges' decisions are final and binding",
            "Points reward accuracy; tie-breakers reward speed",
            "Conduct and fairness are equally important as winning"
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
            <span className="ml-2">Accuracy in identifying logos and taglines</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🥈 Round 2:</span> 
            <span className="ml-2">Speed and correctness in rapid-fire answers</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🥉 Tie-Breaker:</span> 
            <span className="ml-2">Fastest correct response with twist logic</span>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "🎪",
      heading: "About FLIPSTER",
      content: (
        <p className="text-base md:text-lg leading-relaxed">
          <span className="font-bold gradient-text">FLIPSTER</span> is an exciting quiz competition where you identify taglines and logos, answer tech questions, and make quick choices. Each round brings participants closer to victory while testing their <span className="text-primary font-semibold">knowledge, wit, and teamwork</span>.
        </p>
      ),
      key: "about"
    },
    {
      icon: "📞",
      heading: "For More Information",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="mb-2 font-semibold text-accent">Student Coordinators:</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Ms. Archana A P (IV CS & BS): </span>
              <a href="tel:+918778108490" className="text-accent hover:underline">+91 87781 08490</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">Mr. Hari Haran A (IV CS & BS): </span>
              <a href="tel:+918939209005" className="text-accent hover:underline">+91 89392 09005</a>
            </div>
          </div>
        </div>
      ),
      key: "contact"
    },
    {
      icon: "🏛️",
      heading: "Event Footer",
      content: (
        <div className="p-4 bg-gradient-to-r from-purple-900/30 to-pink-900/30 rounded-lg border border-purple-500/30">
          <p className="text-base md:text-lg leading-relaxed italic">
            Organized under <span className="font-bold text-primary">TECHNOVANZA 2025-26</span>: An Inter Collegiate National Level Technical Symposium at <span className="font-bold text-accent">Jerusalem College of Engineering, Pallikaranai, Chennai</span>.
          </p>
        </div>
      ),
      key: "footer"
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
            alt="FLIPSTER Event"
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
            ✨ FLIPSTER
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">The Tech Quiz with a Twist</p>
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

export default Flipster;
