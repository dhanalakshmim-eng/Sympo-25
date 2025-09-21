import React from "react";
import "./MediaSection.css";

const MediaSection = () => {
  const redirectTo = (url) => {
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="container flex justify-center">
      <div className="flex flex-col  justify-center">
        <h1 className="text-xl md:text-2xl text-center text-[#ff00cc] 
                       bg-gradient-to-br from-[#e8bcb9] to-[#ae445a] 
                       bg-clip-text text-transparent font-sans font-semibold 
                       py-4 px-4">
          Connect with us online.
        </h1>

        <div className="media-container flex gap-4">
          {/* Instagram Button */}
          <button
            className="media"
            aria-label="Instagram"
            onClick={() =>
              redirectTo(
                "https://www.instagram.com/jerusalem_chn?igsh=NHZxNnI4emlkOW1k"
              )
            }
          >
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              height="24"
              width="24"
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-gray-800 dark:text-white"
            >
              <path
                clipRule="evenodd"
                d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
                fillRule="evenodd"
              />
            </svg>
          </button>

          {/* LinkedIn Button */}
          <button
            className="media"
            aria-label="LinkedIn"
            onClick={() =>
              redirectTo(
                "https://www.linkedin.com/in/jce-jerusalem-college-of-engineering-19681522b/"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
              height="24"
              width="24"
              fill="currentColor"
            >
              <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.9a53.72 53.72 0 1153.72-53.72 53.72 53.72 0 01-53.72 53.72zM447.9 448h-92.68V302.4c0-34.7-12.41-58.4-43.48-58.4-23.7 0-37.78 15.93-43.98 31.28-2.26 5.47-2.82 13.08-2.82 20.74V448h-92.67s1.24-261.1 0-288h92.68v40.8c12.32-19 34.42-46 83.55-46 60.94 0 106.6 39.73 106.6 125.12z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaSection;
