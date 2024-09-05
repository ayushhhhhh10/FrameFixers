import { motion } from "framer-motion";
import React, { useState } from "react";

const Work = () => {
  const [mouseEnter, setMouseEnter] = useState(false);
  const [mouseEnter1, setMouseEnter1] = useState(false);

  const handleHover = () => {
    setMouseEnter(true);
  };
  const handleLeave = () => {
    setMouseEnter(false);
  };
  const handleHover1 = () => {
    setMouseEnter1(true);
  };
  const handleLeave1 = () => {
    setMouseEnter1(false);
  };

  return (
    <div className="w-full flex flex-col items-center gap-4 mt-40">
      <h1 className="text-5xl font-bold">Work</h1>
      <div className="w-1 h-16 bg-zinc-400"></div>
      <div className="flex lg:flex-row flex-col gap-5 justify-center mt-4">
        <div
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
          className="relative w-[280px] h-[300px] sm:w-[580px] sm:h-[500px]"
        >
          <div className="info absolute bottom-6 left-6 sm:top-24 sm:left-16">
            <div className="h-fit overflow-hidden">
              <motion.h1
                animate={mouseEnter ? { y: 50 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-[Albra] text-2xl sm:text-4xl"
              >
                Video Editing
              </motion.h1>
            </div>
            <div className="h-fit overflow-hidden">
              <motion.p
                animate={mouseEnter ? { y: 150 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-lg w-3/4"
              >
                From cinematic trailers to engaging social media clips, our
                video editing services are tailored to bring your narrative to
                life.
              </motion.p>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/video-editing.avif"
            alt=""
          />
        </div>
        <div
          onMouseEnter={handleHover1}
          onMouseLeave={handleLeave1}
          className="relative w-[280px] h-[300px] sm:w-[580px] sm:h-[500px]"
        >
          <div className="info absolute bottom-6 left-6 sm:top-24 sm:left-16">
            <div className="h-fit overflow-hidden">
              <motion.h1
                animate={mouseEnter1 ? { y: 50 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                className="font-[Albra] text-2xl sm:text-4xl"
              >
                Graphic Design
              </motion.h1>
            </div>
            <div className="h-fit overflow-hidden">
              <motion.p
                animate={mouseEnter1 ? { y: 150 } : { y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-sm sm:text-lg w-3/4"
              >
                Whether its logo creation, branding, or digital artwork, our
                designs are crafted to leave a lasting impression.
              </motion.p>
            </div>
          </div>
          <img
            className="w-full h-full object-cover"
            src="/Graphic design.avif"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Work;
