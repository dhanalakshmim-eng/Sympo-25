import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import FreeFireImage from "../../../assets/symposium/Old/OBS-Stackle.jpg";
import "./MysteryVault.css";

const FreeFire = () => {
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
          src={FreeFireImage}
          alt="Free Fire Event"
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
          🎮  
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            FREE FIRE: Battle for Glory
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            <strong>"Gaming is not just a hobby, it's a passion."</strong>  
            <br /> We proudly invite you to join us for an exciting gaming event:  
            <strong>🔥 FREE FIRE 🔥</strong>
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules & Regulations:
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li> Each team must consist of 4 members. (A Squad)</li>
            <li> Teams should have a unique team name for their squad.</li>
            <li> Game mode will be <strong>Clash Squad</strong> & <strong>Classic (Bermuda)</strong>.</li>
            <li> Only mobile players are allowed; PC players are not allowed.</li>
            <li> Hacking or cheating during the game will lead to team disqualification.</li>
            <li> No gun skins and no character skills are allowed.</li>
          </ul>
          <p className="mt-4 text-lg font-bold text-center">
            🔥 Show your Gaming Skills 🔥
          </p>
        </section>

        <section className="text-gray-300">
          {/* <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            ✨ Mark Your Calendar ✨
          </h2> */}
          {/* <ul className="list-none mt-4 text-body lg:text-2xl">
            <li>📅 <strong>Date:</strong> 02.02.2025</li>
            <li>⏰ <strong>Time:</strong> 3 PM to 8 PM</li>
            <li>🌐 <strong>Mode:</strong> Online</li>
          </ul> */}
          <p className="mt-4 text-body lg:text-2xl">
            Excited to join? What are you waiting for? 🤔  
            💫 Reserve your spot for this fantastic gaming event!
          </p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            ✨ Get ready, and don’t miss this awesome opportunity to showcase that you're a pro in Free Fire! ✨  
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For More Details, Contact:
          </h2>
          <ul className="list-none mt-4 text-body lg:text-2xl">
            <li>📞 <strong>Job Aoushadan N:</strong> 7358195381</li>
            <li>📞 <strong>Vishall R:</strong> 93618 91754</li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default FreeFire;
