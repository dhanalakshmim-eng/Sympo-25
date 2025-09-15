import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
// import EventImage from "../../assets/symposium/VizYourWay.png"; // Replace with your actual image
import EventImage from "../../../assets/symposium/Old/vizyour.jpeg";
import "./VizYourWay.css"; // Using the same CSS file as Eloquence

const VizYourWay = () => {
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
          alt="Viz Your Way Event"
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
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Viz Your Way: Data Visualization Competition
          </span>
        </h1>
        {/* <p className="text-gray-300">
          <strong>Date:</strong> <br />
          <strong>Time:</strong> _________<br />
          <strong>Venue:</strong> _________<br />
          <strong>Team Size:</strong> 2 members per team
        </p> */}

        {/* Description Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Description
          </h2>
          <p className="text-body lg:text-2xl">
            Viz Your Way is an engaging two-round competition that tests
            participants' knowledge and creativity in data analysis and
            visualization:
          </p>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>
              <strong>Round 1: Quiz Quest</strong> - A rapid-fire quiz session
              where teams answer a series of questions to earn points. The top
              15 teams qualify for the next round.
            </li>
            <li>
              <strong>Round 2: Data Visualization</strong> - Teams analyze a
              dataset and create visually appealing and informative graphics to
              present their insights effectively.
            </li>
          </ul>
        </section>

        {/* Rules and Regulations Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Rules and Regulations
          </h2>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 gradient-text">
            Round 1: Quiz Quest
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Participants will be presented with a series of questions.</li>
            <li>A strict time limit will be enforced for answering.</li>
            <li>Points are awarded for correct answers.</li>
            <li>The top 15 teams will qualify for Round 2.</li>
          </ul>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 gradient-text">
            Round 2: Data Visualization
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>A dataset will be provided at the start of the round.</li>
            <li>
              Participants must create visuals analyzing the dataset using tools
              like Python, Excel, Tableau, Power BI, etc.
            </li>
            <li>
              All visualizations must be presented on a single page with a small
              description or summary.
            </li>
            <li>
              Visuals must be clear, understandable, and informative.
            </li>
            <li>
              Participants are encouraged to use a variety of charts and graphs
              to communicate their findings.
            </li>
            <li>A total of 20 minutes will be allotted for this round.</li>
            <li>The final decision will be made by the judges.</li>
          </ul>
          <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 gradient-text">
            General Rules
          </h3>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Each team should comprise 2 members.</li>
            <li>Gadget usage is strictly prohibited.</li>
            <li>Each round is strictly time-bound.</li>
          </ul>
        </section>

        {/* Enquiry Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For Enquiry:
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Vishalini R :</strong> +91 70101 11064<br />
            <strong>Kavinya P :</strong>+91 63828 92263 
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default VizYourWay;
