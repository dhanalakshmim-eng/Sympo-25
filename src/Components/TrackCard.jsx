// import React from 'react';
// import "./styles/TrackCard.css";

// const TrackCard = ({ imageSrc, heading }) => (
//     <div className="trackcard">
//       <img src={imageSrc} alt="" className="trackimage" />
//       <div className="heading">{heading}</div>
//     </div>
//   );

// export default TrackCard;
import React from "react";
import { motion } from "framer-motion";
import "./styles/TrackCard.css";

const TrackCard = ({ imageSrc, heading, index }) => {
  return (
    <motion.div
      className="trackcard"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 + index * 0.12, duration: 0.8 }}
    >
      <img src={imageSrc} alt={heading} className="trackimage" />
      <div className="heading">{heading}</div>
    </motion.div>
  );
};

export default TrackCard;
