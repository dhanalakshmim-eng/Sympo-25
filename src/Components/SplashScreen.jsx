import React, { useState, useEffect } from "react";

const SplashScreen = ({ onFinish }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onFinish(), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 60);

    return () => clearInterval(interval);
  }, [onFinish]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-black text-white">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-extrabold mb-6 animate-pulse tracking-widest">
        Technovanza
      </h1>

      {/* Progress Text */}
      <p className="text-lg font-mono">{progress}%</p>

      {/* Futuristic Progress Bar */}
      <div className="w-72 h-3 bg-gray-800 rounded-full overflow-hidden mt-4 border border-blue-500 shadow-[0_0_10px_#3b82f6,inset_0_0_10px_#3b82f6]">
        <div
          className="h-full bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 animate-[move_1s_linear_infinite]"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Keyframes for moving stripes */}
      <style>
        {`
          @keyframes move {
            0% { background-position: 0 0; }
            100% { background-position: 40px 0; }
          }
          div[style] {
            background-size: 40px 100%;
          }
        `}
      </style>
    </div>
  );
};

export default SplashScreen;
