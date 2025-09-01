import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import GhostOpsImage from "../../../assets/symposium/Ghost.png";
import "./Eloquence.css";

const GhostOps = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={GhostOpsImage}
          alt="GhostOps Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            GhostOps: The Ultimate CTF Showdown
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>"Crack the Code, Rule the Shadows!"</strong>  
            <br /> 🔒 Greetings from the Department of Cybersecurity! 🔒  
          </p>
          <p>
            Welcome to <strong>🔥 GhostOps: The Ultimate CTF Showdown! 🔥</strong>  
            Step into the realm of digital mysteries and prove your mettle in this high-stakes national-level event.  
            From breaking codes to uncovering hidden secrets, this is your chance to shine and dominate the leaderboard.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            💻 Event Details:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🌐 <strong>Platform:</strong> CTFd</li>
            <li>🎯 <strong>Challenge Type:</strong> Jeopardy-style CTF</li>
            <li>👥 <strong>Team Size:</strong> 2 Members</li>
            <li>⏳ <strong>Duration:</strong> 1 Hour</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            🌟 Mission Challenges:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🔐 <strong>Cryptography:</strong> Decode the unbreakable and uncover hidden truths behind encrypted walls.</li>
            <li>🧩 <strong>Forensics:</strong> Analyze digital traces, recover evidence, and solve the puzzle.</li>
            <li>🔎 <strong>OSINT:</strong> Use your investigative skills to extract crucial data from the web.</li>
            <li>🎨 <strong>Steganography:</strong> Spot the hidden messages buried deep in files, images, and audio.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            ⚡ Rules of the Arena:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>🔸 Teams of two—team up wisely!</li>
            <li>🔸 Ethical play is key—no disruptive actions like DoS/DDoS attacks.</li>
            <li>🔸 Keep your flags secure—flag sharing will result in disqualification.</li>
            <li>🔸 Solve fast, solve smart—the highest points and quickest solves win the day.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            💀 About GhostOps:
          </h2>
          <p className="mt-4 text-body lg:text-2xl">
            This isn’t just a competition; it’s your ultimate chance to dive into the world of covert digital operations.  
            GhostOps is designed to test your skills, push your limits, and crown the fastest problem-solvers.  
            Whether it’s cracking the toughest codes or uncovering hidden messages, every second counts.
          </p>
          <p className="mt-4 text-body lg:text-2xl">
            Are you ready to rise above and claim your spot as a <strong>GhostOps champion?</strong>
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            📞 Contact Us:
          </h2>
          <p className="mt-4 text-body lg:text-2xl">
            Subadevan: <strong>+91 8637607481</strong>  
            <br /> Jayasuriya: <strong>+91 8667223747</strong>
          </p>
        </section>

        <section className="text-gray-300">
          <p className="text-center font-bold">
            Best Wishes,  
            <br /> 💻 Department of Cybersecurity 💻
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default GhostOps;
