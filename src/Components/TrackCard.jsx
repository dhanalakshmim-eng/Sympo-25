import React from 'react';
import "./styles/TrackCard.css";

const TrackCard = ({ imageSrc, heading }) => (
    <div className="trackcard">
      <img src={imageSrc} alt="" className="trackimage" />
      <div className="heading">{heading}</div>
    </div>
  );

export default TrackCard;
