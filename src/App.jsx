import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";
import SplashScreen from "./Components/SplashScreen";
import './styles/eventStyles.css';
import backgroundMusic from './assets/backgroundMusic.mp3'
import metallicSound from './assets/clicksound.mp3'
import useSound from "use-sound";

const App = () => {
  const [showSplash, setShowSplash] = useState(true);
  const [loading, setLoading] = useState(true);

  // background music setup (but don’t auto-play yet)
  const [playBg, { stop: stopBg }] = useSound(backgroundMusic, {
    volume: 0.2,
    loop: true,
    interrupt: true
  });

  useEffect(() => {
    const startMusicOnClick = () => {
      playBg();               // 👈 start playing
      document.removeEventListener("click", startMusicOnClick); // only once
    };

    // wait for first user click
    document.addEventListener("click", startMusicOnClick);

    return () => {
      stopBg();
      document.removeEventListener("click", startMusicOnClick);
    };
  }, [playBg, stopBg]);

  // metallic click sound (plays every click)
  useEffect(() => {
    const playSound = () => {
      const audio = new Audio(metallicSound);
      audio.currentTime = 0; // restart each time
      audio.play().catch(error =>
        console.log("Failed to play metallic sound:", error)
      );
    };

    document.addEventListener("click", playSound);

    return () => {
      document.removeEventListener("click", playSound);
    };
  }, []);

  useEffect(() => {
    const splashTimer = setTimeout(() => setShowSplash(false), 5000);
    const loaderTimer = setTimeout(() => setLoading(false), 5000);

    return () => {
      clearTimeout(splashTimer);
      clearTimeout(loaderTimer);
    };
  }, []);

  if (showSplash) {
    return <SplashScreen onFinish={() => setShowSplash(false)} />;
  }

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="text-2xl text-white">
      <Header />
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
