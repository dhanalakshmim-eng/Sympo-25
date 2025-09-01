import React from "react";
import { motion } from "framer-motion"; // For animations
import ncse from "../utils/Img/ncse.jpeg";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      {/* About NCSE Symposium */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}   // Card fades in from below on load
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
        className="bg-transparent outline outline-white outline-1 rounded-lg shadow-lg overflow-hidden transition-transform duration-500 max-w-2xl"
      >
        <h2 className="text-3xl text-center text-white font-semibold p-4 border-b border-gray-700">
          About Our NCSE Symposium
        </h2>
        
        <motion.img
          src={ncse}
          alt="About NCSE"
          className="w-full h-64 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Animate text when it enters the viewport */}
        <motion.div
          initial={{ x: -200, opacity: 0 }} // Start off-screen to the left
          whileInView={{ x: 0, opacity: 1 }} // Slide in from left when in view
          transition={{ duration: 1 }} // Smooth animation
          viewport={{ once: true }} // Animation happens once when it comes into view
          className="p-6 text-gray-300"
        >
          <p className="text-lg leading-relaxed">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            voluptatem asperiores modi nulla labore possimus corrupti provident
            beatae molestiae dolorum accusantium quaerat nostrum repellat eum
            laboriosam veniam porro impedit iste deserunt pariatur voluptatibus
            reiciendis, consequatur laborum. Corrupti rem unde placeat.
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default About;
