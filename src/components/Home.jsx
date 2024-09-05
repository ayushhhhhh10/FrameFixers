import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Work from "./Work";
import { motion } from "framer-motion";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="text-white h-[400vh] sm:h-[400vh] lg:h-[350vh] relative bg-[#0B0E18]"
    >
      <motion.div
        initial={{ height: "190vh" }}
        animate={{ height: "170vh" }}
        transition={{ duration: 5, ease: "backOut" }}
        className="background absolute z-0 w-full"
      >
        <img
          className="w-full h-full object-cover"
          src="/Background-image.webp"
          alt=""
        />
      </motion.div>
      <div className="absolute w-full z-[99]">
        <Navbar />
        <div className="w-full h-[70vh] py-10 flex flex-col items-center justify-between mt-14 lg:mt-3">
          <div className="text-center">
            <motion.h1
              drag
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
              dragElastic={0.5}
              dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
              className="text-5xl lg:text-8xl font-bold font-[Albra] tracking-tighter cursor-grab uppercase"
            >
              Frame Fixers
            </motion.h1>
            <p className="font-serif text-zinc-300 text-center">
              Crafting Visual Stories that Captivate & Inspire.
            </p>
          </div>
          <div className="buttons flex gap-2 items-center">
            <Link
              to="/contact"
              className="font-semibold bg-red-500 hover:bg-[#228493] px-7 py-4 rounded-md duration-200"
            >
              Get in touch
            </Link>
            <Link
              to="projects"
              className="font-semibold border border-white hover:bg-[#ffffff1e] duration-200 px-11 py-4 rounded-md"
            >
              Projects
            </Link>
          </div>
        </div>
        <Work />
        <Contact />
        <Footer />
      </div>
    </motion.div>
  );
};

export default Home;
