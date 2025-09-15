import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/Cinephilia.jpeg";

const Cinephilia = () => {
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
          alt="Cinephilia Event"
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
          🎬
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            CINEPHILIA - Event Rules and Guidelines 🎉
          </span>
        </h1>

        {/* Objective */}
        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Objective
          </h2>
          <p className="text-body lg:text-2xl">
            The objective of CINEPHILIA is to celebrate the art of cinema by
            testing participants’ movie knowledge, observation skills, memory,
            and quick thinking through fun and interactive rounds. From decoding
            BGMs and dialogues to identifying movies through visual clues, the
            event engages participants in an entertaining yet competitive
            atmosphere that fosters teamwork, creativity, and passion for films.
          </p>
        </section>

        {/* General Rules */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            General Rules 📝
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each team can consist of 2 members 👥.</li>
            <li>Winners will be selected according to their points 🏆.</li>
            <li>Mobiles are strictly prohibited 🚫.</li>
            <li>Use of ChatGPT & other AI tools will lead to disqualification ⚠.</li>
          </ul>
        </section>

        {/* Round 1 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Round 1: BGM MASTER 🎵
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Guess the name of the song that the BGM belongs to 🎶.</li>
            <li>BGM will be played for 10 seconds. Answer within the time limit ⏰.</li>
            <li>Top teams will be shortlisted. Lowest scores will be eliminated.</li>
          </ul>
        </section>

        {/* Round 2 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Round 2: MUTE-A-LOGUE 🔕
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Find the exact dialogue muted in the clip.</li>
            <li>Time limit: 30 seconds ⏰.</li>
            <li>Top teams will qualify for the final round.</li>
          </ul>
        </section>

        {/* Round 3 */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            Round 3: CONCEPT PUDI PRIZE ADI 🎭
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Find the movie name by observing the shown images.</li>
            <li>Answer within the allotted time ⏰.</li>
            <li>The top team will be declared the Winner 🏆.</li>
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
            Ms. R. Rachel Evelyn <br />
            Mr. M. Mohamed Neina Hasan <br /><br />
            <strong>Student Incharge:</strong> <br />
            M. Hari Hara Sudhan (9345746676) <br />
            T.S. Antony Sebastin (8667654649) <br />
            K. Naveen Kumar
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Cinephilia;
