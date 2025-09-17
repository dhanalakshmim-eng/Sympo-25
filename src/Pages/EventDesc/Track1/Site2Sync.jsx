import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/Site2sync.png"; // Update with correct image path

const Site2Sync = () => {
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
          alt="SITE2SYNC Event"
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
            SITE2SYNC – Technical Web Development Event
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            SITE2SYNC is a technical web development event where participants will debug, design, and build a mini functional website under time-bound conditions. The event is designed to evaluate participants’ problem-solving skills, creativity, and coding ability.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Event Objectives
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>To build a mini functional website based on the given theme.</li>
            <li>Test participants’ debugging and web development skills.</li>
            <li>Encourage creativity, originality, and structured coding practices.</li>
            <li>Provide a platform to compete, collaborate, and learn.</li>
          </ul>
        </section>

        {/* Event Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🛠 Event Rounds
          </h2>

          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 1: Debugging the Web
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Setup: Each team will be given HTML, CSS, and JavaScript files containing hidden flaws with a reference output.</li>
              <li>Task: Identify and fix three hidden issues to match the reference design.</li>
              <li>Time Limit: 30 minutes (including evaluation).</li>
              <li>Evaluation: Accuracy in matching the reference design.</li>
              <li>Outcome: Top-performing teams will qualify for Round 2.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Buildathon – Vibe Coding
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Task: Build a mini functional website (2–3 pages) based on a theme revealed at the start of the round.</li>
              <li>Allowed Tools: AI platforms such as ChatGPT, Lovable AI, Replit AI, or similar tools.</li>
              <li>Time Limit: 1.5 to 2 hours (strict). Late submissions will not be accepted.</li>
              <li>Evaluation Criteria:
                <ul className="list-disc list-inside ml-6">
                  <li>Creativity & Originality</li>
                  <li>Functionality & User Experience</li>
                  <li>Responsiveness (Mobile/Desktop Compatibility)</li>
                  <li>Code Quality & Structure</li>
                </ul>
              </li>
            </ul>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>A team can have maximum 2 members (single participation allowed).</li>
            <li>Personal devices such as laptops, USB drives, or any storage devices are strictly prohibited.</li>
            <li>Systems will be provided.</li>
            <li>Internet access will be disabled unless explicitly allowed by the event coordinators.</li>
            <li>All code must be written during the event. Pre-written code is not allowed.</li>
            <li>Any form of cheating, code sharing, or use of unauthorized tools will result in immediate disqualification.</li>
            <li>Event is time-bound in all rounds.</li>
            <li>Judges’ decision will be final and binding.</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Judging Criteria
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Round 1: Accuracy in debugging and matching the reference design.</li>
            <li>Round 2: Creativity, functionality, responsiveness, and code quality.</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            For More Information
          </h2>
          <p className="text-body lg:text-2xl">
            Student Coordinators: <br />
            <strong>To be announced</strong>
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Site2Sync;
