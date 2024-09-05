import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url(src/assets/Footer-background.webp)",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "75%",
      }}
      className="h-[450px] flex flex-col justify-between lg:px-16 xl:px-32 py-16 text-white"
    >
      <div className="flex justify-center lg:justify-start gap-10 lg:gap-32 uppercase font-mono tracking-wide">
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
      <div className="flex flex-col gap-10 lg:flex-row justify-between items-center">
        <div className="flex gap-5 items-center">
          <Link
            to="https://x.com/FrameFixerz?s=08"
            className="hover:text-zinc-400 duration-200"
          >
            Twitter
          </Link>
          <div className="h-0.5 bg-zinc-600 w-10"></div>
          <Link
            to="https://www.linkedin.com/in/frame-fixers-2b085b326?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
            className="hover:text-zinc-400 duration-200"
          >
            Linkedin
          </Link>
          <div className="h-0.5 bg-zinc-600 w-10"></div>
          <Link
            to="https://www.instagram.com/framefixerz/"
            className="hover:text-zinc-400 duration-200"
          >
            Instagram
          </Link>
        </div>
        <h1 className="text-5xl font-[Albra] uppercase">Framefixers</h1>
        <Link className="hover:text-zinc-400 duration-200">
          management.framefixers@gmail.com
        </Link>
      </div>
    </div>
  );
};

export default Footer;
