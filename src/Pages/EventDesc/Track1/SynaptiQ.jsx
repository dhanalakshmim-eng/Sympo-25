/* src/components/Events/SynaptiQ/SynaptiQ.jsx */
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import VanillaTilt from "vanilla-tilt";

import EventImage from "../../../assets/symposium/Sympo'25/Track1/SynaptiQ.png";

/* Shared motion settings */
const fadeIn = (x = 0, delay = 0) => ({
  hidden: { opacity: 0, x },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.9, delay, ease: "easeOut" },
  },
});

const SynaptiQ = () => {
  const tiltRef = useRef(null);

  /* Initialise Vanilla-Tilt */
  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        scale: 1.05,
        glare: true,
        "max-glare": 0.25,
      });
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[#090621] via-[#05010e] to-[#090621] py-16">
      {/* Decorative blurred blob */}
      <div className="pointer-events-none absolute -top-48 right-1/2 h-[34rem] w-[68rem] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--tw-gradient-stops))] from-purple-600/20 via-fuchsia-500/10 to-transparent blur-3xl [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>

      <div className="mx-auto flex max-w-7xl flex-col items-center gap-14 px-6 lg:flex-row lg:items-start">
        {/* Image */}
        <motion.div
          ref={tiltRef}
          variants={fadeIn(-60, 0)}
          initial="hidden"
          animate="show"
          className="lg:w-1/2"
        >
          <img
            src={EventImage}
            alt="SynaptiQ Event"
            className="mx-auto w-3/4 rounded-xl shadow-2xl ring-1 ring-white/10 lg:w-4/5"
          />
        </motion.div>

        {/* Content */}
        <motion.article
          variants={fadeIn(60, 0.15)}
          initial="hidden"
          animate="show"
          className="custom-scrollbar flex max-h-[80vh] flex-col gap-8 overflow-y-auto pr-2 text-gray-300 lg:w-1/2"
        >
          {/* Title */}
          <header>
            <h1 className="text-center text-3xl font-extrabold tracking-tight text-transparent md:text-4xl lg:text-left lg:text-5xl bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text">
              ✨ SynaptiQ: Multi-Round Technical Event
            </h1>
          </header>

          {/* Description */}
          <section className="space-y-4 leading-relaxed">
            <p>
              <strong className="text-fuchsia-400">SynaptiQ</strong> is a
              multi-round technical showdown crafted to probe your logical
              thinking, debugging prowess and coding flair&mdash;then crank the
              challenge up a notch with <em>Generative-AI prompt engineering</em>.
            </p>
            <p>
              Expect aptitude teasers, algorithmic puzzles and creative AI
              tasks&mdash;all under the pressure cooker of a ticking clock. Come
              ready to compete, collaborate and innovate.
            </p>
          </section>

          {/* Objectives */}
          <section>
            <h2 className="section-heading">🎯 Event Objectives</h2>
            <ul className="section-list">
              <li>Gauge analytical and debugging skills on real code bases.</li>
              <li>Sharpen algorithmic problem-solving in practical scenarios.</li>
              <li>Unleash creativity via precision prompt engineering.</li>
              <li>Create a vibrant arena to learn and network.</li>
            </ul>
          </section>

          {/* Rounds */}
          <section>
            <h2 className="section-heading">🛠 Event Rounds</h2>

            <div className="mt-4 space-y-6">
              <div>
                <h3 className="round-title">Round 1: Quickbit (Syntax & Sense)</h3>
                <ul className="section-list">
                  <li>MCQ + short answers on code correctness, debugging and aptitude.</li>
                  <li>Fastest accurate solvers qualify for Round 2.</li>
                </ul>
              </div>

              <div>
                <h3 className="round-title">Round 2: Decypher (Coding & Algorithms)</h3>
                <ul className="section-list">
                  <li>Multi-level coding gauntlet: Basic → Intermediate → Advanced.</li>
                  <li>Score on correctness, efficiency and elegance.</li>
                </ul>
              </div>

              <div>
                <h3 className="round-title">Round 3: Gen-AI Verse (Prompt Engineering)</h3>
                <ul className="section-list">
                  <li>Recreate a target image using only your prompt-crafting chops.</li>
                  <li>Judged on visual similarity and prompt quality.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Rules */}
          <section>
            <h2 className="section-heading">📜 Rules & Regulations</h2>
            <ul className="section-list">
              <li>Teams of ≤ 2 (solo allowed).</li>
              <li>Laptops permitted; mobile phones barred during rounds.</li>
              <li>Strict time limits; plagiarism → instant disqualification.</li>
              <li>Judges’ verdict is final.</li>
            </ul>
          </section>

          {/* Judging */}
          <section>
            <h2 className="section-heading">🏆 Judging Criteria</h2>
            <ul className="section-list">
              <li>Round 1 – Accuracy × Speed.</li>
              <li>Round 2 – Algorithmic soundness + Efficiency.</li>
              <li>Round 3 – Prompt finesse + Image similarity.</li>
            </ul>
          </section>

          {/* Contact */}
          <section>
            <h2 className="section-heading">📞 For More Information</h2>
            <p className="leading-relaxed">
              Student Coordinators:
              <br />
              <strong>Ms. Gopika G</strong> &ndash; +91 63856 36336
              <br />
              <strong>Mr. Hemachandiran R</strong> &ndash; +91 98409 63827
            </p>
          </section>
        </motion.article>
      </div>
    </section>
  );
};

export default SynaptiQ;
