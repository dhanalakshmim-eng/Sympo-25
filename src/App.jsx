import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./Sections/Header";
import Footer from "./Sections/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";
import SplashScreen from "./Components/SplashScreen";

const App = () => {
  const [showSplash, setShowSplash] = useState(true); // splash first
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Hide splash after 2s
    const splashTimer = setTimeout(() => setShowSplash(false), 5000);

    // Hide loader after 3s (adjust as needed)
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
