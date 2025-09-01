import React from "react";
import TrackCard from "./TrackCard.jsx";
import circuit from "../utils/Img/circuit1.png";
import noncircuit from "../utils/Img/circuit.png";
import "animate.css";

const Tracks = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-0">
      <div className="flex flex-col md:flex-row md:space-x-8 gap-4">
        <TrackCard imageSrc={circuit} heading="TRACK I" />
        <TrackCard imageSrc={noncircuit} heading="TRACK II" />
      </div>
    </div>
  );
};

export default Tracks;
