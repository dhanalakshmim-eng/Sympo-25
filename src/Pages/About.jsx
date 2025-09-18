import React, { useEffect, useRef } from "react";
import "./styles/animation.css"; // Import the CSS for the cubes animation
import VanillaTilt from "vanilla-tilt";
import Image from "../assets/symposium/Logo/spidy logo.png";
  
const NewAbout = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    // Initialize VanillaTilt for the image container
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15, // Maximum tilt
        speed: 400, // Animation speed
        glare: false, // Add a glare effect
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Glassmorphic Container */}
      <div className="glassmorphic-container p-6 md:p-10 w-full max-w-5xl">
        {/* Heading Section */}
        <h1 className="text-5xl md:text-5xl text-lg mb-5 leading-relaxed text-left">
          About
        </h1>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-aboutfont tracking-widest text-left">
          TECHNOVANZA <span> 2025- '26</span>
        </h2>

        {/* Content Section */}
        <div className="flex flex-col md:flex-row items-center w-full">
          {/* Text Section */}
          <div className="md:w-[60%] w-full text-lg leading-relaxed text-justify px-4">
            <p>
              Technovanza is the epitome of innovation and collaboration,
              designed to foster creativity, ignite ideas, and push the
              boundaries of technology. With a focus on modern advancements, it
              stands as a beacon for tech enthusiasts, paving the way for a
              future driven by knowledge and passion.
            </p>
            <p className="mt-4">
              Join us in this journey where vision meets reality, and together,
              we shape the technology of tomorrow. Technovanza is not just an
              event; it's an experience that leaves a lasting impression.
            </p>
          </div>

          {/* Image Section */}
          <div
            // ref={tiltRef}
            className="md:w-[40%] w-full mt-6 md:mt-0 flex justify-center"
          >
            <img
              src={Image}
              alt="Technovanza Logo"
              className="max-w-full md:max-w-[80%] rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewAbout;
