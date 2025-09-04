import React from "react";
import { techEventsData } from "../utils/techEvents";
import { Link } from "react-router-dom";
import "./styles/TechEvent.css"; // Link the custom CSS
import Button from "../Components/Button";
const TechEvent = () => {
  return (
    <div className="max-w-7xl mx-auto p-6 card">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {techEventsData.map((techEvent) => (
          <Link
            to={`/events/tech/${techEvent.id}`}
            key={techEvent.id}
            className="group"
          >
            {/* Animated Border Card */}
            <div className="relative p-1">
              {/* Moving border animation */}
              <div className="absolute inset-0 border-3 border-transparent rounded-lg animate-border bg-gradient-to-r from-orange-400 to-lime-500 via-cyan-400 bg-[length:200%_200%] group-hover:bg-position-animate"></div>

              {/* Card Content */}
              <div className="relative flex flex-col justify-between border border-gray-200 rounded-lg shadow-md overflow-hidden bg-white p-5 transition-transform duration-300 ease-in-out hover:scale-105">
                <div className="flex justify-center items-center">
                  <img
                    src={techEvent.image}
                    alt={techEvent.name}
                    className="w-full h-48 object-cover rounded-md"
                  />
                </div>
                <hr className="border-gray-200" />
                <div className="flex justify-center items-center p-3">
                  <Button />
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default TechEvent;
