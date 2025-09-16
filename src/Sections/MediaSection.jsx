import React from 'react';
import './MediaSection.css';

const MediaSection = () => {
  const redirectTo = (url) => {
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="flex flex-col items-start">
      <h1 className="text-xl sm:text-1xl md:text-2xl lg:text-2xl xl:text-2xl text-center text-[#ff00cc] bg-gradient-to-br from-[#e8bcb9] to-[#ae445a] bg-clip-text text-transparent font-sans font-semibold py-4 px-4">
        Connect with us online.
      </h1>
      <div className="media-container">
        {/* Instagram Button */}
        <button
          className="media"
          onClick={() => redirectTo('https://www.instagram.com/technovanza_2k_25')}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            height="24"
            width="24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            className="w-6 h-6 text-gray-800 dark:text-white"
          >
            <path
              clipRule="evenodd"
              d="M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5V8Zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H8Zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1ZM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0Z"
              fillRule="evenodd"
              fill="currentColor"
            ></path>
          </svg>
        </button>

        {/* Linkedin Button */}
        <button
          className="media"
          onClick={() => redirectTo('https://www.linkedin.com/in/jce-jerusalem-college-of-engineering-19681522b/')}
        >
          <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 448 512"
  height="24"
  width="24"
  fill="currentColor"
>
  <path d="M100.28 448H7.4V148.9h92.88zm-46.44-340.9a53.72 53.72 0 1153.72-53.72 53.72 53.72 0 01-53.72 53.72zM447.9 448h-92.68V302.4c0-34.7-12.41-58.4-43.48-58.4-23.7 0-37.78 15.93-43.98 31.28-2.26 5.47-2.82 13.08-2.82 20.74V448h-92.67s1.24-261.1 0-288h92.68v40.8c-0.18 0.3-0.43 0.61-0.61 0.91h0.61v-0.91c12.32-19 34.42-46 83.55-46 60.94 0 106.6 39.73 106.6 125.12z" />
</svg>
        </button>

        {/* Twitter Button */}
        <button
          className="media"
          onClick={() => redirectTo('https://x.com/jerusalem_chn?s=21')}
        >
          <svg
            viewBox="0 0 512 512"
            height="1.7em"
            xmlns="http://www.w3.org/2000/svg"
            className="svgIcontwit"
            fill="white"
          >
            <path
              d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"
            ></path>
          </svg>
        </button>

        {/* Facebook Button */}
        <button
          className="media"
          onClick={() => redirectTo('https://m.facebook.com/jerusalem.chn/')}
        >
          <svg
            height="24"
            viewBox="0 0 320 512"
            fill="currentColor"
            width="24"
          >
            <path
              d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
            ></path>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default MediaSection;
