import React from "react";
import video from "../intro.mp4";
import "../index.css";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";

const Hero = () => {
  //Gsap animation
  useGSAP(() => {
    gsap.from("h1 ,p ,button,video", {
      y: 10,
      duration: 1,
      opacity: 0,
      delay: 1.3,
      stagger: 0.3,
    });
  });

  return (
    <div className="w-[100vw] md:h-[80vh] sm:h-[60vh]  bg-gradient-to-r from-[#0C2A31] to-[#050B17] sm:block sm:text-center sm:pt-5 md:flex justify-evenly items-center gap-5 ">
      {/* left-box */}
      <div className="block justify-center items-center gap-5 z-0 ">
        {/* circle*/}
        <div className="circle"></div>
        <h1 className="text-white lg:text-7xl sm:text-4xl font-thin">
          We Are <span className="text-[#2F9E94]">Creative</span>
          <br></br>Digital Agency
        </h1>
        <br></br>
        <p className="text-white font-thin text-xs">
          We are a creative agency with several services
          <br></br> that focused on quality and innovations for your business.
        </p>
        <br></br>
        <button className="text-white p-2 bg-[#2F9E94] rounded-md">
         <Link to='/KnowMore'>Know More</Link>
        </button>
      </div>
      {/* right-box */}
      <div className="flex justify-center items-center sm:pt-3 sm:hidden md:flex">
        <video
          src={video}
          muted
          autoPlay
          loop
          controlsList="nodownload"
        ></video>
      </div>
    </div>
  );
};

export default Hero;
