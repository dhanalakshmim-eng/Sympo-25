import React, { useEffect, useRef, useState } from "react";
import "./styles/animation.css";
import VanillaTilt from "vanilla-tilt";
import Image from "../assets/symposium/Logo/spidy logo.png";
import CollegeNormal from "../assets/symposium/Logo/nocol.png";
import CollegeColorful from "../assets/symposium/Logo/col.png";
import S1Normal from "../assets/symposium/Logo/s1nocol.png";
import S1Colorful from "../assets/symposium/Logo/s1col.png";

const CrossfadeImage = ({ plain, colorful, height = 600 }) => {
  const containerRef = useRef(null);
  const [showColorful, setShowColorful] = useState(false);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setShowColorful(entry.isIntersecting);
        });
      },
      {
        threshold: 0.5, // At least half in viewport to trigger
      }
    );
    if (containerRef.current) {
      observer.observe(containerRef.current);
    }
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`w-full relative flex justify-center mb-8`}
      style={{ height: `${height}px` }}
    >
      <img
        src={plain}
        alt="College Building"
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 absolute top-0 left-0 ${
          showColorful ? "opacity-0" : "opacity-100"
        }`}
        style={{ zIndex: 2 }}
      />
      <img
        src={colorful}
        alt="College Building Colorful"
        className={`w-full h-full object-cover rounded-xl transition-opacity duration-700 absolute top-0 left-0 ${
          showColorful ? "opacity-100" : "opacity-0"
        }`}
        style={{ zIndex: 1 }}
      />
    </div>
  );
};

const NewAbout = (props) => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: false,
      });
    }
  }, []);

  return (
    <div className="flex flex-col items-center py-10">
      {/* Glassmorphic Technovanza */}
      <div className="glassmorphic-container p-6 md:p-10 w-full max-w-5xl mb-16">
        <h1 className="text-5xl md:text-5xl text-lg mb-5 leading-relaxed text-left">
          About
        </h1>
        <h2 className="text-3xl md:text-5xl font-aboutfont tracking-widest text-left">
          TECHNOVANZA <span> 2025- '26</span>
        </h2>
        <div className="flex flex-col md:flex-row items-center w-full">
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
          <div
            ref={tiltRef}
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
    <br />
    <br />
      {/* College Section 1 */}
      {!props.about && <div className="m-0 p-0">
      <div className="w-full max-w-7xl p-6 md:p-10 flex flex-col md:flex-row items-center">
        {/* Image Left */}
        <div className="md:w-[65%] w-full mb-6 md:mb-0 md:mr-8">
          <CrossfadeImage
            plain={CollegeNormal}
            colorful={CollegeColorful}
            height={600}
          />
        </div>
        {/* Text Right */}
        <div className="md:w-[35%] w-full text-lg leading-relaxed text-justify px-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
            About Our College
          </h2>
          <p className="mb-4">
Jerusalem College of Engineering, Chennai, established in 1995, is a premier autonomous institution affiliated with Anna University and approved by AICTE. Located in Pallikaranai, Chennai, the college offers a wide range of undergraduate, postgraduate, and doctoral programs in engineering, technology, computer applications, and management. Accredited by NAAC and NBA, it provides quality education grounded in ethical values.          </p>
          <p className="mb-4">
The college fosters research, entrepreneurship, and industry collaboration, supported by experienced faculty and modern infrastructure. With specialized courses in fields like Artificial Intelligence, Data Science, and Cyber Security, Jerusalem College of Engineering prepares students for successful careers and meaningful societal contributions.          </p>

        </div>
      </div>

      {/* College Section 2 */}
      <div className="w-full max-w-7xl p-6 md:p-10 flex flex-col md:flex-row items-center">
        {/* Image Left */}
        <div className="md:w-[65%] w-full mb-6 md:mb-0 md:mr-8">
          <CrossfadeImage
            plain={S1Normal}
            colorful={S1Colorful}
            height={600}
          />
        </div>
        {/* Text Right */}
        <div className="md:w-[35%] w-full text-lg leading-relaxed text-justify px-4 flex flex-col justify-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-left">
            Campus Life
          </h2>
          <p className="mb-4">
Jerusalem College of Engineering offers a vibrant campus life with a strong emphasis on holistic student development. The college provides excellent infrastructure including smart classrooms, well-equipped laboratories, a spacious library, hostels, sports complexes, and a cafeteria. Students actively participate in various cultural, technical, and sports events, as well as clubs and societies like the National Service Scheme (NSS), Rotaract Club, and Tamil Mandram.          </p>
          <p>
The college promotes physical fitness through sports such as volleyball, basketball, cricket, and football, fostering team spirit and healthy competition. Regular symposiums, workshops, and cultural fests enrich the campus experience, encouraging creativity and leadership. Supported by a dedicated faculty and modern facilities, student life at Jerusalem College of Engineering is dynamic, inclusive, and nurturing for future professionals.          </p>
        </div>
      </div>
      </div>}
    </div>
  );
};

export default NewAbout;