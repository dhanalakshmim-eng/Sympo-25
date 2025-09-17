import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/VIZYOURWAY.png"; // update path if needed

const VizYourWay = () => {
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
          alt="Viz A Way Event"
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
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            VIZ A WAY — Viz Your Way: Data Visualization Competition
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            <strong>Viz Your Way</strong> is an engaging two-round competition that challenges
            participants to showcase their knowledge and creativity in data analysis and
            visualization. From a rapid-fire quiz to insightful data graphics, this competition
            highlights speed, accuracy, and storytelling with data.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🎯 Event Objectives</h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Test participants’ data analysis and visualization skills.</li>
            <li>Encourage creativity in presenting insights visually.</li>
            <li>Evaluate quick thinking, accuracy, and clarity in communication.</li>
          </ul>
        </section>

        {/* Event Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🛠 Event Rounds</h2>

          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 1: Quiz Quest
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl mt-2">
              <li>Participants answer a series of rapid-fire questions under a strict time limit.</li>
              <li>Points are awarded for correct answers.</li>
              <li>The top 15 teams qualify for Round 2.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Data Visualization
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl mt-2">
              <li>A dataset will be provided at the start of the round.</li>
              <li>Teams must create insightful visualizations using tools like Python, Excel, Tableau, or Power BI.</li>
              <li>All visuals must be presented on a single page with a short description.</li>
              <li>Charts and graphs must be clear, understandable, and informative.</li>
              <li>Time limit: <strong>20 minutes</strong>.</li>
              <li>Final decision will be made by the judges.</li>
            </ul>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">📜 Rules & Regulations</h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each team must consist of <strong>2 members</strong>.</li>
            <li>Gadget usage is strictly prohibited.</li>
            <li>Each round is strictly time-bound.</li>
            <li>Participants must follow the event guidelines.</li>
            <li>Judges’ decisions will be final and binding.</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🏆 Judging Criteria</h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Round 1: Speed + Accuracy of answers.</li>
            <li>Round 2: Creativity, clarity, and effectiveness of data visualizations.</li>
            <li>Overall presentation and communication of insights.</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">For More Information</h2>
          <p className="text-body lg:text-2xl">
            Student Coordinators: <br />
            <strong>To be announced</strong>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default VizYourWay;
