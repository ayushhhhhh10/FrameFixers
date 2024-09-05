import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player";

const ProjectPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 3, ease: "easeOut" }}
      className="relative z-30 text-white"
    >
      <Navbar />
      <div className="h-[550vh] lg:h-[350vh] px-10 lg:px-32">
        <div className="routes mt-32 flex items-center gap-5 font-semibold text-[18px]">
          <Link to="/" className="hover:text-[#43DFEA] duration-200">
            HOME
          </Link>
          <div className="w-12 h-0.5 bg-zinc-500"></div>
          <h1 className="text-[#43DFEA]">PROJECTS</h1>
        </div>
        <h1 className="tracking-tight my-8 text-[30px] sm:text-[52px] font-semibold">
          Works by FrameFixers
        </h1>
        <p className="w-full lg:w-1/2 italic sm:text-md text-sm">
          A showcase of FrameFixers' finest work, featuring expertly crafted
          podcast edits, engaging talking head videos, dynamic motion graphics,
          and innovative design projects.
        </p>
        <div className="showreel h-[70vh] my-20 flex lg:flex-row flex-col gap-0 lg:gap-10">
          <div className="h-full w-full lg:w-[70%]">
            <ReactPlayer
              light="/Showreel_thumbnail.png"
              controls
              height="100%"
              width="100%"
              url="/ShowReel.mp4"
            />
          </div>
          <div className="w-full lg:w-[30%] mt-10">
            <h1 className="text-3xl font-bold tracking-wider">Showreel</h1>
            <p className="mt-2 text-xs sm:text-sm tracking-wide">
              it's a dynamic representation of everything we do. From
              high-energy video edits and captivating motion graphics to
              striking graphic designs, we've distilled our expertise into one
              compelling visual journey. Watch as we blend art and technology,
              transforming concepts into captivating visuals that resonate with
              audiences. This is FrameFixers in action your go-to creative
              partner for all things visual.
            </p>
          </div>
        </div>
        <div className="works h-[300vh] lg:h-[100vh] flex lg:flex-row flex-col gap-10">
          <div className="h-full w-full lg:w-[33%] flex flex-col items-center gap-2">
            <div className="h-full lg:h-[80%] w-full flex justify-center">
              <ReactPlayer
                light="/Podcast_thumbnail.png"
                controls
                height="100%"
                width="100%"
                url="/Podcast_edit.mp4"
              />
            </div>
            <h1 className="text-xl font-semibold">Podcast Edit</h1>
            <p className="text-xs lg:text-sm text-center tracking-wide">
              Where every word, pause, and transition is crafted to perfection.
              In this featured project, we've transformed raw audio and video
              into a seamless podcast experience that captivates listeners and
              viewers alike.
            </p>
          </div>
          <div className="h-full w-full lg:w-[33%] flex flex-col items-center gap-2">
            <div className="h-full lg:h-[80%] w-full flex justify-center">
              <ReactPlayer
                light="/Talking_head_thumbnail.png"
                controls
                height="100%"
                width="100%"
                url="/Talking_head.mp4"
              />
            </div>
            <h1 className="text-xl font-semibold">Talking Head Edit</h1>
            <p className="text-xs lg:text-sm text-center tracking-wide">
              Our talking head edits at FrameFixers are designed to keep your
              audience engaged from start to finish.Whether it's a keynote
              address, educational content, or a corporate update, our edits
              make sure that every frame supports the story being told.
            </p>
          </div>
          <div className="h-full w-full lg:w-[33%] flex flex-col items-center gap-2">
            <div className="h-full lg:h-[80%] w-full flex justify-center">
              <ReactPlayer
                light="/Audio_thumbnail.png"
                controls
                height="100%"
                width="100%"
                url="/Audio_edit.mp4"
              />
            </div>
            <h1 className="text-xl font-semibold">Audio-Driven Edit</h1>
            <p className="text-xs lg:text-sm text-center tracking-wide">
              Explore the art of transforming sound into a visual experience
              with our audio-driven edits at FrameFixers. Whether it's an
              inspiring speech, a dynamic soundtrack, or an engaging podcast, we
              turn audio into a captivating story that speaks to the eyes and
              ears alike.
            </p>
          </div>
        </div>
        <div className="w-full h-[80vh] mt-32 flex flex-col sm:flex-row gap-10">
          <div className="h-full w-full sm:w-1/2">
            <ReactPlayer
              light="/adidas_thumbnail.png"
              url="/Adidas Animation.mp4"
              controls
              height="80%"
              width="100%"
            />
            <h1 className="text-xl font-semibold mt-5">
              Unveiling Brands with Motion
            </h1>
            <p className="text-xs lg:text-sm tracking-wide mt-1">
              A striking blend of creativity and precision that encapsulates
              brand identity in just a few seconds. At FrameFixers, we
              understand that first impressions matter, and our logo reveal
              designs are crafted to leave a lasting impact.
            </p>
          </div>
          <div className="h-full w-full mt-20 sm:mt-0 sm:w-1/2">
            <ReactPlayer
              light="/Jordan_thumbnail.png"
              url="/Jorden Animation.mp4"
              controls
              height="80%"
              width="100%"
            />
            <h1 className="text-xl font-semibold mt-5">Product in Motion</h1>
            <p className="text-xs lg:text-sm tracking-wide mt-1">
              This project highlights our expertise in creating dynamic visuals
              that not only showcase products but also elevate their appeal
              through engaging motion graphics.
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </motion.div>
  );
};

export default ProjectPage;
