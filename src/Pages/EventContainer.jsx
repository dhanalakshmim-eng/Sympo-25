import React from "react";
import { Link } from "react-router-dom";
import eventPoster from "../assets/symposium/Old/overallPoster.jpg";
import track1Logo from "../assets/symposium/Logo/T1.png";
import track2Logo from "../assets/symposium/Logo/T2.png";

const EventContainer = () => {
  return (
    <div className="px-5 min-h-screen flex flex-col justify-start items-center">
      {/* Poster without border or effects */}
      <div className="flex justify-center mt-10 mb-6">
        <img
          src={eventPoster}
          className="w-full h-auto sm:max-w-[360px] md:max-w-[480px] lg:max-w-[600px] xl:max-w-[800px] rounded-xl"
          alt="Event Poster"
        />
      </div>

      {/* Track Sections */}
      <div className="flex flex-col lg:flex-row gap-2 lg:gap-5 justify-center items-center">
        {/* Track I */}
        <div className="flex flex-col items-center">
          <Link to="/track1" className="mb-1">
            <img
              src={track1Logo}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-26 lg:h-26 object-contain"
              alt="Track I Logo"
            />
          </Link>
          <p className="text-black-800 font-semibold text-sm md:text-base text-center bg-white text-black">
            (AI&DS, AI&ML, CSE, CS, CSBS, IT)
          </p>
        </div>

        {/* Track II */}
        <div className="flex flex-col items-center">
          <Link to="/track2" className="mb-2">
            <img
              src={track2Logo}
              className="w-40 h-40 md:w-48 md:h-48 lg:w-26 lg:h-26 object-contain"
              alt="Track II Logo"
            />
          </Link>
          <p className="text-black-800 font-semibold text-sm md:text-base text-center bg-white text-black">
            (BME, ECE, EEE, MBA)
          </p>
        </div>
      </div>
    </div>
  );
};

export default EventContainer;
