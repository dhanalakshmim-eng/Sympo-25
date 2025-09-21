import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "../../../styles/eventStyles.css";
import EventImage from "../../../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: i => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.12, duration: 0.8 }
  })
};

const GigzUp = () => {
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
          Welcome to <span className="font-bold gradient-text">GigzUp</span> – an AI-themed meme competition blending humor with learning! Participants are challenged to creatively simplify complex tech concepts through <span className="highlight bg-accent px-2 py-1 rounded-md">original</span>, <span className="highlight bg-accent px-2 py-1 rounded-md">relatable memes</span> that make technology more <span className="text-primary font-semibold">fun and accessible</span>.
        </p>
      ),
      key: "desc"
    },
    {
      icon: "📌",
      heading: "Competition Details",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">🎯 Theme:</span> 
            <span className="ml-2">Use humor to explain or highlight Artificial Intelligence</span>
          </div>
          <div className="p-3 bg-green-900/20 rounded-lg border border-green-500/30">
            <span className="font-semibold text-green-400">📱 Format:</span> 
            <span className="ml-2">Submit memes in JPEG or PNG format</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">📏 Size:</span> 
            <span className="ml-2">File size must not exceed 5 MB</span>
          </div>
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">💡 Content:</span> 
            <span className="ml-2">Simplify tech ideas in a humorous, relatable way</span>
          </div>
          <div className="p-3 bg-pink-900/20 rounded-lg border border-pink-500/30">
            <span className="font-semibold text-pink-400">✨ Creativity:</span> 
            <span className="ml-2">Originality is crucial — copied memes will be disqualified</span>
          </div>
        </div>
      ),
      key: "details"
    },
    {
      icon: "⚡",
      heading: "Rules of the Competition",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          {[
            "Memes must strictly adhere to the theme",
            "Team participation only (team of 2)",
            "Both members must register",
            "Content must be respectful — offensive or inappropriate memes will not be considered"
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
      icon: "📥",
      heading: "Submission Guidelines",
      content: (
        <div className="p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <ul className="list-none space-y-3 text-base md:text-lg">
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">📝</span>
              <span>Each team should submit only one meme</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">📧</span>
              <span>Submit to: <a href="mailto:symposium2025@jerusalemengg.ac.in" className="text-accent hover:underline">symposium2025@jerusalemengg.ac.in</a></span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 font-bold">⏰</span>
              <span>Deadline: On or before 8th October 2025</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-indigo-400 font-bold">🏷️</span>
              <span>File naming format: <em>YourName_YourCollegeName_UniqueID1_UniqueID2</em></span>
            </li>
          </ul>
        </div>
      ),
      key: "submission"
    },
    {
      icon: "🏆",
      heading: "Judging Criteria",
      content: (
        <div className="space-y-3">
          <div className="p-3 bg-yellow-900/20 rounded-lg border border-yellow-500/30">
            <span className="font-semibold text-yellow-400">✨</span> 
            <span className="ml-2">Originality</span>
          </div>
          <div className="p-3 bg-blue-900/20 rounded-lg border border-blue-500/30">
            <span className="font-semibold text-blue-400">😂</span> 
            <span className="ml-2">Humor</span>
          </div>
          <div className="p-3 bg-purple-900/20 rounded-lg border border-purple-500/30">
            <span className="font-semibold text-purple-400">🎯</span> 
            <span className="ml-2">Relevance to theme</span>
          </div>
        </div>
      ),
      key: "judging"
    },
    {
      icon: "⚠️",
      heading: "Disqualification & Rights",
      content: (
        <ul className="list-none space-y-2 text-base md:text-lg">
          <li className="flex items-start gap-3">
            <span className="text-red-400 font-bold">🚫</span>
            <span>Memes violating rules (plagiarism, offensive content) may be disqualified anytime</span>
          </li>
          <li className="flex items-start gap-3">
            <span className="text-yellow-400 font-bold">📄</span>
            <span>By submitting, participants grant organizers rights to display and use the memes for event publicity</span>
          </li>
        </ul>
      ),
      key: "disqualification"
    },
    {
      icon: "📞",
      heading: "Contact",
      content: (
        <div className="text-base md:text-lg leading-relaxed p-4 bg-gradient-to-r from-indigo-900/30 to-blue-900/30 rounded-lg border border-indigo-500/30">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">💻 Akela M (IV CS & BS): </span>
              <a href="tel:+919003240824" className="text-accent hover:underline">+91 90032 40824</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-400 rounded-full"></span>
              <span className="font-semibold">💻 Anboli M (IV CS & BS): </span>
              <a href="tel:+917010574628" className="text-accent hover:underline">+91 70105 74628</a>
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
            alt="GigzUp Meme Competition"
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
            🔥 GigzUp
          </h1>
          <p className="text-xl md:text-2xl text-accent font-medium">Tech-Inspired Meme Competition</p>
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

export default GigzUp;
