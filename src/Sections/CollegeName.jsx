import React from 'react';
import '../text.css'; // Make sure to import your font CSS file
import 'animate.css';

const CollegeName = () => {
  return (
    <div className="text-center p-4 sm:p-6 md:p-8 lg:p-6 xl:p-6">
      <p className=" clg-font bg-blue-200 text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-0 bg-white bg-clip-text text-transparent font-otherfont animate__animated animate__fadeInUp duration-500">
        JERUSALEM COLLEGE OF ENGINEERING <br /><br />
        PRESENTS
      </p>
      {/* style={{ textShadow: '0 0 8px white' }} */}
      <h1 className="sympo-text text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold bg-white bg-clip-text text-transparent font-aboutfont animate__animated animate__fadeInUp duration-500" style={{}}>
      Technovanza'25 
      {/* <span className="lightning"></span> */}
      <br /> {/* <p className='className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-extrabold bg-white bg-clip-text text-transparent font-otherfont'>2024-'25</p> */}
      </h1>
    </div>
  );
}

export default CollegeName;