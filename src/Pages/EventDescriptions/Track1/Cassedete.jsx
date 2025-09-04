import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import JigsawImage from "../../../assets/symposium/cassedete.jpg";

const Cassedete = () => {
  const tiltRefJigsaw = useRef(null);

  useEffect(() => {
    if (tiltRefJigsaw.current) {
      VanillaTilt.init(tiltRefJigsaw.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col gap-12 max-w-7xl mx-auto p-6">
      {/* Jigsaw */}
      <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
        <motion.div
          ref={tiltRefJigsaw}
          className="lg:w-1/2 w-full flex justify-center items-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={JigsawImage}
            alt="Jigsaw"
            className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        <motion.div
          className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
          style={{ maxHeight: "calc(100vh - 100px)" }}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Casse-Dete
          </h1>

          <section className="text-gray-300 text-justify">
            <h2 className="text-xl md:text-2xl font-bold gradient-text">
              Rules and Regulations
            </h2>
            <ul className="list-disc list-inside">
              <li>The participants must pair up as a team, a team must not exceed more than two members.</li>
              <li>Any malpractice of participants at the time of events/rounds may lead to disqualification. </li>
            </ul>
          </section>

          <section className="text-gray-300 mt-4">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold gradient-text">
              Round Details
            </h2>
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-200">Round 1: Qualifying Round</h3>
              <ul className="list-disc list-inside ml-6">
                <li>This round will test your knowledge of circuit theory, electronic components, power systems, control loops, and much more.</li>
                <li>Answer trivia questions as quickly as possible and compete for the top spot in this fast-paced quiz on Kahoot!</li>
                <li>Top 10 teams will qualify for the Round 2.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-200">Round 2: Elimination Round</h3>
              <ul className="list-disc list-inside ml-6">
                <li>In this round, your expertise in circuit engineering will be tested in a crossword puzzle filled with essential engineering terms.</li>
                <li>Fill in the grid with key concepts from various branches of circuit engineering.</li>
                <li>Top 5 teams will be qualified for Round 3.</li>
              </ul>
            </div>
            <div className="mt-4">
              <h3 className="text-lg md:text-xl font-semibold text-gray-200">Round 3: Final Round</h3>
              <ul className="list-disc list-inside ml-6">
                <li>Round off the event by putting skills to the ultimate test with a jigsaw puzzle. </li>
                <li>The participants will be piecing together parts of a circuit components or equipment.</li>
                <li>Work quickly to assemble the components and form a complete, working schematic.</li>
                <li>The top 2 teams will be selected as the winner and the runner.</li>
              </ul>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
};

export default Cassedete;
