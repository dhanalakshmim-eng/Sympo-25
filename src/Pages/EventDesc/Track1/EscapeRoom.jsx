import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/Escape-Room.jpeg";

const EscapeRoom = () => {
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
          alt="Escape Room 2.0 Event"
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
            Escape Room 2.0 - Event Rules and Guidelines 🎉
          </span>
        </h1>

        {/* Objective */}
        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Objective
          </h2>
          <p className="text-body lg:text-2xl">
            Escape Room 2.0 challenges participants’ technical knowledge,
            decoding skills, logical reasoning, and problem-solving abilities
            through a two-stage competition. The event tests quick thinking with
            technical MCQs and analytical ability in an immersive escape room
            challenge, where participants must decode puzzles, analyze clues,
            and apply technical knowledge under pressure. This fosters
            creativity, critical thinking, and decision-making in a fun yet
            competitive environment.
          </p>
        </section>

        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            General Rules 📝
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each participant must register individually and participate solo 👤.</li>
            <li>Be respectful and courteous towards other participants, judges, and staff 🙏.</li>
            <li>The decision of the judges will be final and binding 🏆.</li>
          </ul>
        </section>

        {/* Round 1 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Round 1: Technical MCQ Round 🤔
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Format: Multiple-choice questions on technical topics 📚.</li>
            <li>Top participants will be shortlisted based on scores 📈.</li>
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Round 2: Escape Room Challenge 🔓
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              Objective: Solve puzzles and challenges within the escape room to
              escape in the given time limit 🕰.
            </li>
            <li>
              Winning Criteria: The participant who escapes fastest or solves
              the most puzzles wins 🏆.
            </li>
          </ul>
        </section>

        {/* Important Guidelines */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Important Guidelines 🚨
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>No use of AI or automated tools 🤖.</li>
            <li>No collaboration – participants must work individually 🙅.</li>
            <li>No damage to the escape room or its contents 🚫.</li>
          </ul>
        </section>

        {/* Misconduct */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Consequences of Misconduct ⚠
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Disqualification for misconduct 🚫.</li>
            <li>Penalties may include time penalties or other consequences ⏱.</li>
          </ul>
        </section>

        {/* Final Remarks */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Final Remarks 📝
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Organizers reserve the right to modify or cancel the event 📝.</li>
            <li>Participation implies agreement with the rules and guidelines 👍.</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Contact Information
          </h2>
          <p className="text-body lg:text-2xl">
            <strong>Staff Incharge:</strong> <br />
            Ms. S. Preethi Parameshwari <br />
            Ms. S. Sandhiyaa <br /><br />
            <strong>Student Coordinators:</strong> <br />
            Mr. Subadevan C - III CS (863760748) <br />
            Ms. Nivethithaa S - II CS (8925651912) <br />
            Mr. Rohan S - II CS (8220849281)
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default EscapeRoom;
