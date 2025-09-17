import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/TriSpark.png"; // update path if needed

const TriSpark = () => {
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
          alt="TRISPARK Event"
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
            TRISPARK — Decode, Depict and Develop
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            Welcome to <strong>TRISPARK</strong> — a three-stage coding and logic event that challenges your binary decoding, visualization, and code reconstruction skills. Participants will work in teams to decode binary puzzles, reproduce visual outputs from broken code, and reconstruct scrambled code under strict time limits.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🎯 Event Objectives</h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Assess participants’ logical thinking and problem-solving skills.</li>
            <li>Enhance technical skills in Python and visualization libraries.</li>
            <li>Develop efficiency in debugging and code reconstruction.</li>
          </ul>
        </section>

        {/* Event Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🛠 Event Rounds</h2>

          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">Round 1: Decode the Puzzle</h3>
            <p className="text-body lg:text-2xl mt-2"><strong>Prerequisite:</strong> Basic knowledge of binary numbers and ASCII conversion.</p>
            <p className="text-body lg:text-2xl mt-1"><strong>Objective:</strong> Test participants’ logical thinking and technical skills by decoding binary codes into meaningful words.</p>
            <ul className="list-disc list-inside text-body lg:text-2xl mt-2">
              <li>Participants will be given binary codes representing letters or words — only correctly decoded answers are valid.</li>
              <li>Time limit: <strong>20 minutes</strong> (no extra time provided).</li>
              <li>In case of a tie, a quick bonus binary puzzle will decide the winner.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">Round 2: Depict the Code</h3>
            <p className="text-body lg:text-2xl mt-2"><strong>Prerequisite:</strong> Basic knowledge of Python and visualization libraries (Matplotlib, Pandas, NumPy).</p>
            <p className="text-body lg:text-2xl mt-1"><strong>Objective:</strong> Enhance debugging skills, logical thinking, and coding confidence through hands-on practice.</p>
            <ul className="list-disc list-inside text-body lg:text-2xl mt-2">
              <li>Participants must generate the given visual output (graph/chart) from an incomplete code containing blanks and errors.</li>
              <li>Time limit: <strong>20 minutes</strong>.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">Round 3: Design the Code</h3>
            <p className="text-body lg:text-2xl mt-2"><strong>Prerequisite:</strong> Basic knowledge of Python (syntax, logic, debugging).</p>
            <p className="text-body lg:text-2xl mt-1"><strong>Objective:</strong> Test logical thinking and coding efficiency by reconstructing scrambled codes.</p>
            <ul className="list-disc list-inside text-body lg:text-2xl mt-2">
              <li>Participants will receive scrambled codes (split into 4 parts and mixed). Only correctly assembled and executable codes are valid.</li>
              <li>Time limit: <strong>20 minutes</strong> (no extra time provided).</li>
              <li>In case of a tie, a quick coding quiz will decide the winner.</li>
              <li>Judges’ decisions are final.</li>
            </ul>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">📜 Rules & Regulations</h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Team size: Maximum of <strong>2 members</strong> per team.</li>
            <li>Participants must adhere strictly to the time limits.</li>
            <li>Any violation of event guidelines will lead to disqualification.</li>
            <li>Judges’ decisions are final and binding.</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🏆 Judging Criteria</h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Accuracy of answers.</li>
            <li>Efficiency in solving problems.</li>
            <li>Logical approach and problem-solving skills.</li>
            <li>Code quality in debugging and reconstruction.</li>
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

export default TriSpark;
