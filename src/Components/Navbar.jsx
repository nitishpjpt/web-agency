import React from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { Link } from "react-router-dom";


const Navbar = () => {

   //Gsap animation
   useGSAP(() => {
    gsap.from('a,.logo ,h2' , {
     y:-10,
     duration:1,
     opacity:0,
     delay:1,
     stagger:0.3
    })
 })

  return (
    <>
      <header className=" bg-gradient-to-r from-[#0C2A31] to-[#050B17] sm:width-[100rem] text-white flex justify-around items-center p-5 ">
        <div className="flex justify-center items-center gap-2">
          <img className="w-10 logo" src="https://cdn-icons-png.freepik.com/256/4120/4120692.png?ga=GA1.1.671655325.1715182066&semt=ais_hybrid"></img>
          <h2 className="text-2xl font-semibold" >Hyper Dev</h2>
        </div>
        <nav className="lg:flex list-none font-thin text-xl gap-10 sm:hidden">
          <a href="/">Home</a>
          <Link to="/about">About</Link>
          <a href="#sevices">Services</a>
          <a href="#project">Projects</a>
        </nav>

        <div className="flex justify-around items-center gap-5">
          <button className=" rounded-md md:p-3 md:flex sm:hidden bg-[#2F9E94]">Get Started</button>
          <button className="border rounded-md p-3">Let's Talk</button>
        </div>
      </header>
    </>
  );
};

export default Navbar;
