import React from "react";
import { FcLike } from "react-icons/fc";


import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const Footer = () => {

  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1
  });

  useEffect(() => {
    if (inView) {
      controls.start('visible');
    } else {
      controls.start('hidden');
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, // Slightly longer duration for smoothness
        ease: [0.42, 0, 0.58, 1] ,// Custom cubic bezier for smooth easing
        when: "beforeChildren",
        staggerChildren :0.2
      }
}
  }

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };    



  return (
    <>
      <div className="text-white bg-gradient-to-r from-[#0F3035] to-[#0B262D]">
        <footer className="relative bg-blueGray-200 pt-8 pb-6">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap text-left lg:text-left">
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex items-center gap-2">
                  <img
                    className="w-10"
                    src="https://cdn-icons-png.freepik.com/256/4120/4120692.png?ga=GA1.1.671655325.1715182066&semt=ais_hybrid"
                  ></img>
                  <h4 className="text-3xl fonat-semibold text-blueGray-700">
                    Digiboost
                  </h4>
                </div>
                <h5 className="text-lg mt-0 mb-2 pt-2 text-blueGray-600">
                  Let's make something together.
                </h5>
                <div className="mt-6 lg:mb-0 flex  items-center gap-2 ">
                  <button className="w-10 h-10 bg-white text-black rounded-full">
                    <i className="fa-brands fa-instagram"></i>
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded-full">
                    <i className="fa-brands fa-facebook"></i>
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded-full">
                    <i className="fa-brands fa-x-twitter"></i>
                  </button>
                  <button className="w-10 h-10 bg-white text-black rounded-full">
                    <i className="fa-brands fa-discord"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-blueGray-500 text-sm  mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation?ref=njs-profile"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://blog.creative-tim.com?ref=njs-profile"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial?ref=njs-profile"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-blueGray-500 text-sm  mb-2">
                      Other 
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://creative-tim.com/terms?ref=njs-profile"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://creative-tim.com/privacy?ref=njs-profile"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-blueGray-600 hover:text-blueGray-800  block pb-2 text-sm"
                          href="https://creative-tim.com/contact-us?ref=njs-profile"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <hr className="my-6 border-blueGray-300" />
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-5/12  px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 flex justify-center items-center py-1">
                  <h2 className="flex justify-center items-center text-center gap-1">Copyright © Made with <FcLike className="text-xl"/> Nitish Prajapati</h2>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
