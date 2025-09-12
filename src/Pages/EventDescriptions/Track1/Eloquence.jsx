import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";
import EventImage from "../../../assets/symposium/OBS-Stackle.jpg";


const Eloquence = () => {
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
    <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto p-6 gap-10">
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
          <span className="text-head lg:text-4xl font-bold mb-4 text-center lg:text-left gradient-text">
            Eloquence: Paper Presentation Competition
          </span>
        </h1>

        <section className="text-gray-300 text-justify">
          <p className="text-body lg:text-2xl">
            "Eloquence" is a platform for participants to showcase their ability
            to present ideas effectively through structured and impactful paper
            presentations. The event emphasizes critical thinking, innovative
            approaches, and persuasive communication.
          </p>
        </section>
        <section className="text-gray-300 text-justify">
          <h2 className="text-head lg:text-4xl font-bold mb-2 gradient-text">
            Team Size 
          </h2>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Minimum : 1 Member</li>
            <li>Maximum : 3 Members(Only Registered!)</li>
            
          </ul>
        </section>
       

        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Themes for Paper Submission
          </h2>
          <p className="text-body lg:text-2xl">Participants can choose below topics but are not limited to:</p>
          <ul className="list-disc list-inside mt-4 text-body lg:text-2xl">
            <li>Artificial Intelligence & Generative AI</li>
            <li>Quantum Computing</li>
            <li>Big Data & Data Analytics</li>
            <li>Cloud Computing</li>
            <li>Internet of Things</li>
            <li>Cyber Security & Ethical Hacking</li>
            <li>Machine Learning & Data Mining</li>
            <li>AR/VR</li>
            <li>Computer Vision</li>
            <li>Wireless Technology</li>
          </ul>
        </section>

        {/* <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Paper Presentation Deadlines
          </h2>
          <ul className="list-disc list-inside text-body lg:text-2xl">
            <li>Abstract Submission: 27.12.2024</li>
            <li>Notification of Acceptance: 31.12.2024</li>
            <li>Full Paper Submission: 10.01.2025</li>
            <li>Presentation Submission: 27.01.2025</li>
          </ul>
        </section> */}

        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            Instructions to Authors
          </h2>
          <div>
            <h3 className="text-subhead md:text-xl lg:text-2xl font-semibold gradient-text">
              Abstract Format
            </h3>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Title of the paper - Times New Roman, Size: 16, Bold</li>
              <li>Author name (Max. three) - Times New Roman, Size: 9</li>
              <li>Affiliation - Times New Roman, Size: 8</li>
              <li>Email ID - Times New Roman, Size: 8</li>
              <li>
                Abstract - Times New Roman, Size: 10, Bold, Maximum 200 words
              </li>
            </ul>
            
            {/* <p>
              Submit your abstract to:{" "}
              <a
                href="https://forms.gle/srceNuGh9ZXaLNzv6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          </div>

          <div>
            <h3 className="text-lg md:text-xl lg:text-2xl font-semibold gradient-text">
              Full Paper Format
            </h3>
            <p className="text-body lg:text-2xl">Maximum number of pages – 6</p>
            <ul className="list-disc list-inside text-body lg:text-2xl">
              <li>Introduction</li>
              <li>Existing Work</li>
              <li>Methodology</li>
              <li>Result (If any)</li>
              <li>Conclusion</li>
              <li>References</li>
            </ul>
            {/* <p className="text-body lg:text-2xl">
              Submit your full paper to:{" "}
              <a
                href="https://forms.gle/Fk7QTgXbBHrWcEZ56"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          </div>

          <div>
            <h3 className="text-head md:text-xl lg:text-2xl font-semibold gradient-text">
              Paper Presentation Guidelines
            </h3>
            <p className="text-body lg:text-2xl">
              Prepare your presentation using Microsoft PowerPoint (PPT). No
              other format will be accepted. The presentation duration is 8–10
              minutes and the Q&A session is 2–3 minutes.
            </p>
            <br/>
            <p className="text-body lg:text-2xl">For teams of two or three, only one member needs to submit the abstract.</p>
            {/* <p className="text-body lg:text-2xl">
              Submit your presentation to:{" "}
              <a
                href="https://forms.gle/T9GBbbq3wNWfHbSe6"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p> */}
          </div>
        </section>

          <div>
            <h3 className="text-head md:text-xl lg:text-2xl font-semibold gradient-text">
              For Submission:
            </h3>
            <p className="text-body lg:text-2xl">
              Submit your work to:{" "}
              <a
                href="https://forms.gle/Pz3g4aFGi96jEtvWA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Click here to submit
              </a>
            </p>
          </div>

        

        <section className="text-gray-300">
          <h2 className="text-head md:text-2xl lg:text-3xl font-bold mb-2 gradient-text">
            For More Information
          </h2>
          <p className="text-body lg:text-2xl">
            Contact: <br />
            <strong>Janani M V:</strong> +91 8072147950 <br />
            <strong>Sharan S:</strong> +91 8248782437
          </p>
        </section>
      </motion.div>
    </div>
  );
};

export default Eloquence;
