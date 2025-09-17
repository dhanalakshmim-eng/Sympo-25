import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/FLIPSTER.jpg"; // Update with correct image path

const Flipster = () => {
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
          alt="FLIPSTER Event"
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
            FLIPSTER – The Tech Quiz with a Twist
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            “Flip the Quiz, Twist Your Mind!” 🎉FLIPSTER: The Ultimate Quiz Twist Challenge🎉 is an engaging and fast-paced event designed to test your knowledge, intuition, and strategic thinking. Dive into a world of logos, taglines, domains, and rapid-fire rounds where wit, teamwork, and speed will decide the leaderboard.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Event Objectives
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Encourage quick thinking and teamwork through a fun quiz format.</li>
            <li>Test participants’ ability to identify logos, taglines, and domains.</li>
            <li>Promote accuracy, speed, and strategic answering under pressure.</li>
            <li>Provide an engaging and competitive quiz experience.</li>
          </ul>
        </section>

        {/* Event Rounds */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🛠 Event Rounds
          </h2>

          <div className="mt-4">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 1: Taglines to Techlines – Your Knowledge, Your Power
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Identify taglines and technical terms from logos and pictures.</li>
              <li>Speed and accuracy are the key factors.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Decode the Clues, Defend Your Domain
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Theme: Technical Rapid Fire Round.</li>
              <li>Participants must answer quickly and strategically.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Tie-Breaker (Optional)
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Answer with the opposite or incorrect meaning under time pressure.</li>
              <li>Only the fastest team wins!</li>
            </ul>
          </div>
        </section>

        {/* Rules & Regulations */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            📜 Rules & Regulations
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each team consists of 2 participants working together.</li>
            <li>Mobiles, internet, and lifelines are prohibited. Only your brain does the heavy lifting.</li>
            <li>Judges’ decisions are final and binding.</li>
            <li>Points reward accuracy; tie-breakers reward speed.</li>
            <li>Conduct and fairness are equally important as winning.</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Judging Criteria
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Round 1: Accuracy in identifying logos and taglines.</li>
            <li>Round 2: Speed and correctness in rapid-fire answers.</li>
            <li>Tie-Breaker: Fastest correct response with twist logic.</li>
          </ul>
        </section>

        {/* About Section */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">🏆 About FLIPSTER</h2>
          <p className="text-body lg:text-2xl">
            FLIPSTER is an exciting quiz competition where you identify taglines and logos, answer tech questions, and make quick choices. Each round brings participants closer to victory while testing their knowledge, wit, and teamwork.
          </p>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            For More Information
          </h2>
          <p className="text-body lg:text-2xl">
            Student Coordinators: <br />
            <strong>Ms. Archana A P (IV CS & BS):</strong> +91 87781 08490 <br />
            <strong>Mr. Hari Haran A (IV CS & BS):</strong> +91 89392 09005
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Flipster;
