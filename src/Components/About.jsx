import React from "react";
import Img from "../about-us.jpg";
import { BsArrowUpRight } from "react-icons/bs";
import { useEffect } from "react";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Link } from "react-router-dom";

const About = () => {
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
         staggerChildren: 0.2
  }
}
}
const textVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.8 } }
};

  return (
    <>
    <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="about">
    <div
        id="about"
        className="w-[100vw] h-[80vh]  flex  justify-evenly items-center gap-5"
      >
        {/* left-box */}
        <div className="rounded-lg flex">
          <img
            className=" w-[45vw] h-[65vh] sm:hidden md:flex rounded-lg"
            src={Img}
            alt="about-img"
          />
        </div>
        {/* right-box */}
        <div className="">
          <h1 className="text-[#9DA4AE] font-bold text-2xl">About Us</h1>
          <br></br>
        <motion.div variants={textVariants}>  <h3 className="text-[#040612] text-6xl ">
            Why You Should <br></br> Choose{" "}
            <span className="text-[#2F9E94]">Digiboost</span>
          </h3></motion.div>
          <br></br>
        <motion.div variants={textVariants}>
        <p>
            We are digital agency that speacializes in web design,SEO,<br></br>
            social media managment. Our experienced team works
          </p>
        </motion.div>
          <br></br>
          <h4 className="flex text-center items-center gap-2 font-extrabold text-[#2F9E94]">
           <Link to='/About'>Learn More</Link> <BsArrowUpRight className="text-[#2F9E94]" />
          </h4>
        </div>
      </div>
    </motion.div>
    </>
  );
};
export default About;
