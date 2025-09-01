import React from "react";
import collegeImg from "../utils/Img/college.png";

const InfoSections = () => {
  return (
    <>
      <h2 className="text-3xl font-bold text-center text-white mb-6">
        Event Details
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-transparent">
        
        {/* College Section */}
        <div className="college bg-transparent outline outline-white outline-1 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">
              <img src={collegeImg} alt="College" className="w-24 h-24" />
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">
              Jerusalem College of Engineering
            </h2>
            <p className="text-gray-400 text-lg">
              Velachery main road, Narayanapuram, Pallikaranai, Chennai
            </p>
          </div>
        </div>

        {/* Timing Section */}
        <div className="timing bg-transparent outline outline-white outline-1 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4 text-greenblue">
              ⏰ {/* Replace with an actual icon if desired */}
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Timings</h2>
            <p className="text-gray-400 text-lg">September 27, 28 2024</p>
          </div>
        </div>

        {/* Food Section */}
        <div className="food bg-transparent outline outline-white outline-1 shadow-lg rounded-lg p-6 transform hover:scale-105 transition-all duration-300">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4 text-pink">
              🍽️ {/* Replace with an actual icon if desired */}
            </div>
            <h2 className="text-lg font-semibold text-white mb-2">Food</h2>
            <p className="text-gray-400 text-lg">
              Cafeteria available with vegetarian options
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default InfoSections;
