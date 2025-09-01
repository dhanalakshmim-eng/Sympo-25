import React from "react";
import "./Contact.css";
import "../text.css";

const Contact = () => {
  const tracks = [
    {
      trackName: "TRACK I",
      coordinators: [
        {
          name: "Amrithavarshini S",
          designation: "Student Coordinator",
          phone: "+919150829797",
        },
        {
          name: "Gowtham S",
          designation: "Student Coordinator",
          phone: "+919025896912",
        //   email: "jane@example.com",
        },
      ],
    },
    {
      trackName: "TRACK II",
      coordinators: [
        {
          name: "Abdul Hameed E H",
          designation: "Student Coordinator",
          phone: "+918056747791",
        //   email: "alice@example.com",
        },
        {
          name: "Chandra Sekar K",
          designation: "Student Coordinator",
          phone: "+918122116830",
        //   email: "bob@example.com",
        },
      ],
    },
  ];

  return (
    <div className="contact-container bg-transparent text-white py-10 px-10">
      <h1 className="text-3xl font-extrabold text-center font-otherfont mb-8 bg-clip-text text-transparent bg-gradient-to-r from-[#fc00ff] to-[#00dbde]">
    CONTACT DETAILS
</h1>

      <div className="tracks-container flex flex-col gap-10">
        {tracks.map((track, index) => (
          <div key={index} className="track">
            <h2 className="text-2xl font-extrabold text-center mb-6">
              {track.trackName}
            </h2>
            <div className="coordinators-column flex flex-wrap justify-center gap-20">
              {track.coordinators.map((coordinator, idx) => (
                <div key={idx} className="anim-container w-full sm:w-1/2 lg:w-1/3">
                  <div className="anim-card bg-gray-800 p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <h3 className="text-xl font-bold mb-2 bg-clip-text bg-gradient-to-r from-[#fc00ff] to-[#00dbde]">
                    {coordinator.name}
                    </h3>
                    <p className="text-sm text-white mb-2">
                      {coordinator.designation}
                    </p>
                    <p className="text-sm text-white mb-2 flex">
                        <button
                        className="glass-button ml-0"
                        onClick={() => window.location.href = `tel:${coordinator.phone}`}
                            >
                        Contact
                        </button>
                        </p>

                    {/* <p className="text-sm text-white flex items-center">
                      <i className="fas fa-envelope mr-2"></i>
                      {coordinator.email}
                    </p> */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
