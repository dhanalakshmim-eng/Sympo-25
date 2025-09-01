import React from "react";
import { events } from "../utils/events";
const EventCard = () => {
  return (
    <div className="bg-white">
      <h2>Event</h2>
      <div className="event-card">
        <div className="m-5 h-[400px] rounded-lg shadow-2xl bg-red-500">
          <h2>Event name</h2>
          <img src="" alt="" />
          <button>Register Now</button>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
