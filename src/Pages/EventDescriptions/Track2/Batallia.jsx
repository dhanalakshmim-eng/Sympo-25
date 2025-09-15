import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import RobotImage from "../../../assets/symposium/Old/robots.png";
import "./EnergiaNova.css";

const Batallia = () => {
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
          src={RobotImage}
          alt="Batallia de Robots"
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
          🤖  
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Batallia de Robots: Speed Circuit Challenge
          </span>
        </h1>
        <section className="text-gray-300 text-justify text-body lg:text-2xl">
          <p>
            Join us for the <strong>Batallia de Robots: Speed Circuit Challenge</strong>, where participants race their custom-built robots through a thrilling obstacle course. 
          </p>
          <p>
            The event features qualifying time trials, elimination rounds, semifinals, and a final race to determine the ultimate champion. Robots must be autonomous, within specified size and weight limits, and equipped with sensors for navigation.
          </p>
          <p>
            Compete for prizes in categories like <strong>fastest robot</strong>, <strong>best design</strong>, and <strong>most innovative robot</strong>. Showcase your technical skills in this high-energy competition!
          </p>
        </section>

        <section className="text-gray-300">
          <h2>🛠️ 
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Rules and Regulations:
          </span></h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>All type of robots(racing and non-racing) can participate.</li>
            <li>Manually controlled an autonomous robots are allowed.</li>
            <li>Performance-based qualification</li>
            <li>Non-racing robot will be evaluated based on specific performance criteria
              instead of race time.
            </li>
            <li>Racing robots will still compete in speed based rounds</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2>🚦
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Round Details:[RACING]
          </span></h2>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Qualifying Round:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Racing robots gets two attempts to complete the track. Best time is recorded, Based on performance,robot will be qualified for the next round.</li>
            <li>The best time out of two attempts is recorded.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Elimination Round:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Racing robots compete in pairs, with the winner advancing.(It can be in track or in non-track based on robot)</li>
            <li>Pairings are based on qualifying times.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Finals:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Categorized robot compete in respective categories.</li>
          
          </ul>
        </section>
        <section className="text-gray-300">
          <h2>🚦
          <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
             Round Details:[NON RACING]
          </span></h2>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Qualifying Round:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Non Racing robots are tested on specific challenges like obstacle navigation,precision tasks or innovation</li>
            <li>Based on performance,robot will qualified for the next round.</li>
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Elimination Round:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>Non-racing robots are judged based on innovation,functionality and technical execution.</li>
            
          </ul>
          <h3 className="font-semibold mt-4 text-body lg:text-2xl">Finals:</h3>
          <ul className="list-disc list-inside mt-2 text-body lg:text-2xl">
            <li>The categorized robot compete in respective categories.</li>
          
          </ul>
        </section>
      </motion.div>
    </div>
  );
};

export default Batallia;
