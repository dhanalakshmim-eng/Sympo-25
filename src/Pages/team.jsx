import React, { useState, useEffect } from "react";
import Shifan from "../Pages/contributors image/shifan.jpg"
import kishor from"../pages/contributors image/kishorr jj.jpg"
import dhana from "../pages/contributors image/dhana.jpg"
import angel from "../pages/contributors image/angeline.jpg"
import nithi from "../Pages/contributors image/ntihi.jpg"
import akela from "../Pages/contributors image/akela.jpg"
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TeamMember = ({ member, index }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), index * 100);
    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      className={`card-gradient card-hover glow-effect floating rounded-2xl p-6 text-center transform transition-all duration-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ animationDelay: `${index * 0.5}s` }}
    >
      <div className="relative mb-6">
        <div className="w-32 h-32 mx-auto rounded-2xl overflow-hidden pulse-glow">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
            onError={(e) => {
              e.target.src = "";
              e.target.style.display = "none";
              e.target.nextElementSibling.style.display = "flex";
            }}
          />
          <div className="w-full h-full bg-gradient-to-br from-purple-400 to-pink-400 hidden items-center justify-center text-white text-2xl font-bold">
            {member.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        </div>
      </div>

      <h3 className="text-xl font-bold text-white mb-2 hover:text-orange-300 transition-colors duration-300">
        {member.name}
      </h3>

      <p className="text-gray-300 text-sm mb-4 leading-relaxed">
        {member.description}
      </p>

      <div className="flex justify-center space-x-4">
        <a
          href={member.github}
          className="social-icon bg-gray-800 hover:bg-gray-700 text-white p-3 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="fab fa-github text-lg"></i>
        </a>
        <a
          href={member.linkedin}
          className="social-icon bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full"
          target="_blank"
          rel="noopener noreferrer"
          
        >
          <i className="fab fa-linkedin text-lg"></i>
        </a>
      </div>
    </div>
  );
};

const TeamPage = () => {
  const teamMembers = [
    {
      name: "MOHAMED SHIFAN A",
      image: Shifan,
      github: "https://github.com/alexjohnson",
      linkedin: "https://in.linkedin.com/in/shifan-mts",
    },
    {
      name: "KISHORE J J",
      image: kishor,
      github: "https://github.com/KishorJJ11",
      linkedin:"https://www.linkedin.com/in/kishorjj/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },

    {
      name: "NITHiYAGANESH S",
      image: nithi,
      github: "https://github.com/31Nithiyaganesh",
      linkedin: "https://www.linkedin.com/in/nithiyaganesh-s-70996935a/",
      
    },
    
    {
      name: "DHANA LAKSHMI M",
      image: dhana,
      github: "https://github.com/dhanalakshmim-eng",
      linkedin: "https://www.linkedin.com/in/dhanalakshmim2005/",
    
    },
    {
      name: "ANGELINE HEPHZIBAH J",
      image: angel,
      github: "https://github.com/angelinedev",
      linkedin: "www.linkedin.com/in/angeline-h",

    },
    
    {
      name: "AKELA ",
      image: akela,
      github: "https://github.com/AkelaManikandan",
      linkedin:"https://www.linkedin.com/in/akela-m-3734ba233",

    },
    {
      name: "LogaPriya",
      image: "/images/image7.jpg",
      github: "",
      linkedin: "https://www.linkedin.com/in/logapriya-d-82a917369?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app ",
      
    },
 /*    {
      name: "Lisa Anderson",
      image: "/images/image8.jpg",
      github: "https://github.com/lisaanderson",
      linkedin: "https://linkedin.com/in/lisaanderson",
      description:
        "Performance optimization specialist. Ensures applications run smoothly and efficiently across all platforms.",
    },
    {
      name: "James Brown",
      image: "/images/image9.jpg",
      github: "https://github.com/jamesbrown",
      linkedin: "https://linkedin.com/in/jamesbrown",
      description:
        "Tech lead with 10+ years experience. Mentors junior developers and architects robust, maintainable systems.",
    },*/
  ];

  return (
    <div className="gradient-bg min-h-screen py-16 px-4">
      {/* Inline CSS styles for gradient, glow, etc. */}
      <style>{`
        .gradient-bg {
          
          background-size: 400% 400%;
          animation: gradientShift 8s ease infinite;
        }
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .card-gradient {
          background: linear-gradient(145deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.05) 100%);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,255,255,0.2);
        }
        .card-hover { transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275); }
        .card-hover:hover { transform: translateY(-15px) scale(1.02); box-shadow: 0 25px 50px rgba(0,0,0,0.3); }
        .glow-effect { position: relative; overflow: hidden; }
        .glow-effect::before {
          content: ''; position: absolute; top: -50%; left: -50%; width: 200%; height: 200%;
          background: linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent);
          transform: rotate(45deg); transition: all 0.6s; opacity: 0;
        }
        .glow-effect:hover::before { animation: shine 0.8s ease-in-out; }
        @keyframes shine {
          0% { transform: translateX(-100%) translateY(-100%) rotate(45deg); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateX(100%) translateY(100%) rotate(45deg); opacity: 0; }
        }
        .social-icon { transition: all 0.3s ease; }
        .social-icon:hover { transform: scale(1.2) rotate(5deg); }
        .floating { animation: float 6s ease-in-out infinite; }
        @keyframes float {
          0%,100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .pulse-glow { animation: pulseGlow 2s ease-in-out infinite alternate; }
        @keyframes pulseGlow {
          from { box-shadow: 0 0 20px rgba(243,159,90,0.3); }
          to { box-shadow: 0 0 40px rgba(243,159,90,0.6); }
        }
      `}
      
      </style>

      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-orange-300 to-pink-300 bg-clip-text text-transparent">
            Meet Our Team
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Talented developers passionate about creating exceptional digital
            experiences. Each bringing unique skills and creativity to every
            project.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} member={member} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
