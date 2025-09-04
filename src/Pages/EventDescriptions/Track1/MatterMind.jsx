import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/MatterMindNew.jpg";
import "./Eloquence.css";

const MatterMind = () => {
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
          alt="MatterMind Event"
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
          💡✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            ⚜️ MATTERMIND ⚜️
          </span>
        </h1>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <h2>Round 1 - Trick 'O Tick ✅</h2>
          <p>An quiz on computer basics and algorithms</p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <h2>Round 2 - 📸 Pixel Craft 🏜️</h2>
          <p>
            Objective: Participants must craft a prompt to generate an image
            using an AI tool that matches the provided source image as closely
            as possible.
          </p>
          <ul className="list-disc list-inside mt-4">
            <li>
              Tool: Only the specified AI tool provided by the organizers can
              be used.
            </li>
            <li>
              📌 Use the given AI tool to craft prompts and generate an image
              matching the source image.
            </li>
            <li>
              📌 Submit your prompt and generated image within the given time.
            </li>
            <li>
              📌 Judging is based on relevance, creativity, and accuracy.
            </li>
            <li>📌 No external edits or plagiarized prompts are allowed.</li>
          </ul>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <h2>Round 3 - Unwrap the code 👩‍💻</h2>
          <ul className="list-disc list-inside mt-4">
            <li>
              🔸 Setup: We display a specific output along with some hints to
              help to reconstruct the original input or code in a time
              constraint.
            </li>
            <li>
              🔸 Workflow: Using the hints, participants must logically
              reverse-engineer the code or deduce the correct inputs that could
              generate the given output.
            </li>
            <li>
              📌 Target: The goal is to correctly identify the inputs or code
              that produces the given output in the shortest time.
            </li>
          </ul>
        </section>
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Prakash Rai :</strong> +919150509625
            <br />
          </p>
        </section>
        <footer className="text-gray-300 mt-4">
          <p className="text-left">Let the challenge begin!</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default MatterMind;
