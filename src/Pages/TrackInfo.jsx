import React, { useEffect, useRef } from "react";
import "./styles/animation.css";
import VanillaTilt from "vanilla-tilt";
import "animate.css"
// import Image from "../assets/symposium/SymLogo.png"; // Change to the image you want to use for the poster if necessary.

const TrackInfo = ({label,Image,Description}) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 8,
        speed: 400,
        glare: false,
      });
    }
  }, []);

  return (
    <div className="bg-dark-grey text-white-grey flex flex-col items-center py-10 animate__animated animate__fadeInDown">
      <div className="p-6 md:p-10 w-full max-w-5xl">
        <h2 className="text-3xl md:text-5xl font-aboutfont tracking-widest text-center">
          {label}
        </h2>

        {/* Note Section */}
        <div className="mt-4 text-lg leading-relaxed text-justify px-4">
          <p>
            {Description}
          </p>
          <br />
          <p>
            <b>Note : </b>
            Please be advised that there will be a single registration process for all {label} events. Ensure that you complete the registration only once for {label}. <b>Scroll down to Register!!!</b>
          </p>
        </div>

        {/* Image Poster Section */}
        {/* <div className="mt-12 flex justify-center">
          
          <img
            // ref={tiltRef}
            src={Image}
            alt="Technovanza Poster"
            className="max-w-full md:max-w-[100%]"
          />
        </div> */}
      </div>
    </div>
  );
};

export default TrackInfo;
