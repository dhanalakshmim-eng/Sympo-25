import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/energiaNova.jpg"; // Replace with your actual image
import "./EnergiaNova.css";

const EnergiaNova = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
      });
    }
  }, []);

  return (
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10 text-justify">
      {/* Left: Event Image */}
      <motion.div
        ref={tiltRef}
        className="lg:w-1/2 w-full flex justify-center items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img
          src={EventImage}
          alt="Eloquence Event"
          className="w-3/4 md:w-2/3 lg:w-2/3 object-cover rounded-lg shadow-lg"
        />
      </motion.div>

      {/* Right: Event Details */}
      <motion.div
        className="lg:w-3/4 w-full text-white flex flex-col gap-6 overflow-auto bg-transparent custom-scrollbar"
        style={{ maxHeight: "calc(100vh - 100px)" }}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1>
          ✨
          <span className="text-3xl lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Energia Nova: Paper Presentation Competition
          </span>
        </h1>

        {/* Objective Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Objective
          </h2>
          <p>
            "Energia Nova" is a platform for participants to showcase their
            ability to present ideas effectively through structured and
            impactful paper presentations. The event emphasizes critical
            thinking, innovative approaches, and persuasive communication.
          </p>
        </section>

        {/* Rounds Section */}
        <section className="text-gray-300">
          <h2>
            📌{" "}
            <span className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
              Rounds
            </span>
          </h2>

          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
            Round 1: Abstract Submission
          </h3>
          <ul className="list-disc list-inside">
            <li>Abstract word limit: 100 - 150 words</li>
            <li>
              The document must include:
              <ol className="list-decimal list-inside pl-4">
                <li>Title of the paper</li>
                <li>Authors (Maximum of 3) and institutional affiliations</li>
                <li>Description of the topic, methodology, and outcomes</li>
              </ol>
            </li>
            <li>Accepted abstracts will be intimated to authors</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
            Round 2: Full Paper Submission
          </h3>
          <p>Authors must submit a full paper (maximum 10 pages) covering:</p>
          <ul className="list-disc list-inside">
            <li>Introduction</li>
            <li>Existing Work</li>
            <li>Methodology</li>
            <li>Results & Discussion</li>
            <li>Conclusion</li>
            <li>References</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
            Round 3: Final Paper Presentation
          </h3>
          <ul className="list-disc list-inside">
            <li>
              Presentation time: 8–10 minutes followed by 2–3 minutes Q&A.
            </li>
            <h3 className="text-xl md:text-2xl lg:text-1xl font-bold mb-2 gradient-text">
              Must Include:
            </h3>
            <ul className="list-disc list-inside pl-4">
              <li>Introduction of the topic</li>
              <li>Methodology or approach</li>
              <li>Key findings and insights</li>
              <li>Conclusion and recommendations</li>
            </ul>
          </ul>
        </section>

        {/* Themes Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Themes for Paper Submission
          </h2>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            CIVIL
          </h3>
          <ul className="list-disc list-inside">
            <li>Building Information Modeling (BIM) in construction</li>
            <li>Advanced Traffic Management Systems</li>
            <li>Natural Disaster Resistant Infrastructure</li>
            <li>Modular Construction Techniques</li>
            <li>Artificial Intelligence in Structural Engineering</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            BME
          </h3>
          <ul className="list-disc list-inside">
            <li>Biosignal and Image processing</li>
            <li>Artificial Intelligence and Machine Learning in Healthcare</li>
            <li>Rehabilitation Engineering and Biomedical Robotics</li>
            <li>Biomaterials & Regenerative Medicine</li>
            <li>Clinical Engineering and Health Systems</li>
            <li>Biomaterials & Regenerative Medicine</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            ECE
          </h3>
          <ul className="list-disc list-inside">
            <li>Green communication</li>
            <li>Sensors, Cloud computing and IoT</li>
            <li>Underwater communication</li>
            <li>Mobile and wearable applications</li>
            <li>Signal processing and applications</li>
            <li>Advanced Communication networks, 5G/6G and beyond</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            EEE
          </h3>
          <ul className="list-disc list-inside">
            <li>Smart grids and Renewable energy integration</li>
            <li>AI and Robotics in Electrical Engineering</li>
            <li>Role of Electric vehicle in Green Transportation</li>
            <li>HVDC and FACTS</li>
            <li>Batter Management Systems</li>
            <li>MEMS and Nanotechnology</li>
          </ul>

          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            MBA
          </h3>
          <ul className="list-disc list-inside">
            <li>AI interventions in HR technology</li>
            <li>Green Marketing and E-commerce</li>
            <li>Entrepreneurial Ecosystem</li>
            <li>Impact of Technology on Healthcare Delivery</li>
            <li>Financial Sustainability in Digital Era</li>
            <li>Green Financing Components</li>
            <li>Innovation and World of Entrepreneurship</li>
            <li>Environmental Economics and Empowerment</li>
            <li>Marketing through Digital Era</li>
            <li>Optimizing Supply Chain through Management</li>
          </ul>
        </section>

        {/* Format for Paper Presentation Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Format for Paper Presentation
          </h2>
          <ul className="list-disc list-inside">
            <li>Maximum paper size: 6</li>
            <li>Title Format: Times New Roman, Size: 16, Bold</li>
            <li>
              Abstract Format: Max 200 words, Times New Roman, Size: 10, Bold
            </li>
            <li>Headings Format: Times New Roman, Size: 14, Bold</li>
            <li>Paper Content Format: Times New Roman, Size: 12</li>
          </ul>
        </section>

        {/* Paper Submission Deadlines Section */}
        {/* <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Paper Submission Deadlines
          </h2>
          <ul className="list-disc list-inside">
            <li>Abstract Submission: 23.12.24</li>
            <li>Notification of Acceptance: 27.12.24</li>
            <li>Full Paper Submission: 31.12.24</li>
          </ul>
        </section> */}

        {/* Presentation Rules Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Presentation Rules
          </h2>
          <ul className="list-disc list-inside">
            <li>8 minutes presentation + 2 minutes Q&A</li>
            <li>PowerPoint format</li>
            <li>Slides submission: at least 1 hour before event start time</li>
            <li>
              Participants must be present 30 minutes prior to scheduled
              presentation
            </li>
          </ul>
        </section>

        {/* Judging Criteria Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Judging Criteria
          </h2>
          <ul className="list-disc list-inside">
            <li>Innovation</li>
            <li>Originality</li>
            <li>
              Prizes:
              <ul className="list-disc list-inside pl-4">
                <li>E-certificates for all</li>
                <li>Cash prize for winners and runners-up</li>
              </ul>
            </li>
          </ul>
        </section>

        {/* General Rules Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            General Rules
          </h2>
          <ul className="list-disc list-inside">
            <li>Registration mandatory before deadline</li>
            <li>Judges' decisions are final</li>
          </ul>
        </section>

        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Abstract and Paper Submission
          </h2>
          <p>
              Submit your work to:{" "}
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSc32a8zSq5dbEOrNksN3SbqHz6EnvRihNDpW7Up5Gb1EZtFdA/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p>
        </section>

        {/* Enquiry Contact Section */}
        <section className="text-gray-300">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Enquiry Contact
          </h2>
          <p>
            Name: <strong>Aravinth Balaji N</strong>
            <br />
            Contact: +91 63811 36008
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default EnergiaNova;
