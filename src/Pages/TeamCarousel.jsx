import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./styles/Contact.css"; 
import "../text.css";
import vinoth from "../utils/Img/vinoth.jpg";
import shifan from "../utils/Img/shifan.jpg";
import Damo from "../utils/Img/damo.jpg";
const teamMembers = [
  {
    name: "Damodharan",
    image: Damo,
    year: "4th Year",
    dept: "CSE",
    linkedIn: "https://www.linkedin.com/in/",
  },
  {
    name: "Vinoth",
    image: vinoth,
    year: "3rd Year",
    dept: "CSE",
    linkedIn: "https://www.linkedin.com/in/thevinoth",
  },
  {
    name: "Shifan",
    image: shifan,
    year: "2nd Year",
    dept: "CSE",
    linkedIn: "https://www.linkedin.com/in/shifan-mts",
  },
  
];

// Next arrow
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-transparent outline outline-white outline-1 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 5l7 7-7 7"
        />
      </svg>
    </div>
  );
};

// Custom Previous Arrow
const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <div
      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-transparent outline outline-white outline-1 text-white p-2 rounded-full cursor-pointer z-10 hover:bg-gray-700"
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M15 19l-7-7 7-7"
        />
      </svg>
    </div>
  );
};

const TeamCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 640, // Mobile
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 700, // Tablet and Desktop
        settings: {
          slidesToShow: 3,
        },
      },
    ],
  };

  return (
    <div className="py-10 relative">
      <h2 className="text-center roboto-slab-500 text-3xl tracking-widest">Developers</h2>
      <Slider {...settings}>
        {teamMembers.map((member, index) => (
          <div key={index} className="p-4">
            <div className="anim-card bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 mx-auto max-w-xs">
              <img
                src={member.image}
                alt={`${member.name}'s Avatar`}
                className="w-36 h-36 mx-auto mb-4 object-cover bg-cover"
              />
              <h3 className="text-xl font-semibold text-center text-white">
                {member.name}
              </h3>
              <p className="text-gray-400 text-lg text-center">{`${member.year} - ${member.dept}`}</p>
              <div className="flex justify-center mt-2 ">
                <a
                  href={member.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    className="h-7 w-7 text-3xl text-blue-400"
                    fill="currentColor"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.547 3c.406 0 .75.133 1.031.398.281.266.422.602.422 1.008v15.047c0 .406-.14.766-.422 1.078a1.335 1.335 0 0 1-1.031.469h-15c-.406 0-.766-.156-1.078-.469C3.156 20.22 3 19.86 3 19.453V4.406c0-.406.148-.742.445-1.008C3.742 3.133 4.11 3 4.547 3h15zM8.578 18V9.984H6V18h2.578zM7.36 8.766c.407 0 .743-.133 1.008-.399a1.31 1.31 0 0 0 .399-.96c0-.407-.125-.743-.375-1.009C8.14 6.133 7.813 6 7.406 6c-.406 0-.742.133-1.008.398C6.133 6.664 6 7 6 7.406c0 .375.125.696.375.961.25.266.578.399.984.399zM18 18v-4.688c0-1.156-.273-2.03-.82-2.624-.547-.594-1.258-.891-2.133-.891-.938 0-1.719.437-2.344 1.312V9.984h-2.578V18h2.578v-4.547c0-.312.031-.531.094-.656.25-.625.687-.938 1.312-.938.875 0 1.313.578 1.313 1.735V18H18z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default TeamCarousel;