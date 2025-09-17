import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track2/Nexus.jpeg";

const Nexus = () => {
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
          alt="Nexus Paper Presentation"
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
          ✨
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            NEXUS – Paper Presentation Event
          </span>
        </h1>

        {/* Objective */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Objective
          </h2>
          <p className="text-body lg:text-2xl text-justify">
            Showcase innovative ideas and research through impactful paper
            presentations, fostering creativity and knowledge sharing among
            students.
          </p>
        </section>

        {/* Themes */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📌 Themes
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>AI and Machine Learning in Medical Diagnostics</li>
            <li>Integrated Medical Data Platforms for Improved Diagnostics</li>
            <li>Big Data Analytics in Clinical Decision-Making</li>
            <li>IoT for Diagnostics and Rehabilitation Medicine</li>
            <li>Interface System for Cognitive Support</li>
            <li>Assistive Technologies and Tools</li>
            <li>Communication and Mobility Aids</li>
            <li>Telemedicine Technologies</li>
          </ul>
        </section>

        {/* Event Details */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📍 Event Details
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl space-y-2">
            <li>
              <strong>Venue:</strong> BME Department, 3rd Floor, Main Block
            </li>
            <li>
              <strong>Date:</strong> 10th October
            </li>
            <li>
              <strong>Time:</strong> 10:30 AM onwards (15 minutes for each team)
            </li>
            <li>
              <strong>Team Size:</strong> Maximum 2 Members
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📞 Contact
          </h2>
          <p className="text-body lg:text-2xl">
            Vishwa Dilip M.R – <a href="tel:+918778022625">+91 8778022625</a>
          </p>
        </section>

        {/* Footer */}
        <section className="text-gray-300">
          <p className="text-body lg:text-2xl text-justify">
            Organized under <strong>TECHNOVANZA 2025-26</strong>: An Inter
            Collegiate National Level Technical Symposium at{" "}
            <strong>Jerusalem College of Engineering, Pallikaranai, Chennai</strong>.
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Nexus;
