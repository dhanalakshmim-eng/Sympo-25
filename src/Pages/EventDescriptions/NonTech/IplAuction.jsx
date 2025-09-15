import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/Old/iplauction.jpg"; 
// import "./IPL.css";

const IPL = () => {
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
          src={EventImage}
          alt="IPL Auction"
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
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            IPL AUCTION - BME
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p>
            Get ready to experience the excitement of the IPL Auction at our college symposium! Compete individually or in teams, demonstrate your cricket knowledge, and strategically build your franchise in a thrilling two-round event.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Round 1
          </h2>
          <ul className="list-disc list-inside mt-4">
            <li>Participants can compete individually or in teams.</li>
            <li>
              A set of IPL-related questions will test knowledge about:
              <ul className="list-disc list-inside pl-6">
                <li>IPL history</li>
                <li>Players and teams</li>
                <li>Matches and records</li>
                <li>Game strategies</li>
              </ul>
            </li>
            <li>Scoring will be based on accuracy and speed.</li>
            <li>The top 10 teams with the highest scores will advance to Round 2.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Round 2
          </h2>
          <ul className="list-disc list-inside mt-4">
            <li>
              Teams will act as franchises with a budget of 100 crore virtual currency.
            </li>
            <li>
              The objective is to bid for 25 players, with each player having:
              <ul className="list-disc list-inside pl-6">
                <li>
                  Points assigned based on IPL performance, skills, and reputation.
                </li>
              </ul>
            </li>
            <li>Teams must use strategic planning to:</li>
            <ul className="list-disc list-inside pl-6">
              <li>Manage the budget wisely</li>
              <li>Build the strongest squad possible</li>
            </ul>
            <li>
              Final scores will be calculated based on the cumulative points of the players acquired by each team.
            </li>
          </ul>
        </section>

       
      </motion.div>
    </div>
  );
};

export default IPL;
