import React from 'react';
import '../text.css'; // Import font CSS file
import 'animate.css';

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
      {/* College Name */}
      <h1 className="clg-font border border-orange-300 bg-blue-200 rounded-2xl 
        text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl 
        font-extrabold mb-0 bg-white bg-clip-text text-transparent font-otherfont 
        animate__animated animate__fadeInUp duration-500">
        JERUSALEM COLLEGE OF ENGINEERING
      </h1>

      <br />

      {/* Presents */}
      <h2 className="clg-font 
        text-base sm:text-lg md:text-xl lg:text-2xl 
        font-bold bg-white bg-clip-text text-transparent font-otherfont 
        animate__animated animate__fadeInUp duration-500">
        PRESENTS
      </h2>

      <br />

      {/* Symposium Title */}
      <h1 className="sympo-text 
        text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
        font-extrabold bg-white bg-clip-text text-transparent font-aboutfont 
        animate__animated animate__fadeInUp duration-500">
        Technovanza'25
      </h1>
    </div>
  );
};

export default CollegeName;
