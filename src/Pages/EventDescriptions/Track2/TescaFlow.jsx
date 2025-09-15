import React from "react";
import { motion } from "framer-motion";
import "./EnergiaNova.css";

import tescaflow from "../../../assets/symposium/Old/Tescaflow.jpg"
import { useRef, useEffect } from "react";
const Tescaflow = () => {
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
      {/* Left: Event Details */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={tescaflow}
          alt="Batallia de Robots"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 bg-transparent  overflow-auto custom-scrollbar p-4 rounded-lg shadow-lg"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          🧠
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Tescaflow: Quiz Challenge
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Join us for <strong>Tescaflow</strong>, a fun and competitive quiz
            with three exciting rounds: MCQs, Connections, and Rapid Fire.
          </p>
          <p>
            This event tests knowledge, teamwork, and quick thinking, making it
            an engaging and exciting challenge for all participants.
          </p>
        </section>

        <section className="text-gray-300">
          <h2>
            📅
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Event Details:
            </span>
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>
              📍 <strong>Venue:</strong> JCE LAB 31
            </li>
            <li>
              🗓️ <strong>Date:</strong> 15/02/2025
            </li>
            <li>
              ⏰ <strong>Time:</strong> 11 AM to 3 PM
            </li>
            <li>
              👥 <strong>Team Size:</strong> 3-5 members
            </li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>
            🛠️
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Rules and Regulations:
            </span>
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Each team can have a maximum of 3 members.</li>
            <li>
              No mobile phones or electronic devices allowed during the event.
            </li>
            <li>The Quizmaster's decision is final and binding.</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>
            🚦
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Round Details:
            </span>
          </h2>

          <h3 className="font-semibold mt-4 text-body lg:text-2xl">
            Round 1: MCQs
          </h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Time limit: 15 minutes</li>
            <li>Scoring: 1 point per correct answer</li>
            <li>No negative marking</li>
            <li>Team discussion allowed</li>
            <li>Late submissions not accepted</li>
          </ul>

          <h3 className="font-semibold mt-4 text-body lg:text-2xl">
            Round 2: Connections
          </h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Find the common link among clues</li>
            <li>5 questions, 1 minute each</li>
            <li>Scoring: 2 points per correct connection</li>
            <li>No partial credit</li>
            <li>One final answer per team</li>
            <li>Time limit strictly enforced</li>
          </ul>

          <h3 className="font-semibold mt-4 text-body lg:text-2xl">
            Round 3: Rapid Fire
          </h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>10 rapid-fire questions</li>
            <li>Time limit: 60 seconds</li>
            <li>Scoring: 1 point per correct answer</li>
            <li>No negative marking</li>
            <li>One team member can answer</li>
            <li>No changing answering member</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>
            🏆
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Final Scores:
            </span>
          </h2>
          <p className="mt-4 lg:text-2xl">
            The highest cumulative score wins. In case of a tie, a tiebreaker
            question will be asked to determine the winner.
          </p>
        </section>

        <section className="text-gray-300">
          <h2>
            📞
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Enquiry and Contact Details:
            </span>
          </h2>
          <p className="mt-4 lg:text-2xl">
            Contact: Harish M - +91 99623 26686
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Tescaflow;
