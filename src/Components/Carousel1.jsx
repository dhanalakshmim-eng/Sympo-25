import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import guest4 from "../utils/Img/banner/guest4.jpg"
import guest5 from "../utils/Img/banner/guest5.jpg"
const images = [
    guest4,
    guest5,
];

const Carousel1 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full md:h-[900px] h-[600px] overflow-hidden flex justify-center items-center md:my-5 my-2">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className="w-[1800px] h-[900px] object-contain rounded-lg shadow-lg"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
      </AnimatePresence>

      {/* Left Button */}
      <button
        className="absolute left-4 text-white p-2 rounded-full"
        onClick={prevSlide}
      >
        <ChevronLeft size={32} />
      </button>

      {/* Right Button */}
      <button
        className="absolute right-4    text-white p-2 rounded-full"
        onClick={nextSlide}
      >
        <ChevronRight size={32} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel1;
