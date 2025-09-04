import React, { useState, useEffect } from "react";
import CollegeName from "../Sections/CollegeName";

import Faq from "../Sections/Faq";
import NewAbout from "./About";
import CountdownTimer from "../Sections/CountDown";
import Footer from "../Sections/Footer";




import EventButton from "../Components/EventButton";

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
      <div className="mt-small">
      <CollegeName />
      <div className="flex flex-wrap justify-center gap-5 my-5 animate__animated animate__fadeInUp duration-500">
        <Link to="/events">
          <EventButton label="Explore" />
        </Link>
      </div>

      <CountdownTimer />
      </div>
      
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      <NewAbout />
      <hr className="border-t-2 border-gray-400 w-3/4 mx-auto my-10" />
      {/* <HomeEventDetails />
      <InfoSections />
      <TeamCarousel /> */}
      <OverallGuest />
      <Carousel1 />
      <Carousel />
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
