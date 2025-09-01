import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import "./VizYourWay.css";
import EventImage from "../../../assets/symposium/Wizzup_Debug.jpeg";

const Wizzup = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
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
          alt="Wizzup Debugging Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-[80%] w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
        ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Wizzup – Debugging Event
          </span>
        </h1>

        <h2>
          <span className="text-head lg:text-2xl font-bold mb-2 gradient-text">
            Description:
          </span>
        </h2>
        <p className="text-gray-300 text-body lg:text-2xl">It is a code cum game-based event.</p>

        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            General Rules
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Teams must consist of exactly 2 members (Only Registered!).</li>
            <li>Electronic devices such as mobile phones or laptops are not
              allowed, except for the provided systems.
            </li>
            <li>All teams must arrive for registration and briefing 15 minutes
              before the event starts.
            </li>
            <li>Decisions made by the organizers and judges are final.</li>
          </ul>
        </section>

        {/* Round 1 */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Round 1: Debugging Round
          </h2>
          <p className="text-subhead lg:text-2xl">
            <b>Total Time:</b> 30 minutes
          </p>
          <p className="text-subhead lg:text-2xl">
            <b>Language:</b> C
          </p>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Teams will be provided with jumbled lines of a code snippet
              with a set of questions.
            </li>
            <li>The task is to arrange the jumbled lines to form a working
              code.
            </li>
            <li>Teams must code it on the provided system and verify the
              output.
            </li>
            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">Points will be awarded for:</h3>
              <ul className="list-disc ml-6">
                <li>Correct arrangement of code.</li>
                <li>Successful compilation and execution.</li>
                <li>Time taken to complete the task.</li>
              </ul>
            
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Round 2: Coding Charades Challenge
          </h2>
          <p className="text-subhead lg:text-2xl">
            <b>Total Time:</b> 40 minutes
          </p>
          <p className="text-subhead lg:text-2xl">
            <b>Language:</b> C / Python
          </p>
          <p className="text-body lg:text-2xl">
            <b>Objective:</b> The game is based on Coding and Dumb Charades,
            with team members taking turns between acting and coding.The team
            plays several rounds of Dumb Charades and earns coding time for each
            round. The winner is determined by the number of coding tasks
            completed within the earned time
          </p>

          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
            Game Setup:
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              <b>Member 1 (Performer):</b> Acts out the clues.
            </li>
            <li>
              <b>Member 2 (Coder):</b> Works on coding tasks during the
              coding time.
            </li>
          </ul>

          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mt-4 gradient-text">
            Rounds:
          </h3>
          <h4 className="text-lg md:text-xl lg:text-1xl font-bold mt-4 gradient-text">
            a) Dumb Charades Round:
          </h4>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              Dumb Charades are played in each round to earn coding time.
            </li>
            <li>
              The performer will act out a word, phrase, or object (without
              speaking) while the coder tries to guess it within 1 minute time
              limit for guessing.
            </li>
            <li>
              If the team guesses correctly within 1 minute, they earn 4
              minutes of coding time for the next task; otherwise, they earn
              only 2 minutes of coding time for the next round
            </li>
          </ul>

          <h4 className="text-lg md:text-xl lg:text-1xl font-bold mt-4 gradient-text">
            b) Coding Time:
            </h4>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              After each charade round, the coder uses the earned coding time
              (4 or 2 minutes) to work on a coding task.
            </li>
            <li>
              The coding task could be a simple programming problem (like a
              basic algorithm or data structure problem).
            </li>
          </ul>
        </section>

        {/* Contact Details */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Contact Details
          </h2>
          <ul className="list-disc list-inside">
            <li>
              <b>Keerthivasan SJ:</b> 9952647749
            </li>
            <li>
              <b>Umaiza:</b> 9092663374
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Wizzup;
