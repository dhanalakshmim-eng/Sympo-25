import React from 'react';
import LocateMap from './LocateMap';
import MediaSection from './MediaSection';
import ContactUs from './ContactUs';
import "../text.css";

const Footer = () => {
  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 bg-custom-gradient text-white">
      {/* Locate Map Section */}
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <LocateMap />
      </div>

      {/* Media Section */}
      <div className="w-full md:w-1/3 flex justify-center mb-4 md:mb-0">
        <MediaSection />
      </div>

      {/* Contact Us Section */}
      <div className="w-full md:w-1/3 flex justify-center">
        <ContactUs />
      </div>
    </footer>
  );
};

export default Footer;
