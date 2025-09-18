import React from "react";
import { Link } from "react-router-dom";

const Teams = () => {
  return (
    <footer className="bg-transparent text-white px-8 sm:px-36 py-4">
      <div className="container mx-auto flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
        {/* Left Section */}
        <div className="text-sm text-center sm:text-left px-2 sm:px-10">
          &copy; {new Date().getFullYear()} Technovanza<sup className="text-sup">TM</sup> All rights reserved.
        </div>

        {/* <div className="text-sm">
          Powered by <span className="font-bold">React JS</span>
        </div> */}

        <div className="text-sm text-center sm:text-left">
          Developed by <Link to="/teams"><span className="font-bold">Technovanza Team</span></Link>
        </div>
      </div>
    </footer>
  );
};

export default Teams;
