import React from "react";
import "../text.css";
import Lottie from "react-lottie-player";
import animationLoader from "../assets/Price/animationLoader.json";
const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-gradient-to-r from-purple-400 via-blue-500 to-indigo-600 bg-[length:200%_200%] animate-[gradientBackground_10s_ease_infinite] flex flex-col justify-center items-center p-8 relative w-full">
        {/* Background Circles */}
        <div className="absolute transform  transition-transform duration-200">
        <Lottie
          loop
          animationData={animationLoader}
          play
          style={{ width: 400, height: 400   }}
        />

        </div>

        {/* Title Section */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-extrabold text-gradient bg-gradient-to-r from-purple-400 to-blue-600 mt-4">
            FLARENDO '24
          </h1>

          <p className="mt-4 text-xl text-blue-100 italic">
            Let's make a tech move!
          </p>
        </div>

        {/* Date */}
        <div className="mt-6 text-2xl text-white">August 28, 2024</div>

        {/* Explore Button */}
        <div className="mt-10">
          <button className="text-lg py-3 px-8 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-full shadow-lg glow-neon transition-transform transform hover:scale-110 glow-neon ">
            Explore Our Events
          </button>
        </div>

        {/* Glassmorphism Card */}
        <div className="mt-12 backdrop-filter backdrop-blur-lg bg-white bg-opacity-10 p-8 rounded-lg shadow-lg">
          <p className="text-white">Exclusive Symposium Features</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
