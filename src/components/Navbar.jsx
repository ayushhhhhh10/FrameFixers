import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{ backdropFilter: "blur(5px)" }}
      className="w-full sticky top-0 z-[999] flex justify-between items-center px-5 lg:px-32 py-3"
    >
      <img className="w-16" src="/Logo.png" alt="" />
      <div className="links flex gap-8 lg:gap-24 uppercase text-xs sm:text-sm font-semibold text-white">
        <Link to="/" className="hover:text-zinc-400 duration-200">
          Home
        </Link>
        <Link to="/projects" className="hover:text-zinc-400 duration-200">
          Projects
        </Link>
        <Link to="/contact" className="hover:text-zinc-400 duration-200">
          Contact
        </Link>
      </div>
    </motion.div>
  );
};

export default Navbar;
