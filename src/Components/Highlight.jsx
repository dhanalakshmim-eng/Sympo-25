import React from "react";
import img from "../utils/image.png"
const Highlight = () => {
  return (
    <div className="py-16 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-900">
        Symposium Highlights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">Workshops</h3>
          <p className="text-gray-600 mt-2">
            Learn from experts in various fields.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">Competitions</h3>
          <p className="text-gray-600 mt-2">
            Compete and showcase your skills.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-2xl transform hover:scale-105 transition-transform">
          <h3 className="text-xl font-semibold">Keynote Speakers</h3>
          <p className="text-gray-600 mt-2">Hear from thought leaders.</p>
        </div>
      </div>
      <div className="py-16 bg-white">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Keynote Speakers
        </h2>
        <div className="flex overflow-x-scroll space-x-6 mt-8">
          <div
            className="w-64 h-64 rounded-full bg-cover bg-center"
            style={{ backgroundImage: img }}
          >
            <h3 className="text-xl text-center mt-4">Speaker 1</h3>
          </div>
          <div
            className="w-64 h-64 rounded-full bg-cover bg-center"
            style={{ backgroundImage: `url('/speaker2.jpg')` }}
          >
            <h3 className="text-xl text-center mt-4">Speaker 2</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlight;
