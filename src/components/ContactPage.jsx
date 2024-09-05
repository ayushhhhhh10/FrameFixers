import React from "react";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";
import Contact from "./Contact";
import Footer from "./Footer";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="relative z-30"
    >
      <Navbar />
      <div className="flex flex-col items-center gap-5 mt-20">
        <h1 className="uppercase text-[#43DFEA] font-semibold text-xl">
          Contact
        </h1>
        <div className="w-1 h-12 bg-[#6D6F75]"></div>
        <Link className="text-white text-xl sm:text-3xl lg:text-5xl font-semibold">
          management.framefixers@gmail.com
        </Link>
      </div>
      <Contact />
      <Footer />
    </motion.div>
  );
};

export default ContactPage;
