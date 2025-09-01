import React, { useState, useEffect } from "react";
import CollegeName from "./CollegeName";
import Loading from "./Loading"; // Import the loader
import Faq from "./Faq";
import NewAbout from "./NewAbout";
import CountdownTimer from "./CountDown";
import Footer from "./Footer";
import Highlight from "./Highlight";
import TeamCarousel from "./TeamCarousel";
import InfoSections from "./InfoSections";
import HomeEventDetails from "./HomeEventDetails";
import NeonButton from "./NeonButton";
import EventButton from "./EventButton";
import EventCardDesign from "./EventCardDesign";
import Card from "./Card";
import MediaSection from "./MediaSection";
import ContactUs from "./ContactUs";
import LocateMap from "./LocateMap";
import Teams from "./Teams";
import "animate.css";
import { Link } from "react-router-dom";
import Carousel from "./Carousel";
import OverallGuest from "./OverallGuest";
import Carousel1 from "./Carousel1";

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
