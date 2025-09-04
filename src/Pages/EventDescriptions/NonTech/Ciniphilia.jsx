import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/Cinephilia.jpg";
import "./MysteryVault.css";

const Ciniphilia = () => {
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
          🎥✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Cinephilia – A Fun-Filled Game for Movie Lovers
          </span>
        </h1>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Get ready for an exciting event where your love for movies will be
            put to the ultimate test! Whether you're a fan of classics or
            blockbusters, <strong>Cinephilia</strong> is the perfect challenge
            for movie enthusiasts.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules and Regulations
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>
              <strong>Team Formation:</strong> Each team can have 2 or 3
              members. Choose your movie buffs wisely!
            </li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Event Structure
          </h2>
          <p className="text-body lg:text-2xl">
            The game consists of three thrilling rounds:
          </p>
          <ul className="list-decimal list-inside mt-4 text-body lg:text-2xl">
            <li>
              <strong>Round 1:</strong> Test your memory of iconic movie
              moments.
            </li>
            <li>
              <strong>Round 2:</strong> A rapid-fire movie quiz to challenge
              your knowledge.
            </li>
            <li>
              <strong>Round 3:</strong> Identify the Movie Snippet – Can you
              name the movie from a short scene or clip?
            </li>
          </ul>
          <p className="mt-4 text-body lg:text-2xl">
            Teams that excel in each round will move to the next stage.
          </p>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Judging
          </h2>
          <p className="text-body lg:text-2xl">
            All decisions made by the judges will be final and conclusive. Just
            play... no rewinds or replays!
          </p>
        </section>

        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            "Bring your A-game and movie enthusiasm! This event is all about fun
            and camaraderie."
          </p>
        </section>
        {/* Enquiry Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Samuel matthew :</strong> +919943084464
            <br />
          </p>
        </section>
        <footer className="text-gray-300 mt-4">
          <p className="text-center font-bold">Have Fun!</p>
        </footer>
      </motion.div>
    </div>
  );
};

export default Ciniphilia;
