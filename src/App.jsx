import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import { motion, useScroll } from "framer-motion";
import ContactPage from "./components/ContactPage";
import ProjectPage from "./components/ProjectPage";

const App = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className="min-h-screen w-full bg-[#0B0E18]">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="bg-blue-200 h-1 w-full fixed top-0 origin-left z-[999]"
      ></motion.div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/projects" element={<ProjectPage />} />
      </Routes>
    </div>
  );
};

export default App;
