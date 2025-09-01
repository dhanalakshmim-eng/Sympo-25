import React from "react";
import { useState,useEffect } from "react";
import "./App.css";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";
import Loading from "./Components/Loading";
const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false); // Hide loader after 2 seconds
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loading />; // Display loader while loading is true
  }
  return (
    <div className="text-2xl    text-white">
      <Header />

      {/* mb-20 removed due to the white space */}
      <div className="">
        <Outlet />
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default App;
