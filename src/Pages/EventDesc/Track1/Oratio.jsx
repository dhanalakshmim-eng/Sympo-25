import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import OratioBanner from "../../../assets/symposium/Sympo'25/Track1/Oratio.png"; // 🔗 replace with your banner image

const Oratio = () => {
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
      {/* Left: Event Banner */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={OratioBanner}
          alt="ORATIO Paper Presentation"
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
            ORATIO – Paper Presentation
          </span>
        </h1>

        {/* Intro Section */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            <strong>TECHNOVANZA 2025–26</strong> <br />
            <em>An Inter Collegiate National Level Technical Symposium</em>
            <br />
            <br />
            ORATIO is where <span className="gradient-text">ideas meet expression</span>. 
            It’s a platform to showcase research, creativity, and innovation with impact. 
            Beyond facts, it’s about clarity, confidence, and originality. 
            Each presentation aims to inspire, engage, and leave a lasting impression.
          </p>
        </section>

        {/* Rules and Guidelines */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Guidelines
          </h2>

          {/* Abstract Format */}
          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              1. Abstract Format
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li><strong>Title of the Paper:</strong> Times New Roman, Size 16, Bold</li>
              <li><strong>Author Name:</strong> Max 2 members, Times New Roman, Size 10</li>
              <li><strong>Affiliation:</strong> Times New Roman, Size 8</li>
              <li><strong>E-mail ID:</strong> Times New Roman, Size 8</li>
              <li><strong>Abstract Text:</strong> Times New Roman, Size 10, Bold</li>
              <li><strong>Word Limit:</strong> Max 200 words (must clearly state problem statement)</li>
            </ul>
          </div>

          {/* Full Paper & Presentation Format */}
          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              2. Full Paper & Presentation Format
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Presentation should be only as <strong>PPT slides</strong>.</li>
              <li>Maximum number of slides: <strong>6</strong>.</li>
              <li>Presentation Duration: <strong>8–10 minutes</strong>.</li>
              <li>Q&A Session: <strong>2–3 minutes</strong>.</li>
            </ul>
          </div>

          {/* Submission & Participation */}
          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              3. Submission & Participation
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Only one team member should submit the abstract.</li>
              <li>The topic must fall within the specified domain.</li>
              <li>ID card is <strong>mandatory</strong> for all participants.</li>
              <li>Proper <strong>dress code</strong> must be followed.</li>
            </ul>
          </div>
        </section>
      </motion.div>
    </div>
  );
};

export default Oratio;
