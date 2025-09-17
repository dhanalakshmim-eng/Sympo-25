import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/GIGZUP.jpg";

const GigzUp = () => {
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
          alt="GigzUp Meme Competition"
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
        {/* Title */}
        <h1>
          🔥
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            GigzUp – Tech-Inspired Meme Competition
          </span>
        </h1>

        {/* Description */}
        <section className="text-gray-300">
          <p className="text-body lg:text-2xl text-justify">
            Welcome to <strong>GigzUp</strong> – an AI-themed meme competition
            blending humor with learning! Participants are challenged to
            creatively simplify complex tech concepts through original,
            relatable memes that make technology more fun and accessible.
          </p>
        </section>

        {/* Competition Details */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📌 Competition Details
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>
              <strong>Theme:</strong> Use humor to explain or highlight
              Artificial Intelligence.
            </li>
            <li>
              <strong>Format:</strong> Submit memes in JPEG or PNG format.
            </li>
            <li>
              <strong>Size:</strong> File size must not exceed 5 MB.
            </li>
            <li>
              <strong>Content:</strong> Simplify tech ideas in a humorous,
              relatable way.
            </li>
            <li>
              <strong>Creativity:</strong> Originality is crucial — copied memes
              will be disqualified.
            </li>
          </ul>
        </section>

        {/* Rules */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            ⚡ Rules of the Competition
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>Memes must strictly adhere to the theme.</li>
            <li>Team participation only (team of 2).</li>
            <li>Both members must register.</li>
            <li>
              Content must be respectful — offensive or inappropriate memes will
              not be considered.
            </li>
          </ul>
        </section>

        {/* Submission Guidelines */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📥 Submission Guidelines
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>Each team should submit only one meme.</li>
            <li>
              Submit to:{" "}
              <a
                href="mailto:symposium2025@jerusalemengg.ac.in"
                className="underline"
              >
                symposium2025@jerusalemengg.ac.in
              </a>
            </li>
            <li>Deadline: On or before 8th October 2025.</li>
            <li>
              File naming format:{" "}
              <em>
                YourName_YourCollegeName_UniqueID1_UniqueID2
              </em>
            </li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Judging Criteria
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>Originality</li>
            <li>Humor</li>
            <li>Relevance to theme</li>
          </ul>
          <p className="text-body lg:text-2xl mt-2">
            Winners will be chosen by a panel of judges.
          </p>
        </section>

        {/* Disqualification & Rights */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            ⚠️ Disqualification & Rights
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>
              Memes violating rules (plagiarism, offensive content) may be
              disqualified anytime.
            </li>
            <li>
              By submitting, participants grant organizers rights to display and
              use the memes for event publicity.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📞 Contact
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-1">
            <li>
              💻 Akela M (IV CS & BS) –{" "}
              <a href="tel:+919003240824">+91 90032 40824</a>
            </li>
            <li>
              💻 Anboli M (IV CS & BS) –{" "}
              <a href="tel:+917010574628">+91 70105 74628</a>
            </li>
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default GigzUp;
