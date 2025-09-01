import React, { useState, useEffect } from "react";
import 'animate.css';

const CountdownTimer = () => {
  const calculateTimeLeft = () => {
    const eventDate = new Date("2025-02-15T00:00:00").getTime();
    const currentTime = new Date().getTime();
    const difference = eventDate - currentTime;

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    const formattedTimeLeft = {
      days: timeLeft.days < 10 ? `0${timeLeft.days}` : timeLeft.days,
      hours: timeLeft.hours < 10 ? `0${timeLeft.hours}` : timeLeft.hours,
      minutes: timeLeft.minutes < 10 ? `0${timeLeft.minutes}` : timeLeft.minutes,
      seconds: timeLeft.seconds < 10 ? `0${timeLeft.seconds}` : timeLeft.seconds,
    };
    return formattedTimeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col justify-center items-center text-white animate__animated animate__fadeInUp duration-500">
      <br />
      {/* <h1>FEB 15, 2025</h1> */}
      <h1 className="text-xl sm:text-1xl md:text-1xl lg:text-1xl xl:text-2xl font-otherfont font-extrabold py-6 sm:py-3 lg:py-1 animate-pulse text-center">
      THE BIG MOMENT IS COMING...<br /><sup className="text-sm">Feb 15, 2025</sup>
      </h1>
      <div className="grid grid-cols-4 gap-4 text-center m-3">
        <div className="bg-transparent rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
          <p className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-4 pt-2 font-semibold countdown font-mono animate-pulse font-timerfont">
            {timeLeft.days}
          </p>
          <p className="mt-2 text-xs px-4 pb-2 uppercase font-timerfont">Days</p>
        </div>
        <div className="bg-transparent rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
          <p className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-4 pt-2 font-semibold countdown font-mono animate-pulse font-timerfont">
            {timeLeft.hours}
          </p>
          <p className="mt-2 text-xs px-4 pb-2 uppercase font-timerfont">Hours</p>
        </div>
        <div className="bg-transparent rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
          <p className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-4 pt-2 font-semibold countdown font-mono animate-pulse font-timerfont">
            {timeLeft.minutes}
          </p>
          <p className="mt-2 text-xs px-4 pb-2 uppercase font-timerfont">Minutes</p>
        </div>
        <div className="bg-transparent rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-500 ease-out">
          <p className="text-3xl sm:text-3xl md:text-5xl lg:text-5xl xl:text-5xl px-4 pt-2 font-semibold countdown font-mono animate-pulse font-timerfont">
            {timeLeft.seconds}
          </p>
          <p className="mt-2 text-xs px-4 pb-2 uppercase font-timerfont">Seconds</p>
        </div>
      </div>
    </div>
  );
};

export default CountdownTimer;
