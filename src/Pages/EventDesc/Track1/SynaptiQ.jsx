import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/SynaptiQ.png";

const SynaptiQ = () => {
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
          alt="SynaptiQ Event"
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
            SynaptiQ: Multi-Round Technical Event
          </span>
        </h1>

        {/* Event Description */}
        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            SynaptiQ is a multi-round technical event designed to test participants’
            logical thinking, debugging ability, coding skills, and creative problem-solving
            using Generative AI tools. With a mix of aptitude, programming, and
            prompt-engineering challenges, this event will push participants to think
            critically, adapt quickly, and showcase their innovative edge.
          </p>
        </section>

        {/* Event Objectives */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🎯 Event Objectives
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Evaluate analytical and debugging skills through practical code challenges.</li>
            <li>Enhance algorithmic problem-solving ability in real-world scenarios.</li>
            <li>Encourage creativity and precision through prompt engineering in Generative AI.</li>
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
              Round 1: Quickbit (Syntax & Sense)
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Format: Multiple-choice & short-answer challenges.</li>
              <li>Tasks include identifying correctness of code, debugging, aptitude questions.</li>
              <li>Top performers advance to Round 2.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 2: Decypher (Coding & Algorithms)
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Format: Multi-level coding challenge.</li>
              <li>Basic: Solve a simple problem.</li>
              <li>Intermediate: Apply logic to a slightly complex problem.</li>
              <li>Advanced: Implement the final working code.</li>
              <li>Successful participants proceed to the final round.</li>
            </ul>
          </div>

          <div className="mt-6">
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Round 3: Gen AI Verse (Prompt Engineering Challenge)
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Format: AI-based creative task.</li>
              <li>Task: Recreate an image using the right prompt with an AI tool.</li>
              <li>Judged on similarity and accuracy of components.</li>
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
            <li>Participants may bring their own laptops.</li>
            <li>Mobile phones are strictly prohibited during the event.</li>
            <li>Event is time-bound in all rounds.</li>
            <li>Any malpractice or plagiarism leads to disqualification.</li>
            <li>Judges’ decision will be final and binding.</li>
          </ul>
        </section>

        {/* Judging Criteria */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            🏆 Judging Criteria
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Round 1: Accuracy + Speed.</li>
            <li>Round 2: Correctness of algorithm + Efficiency of solution.</li>
            <li>Round 3: Prompt quality + Similarity of generated image.</li>
          </ul>
        </section>

        {/* Contact Info */}
        <section className="text-gray-300">
          <h2 className="text-head lg:text-3xl font-bold mb-2 gradient-text">
            For More Information
          </h2>
          <p className="text-body lg:text-2xl">
            Student Coordinators: <br />
            <strong>Ms. Gopika G:</strong> +91 6385636336 <br />
            <strong>Mr. Hemachandiran R:</strong> +91 9840963827
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default SynaptiQ;
