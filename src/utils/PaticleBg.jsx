import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticleBg = () => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100vh", overflow: "hidden" }}>
      {/* Particle Background */}
      <Particles
        id="particles-js"
        init={particlesInit}
        style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%" }}
        options={{
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "circle",
            },
            opacity: {
              value: 0.5,
            },
            size: {
              value: 10,
              random: true,
            },
            line_linked: {
              enable: true,
              distance: 300,
              color: "#ffffff",
              opacity: 0.4,
              width: 2,
            },
            move: {
              enable: true,
              speed: 12,
              out_mode: "out",
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onclick: {
                enable: true,
                mode: "push",
              },
            },
            modes: {
              push: {
                particles_nb: 4,
              },
            },
          },
          retina_detect: true,
        }}
      />
      
      {/* Content */}
      <div style={{ position: "relative", zIndex: -11, color: "#fff", textAlign: "center", paddingTop: "20vh" }}>
        Hello
      </div>
    </div>
  );
};

export default ParticleBg;
