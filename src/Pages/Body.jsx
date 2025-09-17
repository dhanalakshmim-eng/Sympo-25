import React, { useState, useEffect } from "react";
import CollegeName from "../Sections/CollegeName";

import Faq from "../Sections/Faq";
import NewAbout from "./About";
import CountdownTimer from "../Sections/CountDown";
import Footer from "../Sections/Footer";




import EventButton from "../Components/EventButton";
import NewButton from "../Components/Button/NewButton";

import Teams from "../Sections/Teams";
import "animate.css";
import { Link } from "react-router-dom";
import Carousel from "../Components/Carousel";
import OverallGuest from "../Sections/OverallGuest";
import Carousel1 from "../Components/Carousel1";

const Body = () => {
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => {
  //     setLoading(false); // Hide loader after 2 seconds
  //   }, 1000);

  //   return () => clearTimeout(timer);
  // }, []);

  // if (loading) {
  //   return <Loading />; // Display loader while loading is true
  // }

  return (
    <div>
      <section className="relative  w-screen h-screen flex items-center justify-center overflow-hidden ">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="b7.mp4"
        autoPlay
        loop
        muted
      />

      {/* Overlay (optional, for better text readability) */}
      <div className="absolute top-0 left-0 w-full h-screen "></div>

      {/* Hero Content */}
      <div className="mt-small">
      <CollegeName />
      <br />
      <div className="flex flex-wrap justify-center gap-5 my-1 animate__animated animate__fadeInUp duration-500">
        <Link to="/events">
          <NewButton label="Register Here" />
        </Link>
      </div>

      <CountdownTimer />
      </div>
    </section>
      
      
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <NewAbout />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      {/* <HomeEventDetails />
      <InfoSections />
      <TeamCarousel /> */}
      {/* <OverallGuest />
      <Carousel1 />
      <Carousel /> */}
      <Faq />
      {/* <MediaSection />
      <ContactUs />
      <LocateMap /> */}
      <Footer />
      <Teams />
      {/* <Teams /> */}
    </div>
  );
};

export default Body;
