import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useEffect } from "react";

const Service = () => {

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
     <motion.div ref={ref} initial="hidden" animate={controls} variants={variants} className="about">
     <div id="sevices" className=" bg-gradient-to-r from-[#0C2A31] to-[#050B17]">
        {/* upper side text */}
        <div className="md:flex justify-evenly items-center sm:block sm:text-center sm:p-4 pt-10  h-[50vh] text-white bg-gradient-to-r from-[#0C2A31] to-[#050B17]">
          <div>
            <motion.div variants={textVariants}><h2 className="text-2xl">Our Service</h2> <br></br></motion.div>
           <motion.div variants={textVariants}>
           <h1 className="md:text-6xl sm:text-3xl">
              What <span className="text-[#2F9E94]">Services</span>
              <br></br>
              We're Offering
            </h1>
           </motion.div>
          </div>

          <div className="flex justify-center items-center">
           <motion.div variants={textVariants}>
           <p>
              We provide digital marketing services to help clients increase
              <br></br>
              their visibility and reach their target audience more effectively.
              <br></br>
              We have assisted various clients Some of the results that have
              been<br></br>
              achieved include :
            </p>
           </motion.div>
          </div>
        </div>

        {/*down side text */}
       
       <div className="sm:pt-[5rem]">
        
       <div className="text-[#6E7480]  w-[100vw] h-[25vh] pt-[2.4rem] border-b-2 hover:bg-[#0C2A31] transition duration-500 ease-in-out hover:text-white ">
          <div className="flex justify-center sm:gap-[15rem] md:gap-[40rem] items-center ">
            <h2 className="md:text-5xl sm:text-3xl">Logo</h2>
            <IoIosArrowRoundForward className="md:text-6xl sm:text-3xl border white rounded-full " />
          </div>
        </div>
        <div className="text-[#6E7480]  h-[25vh] w-[100vw] pt-[2.4rem] border-b-2 hover:bg-[#0C2A31] transition duration-500 ease-in-out hover:text-white">
          <div className="flex justify-center sm:gap-[8rem] md:gap-[30rem] items-center">
            <h2 className="md:text-5xl sm:text-3xl">Development</h2>
            <IoIosArrowRoundForward className="md:text-6xl sm:text-3xl border white rounded-full" />
          </div>
        </div>
        <div className="text-[#6E7480]  h-[25vh] pt-[2.4rem] border-b-2 hover:bg-[#0C2A31] transition duration-500 ease-in-out hover:text-white">
          <div className="flex  justify-center sm:gap-[14rem] md:gap-[30rem] items-center">
            <h2 className="md:text-5xl sm:text-3x">UI/UX Design</h2>
            <IoIosArrowRoundForward className="md:text-6xl sm:text-3xl border white rounded-full" />
          </div>
        </div>
        <div className="text-[#6E7480]  h-[25vh] pt-[2.4rem] border-b-2 hover:bg-[#0C2A31] transition duration-500 ease-in-out hover:text-white">
          <div className="flex  justify-center sm:gap-[19rem] md:gap-[43rem] items-center">
            <h2 className="md:text-5xl sm:text-3x">SEO</h2>
            <IoIosArrowRoundForward className="md:text-6xl sm:text-3xl border white rounded-full" />
          </div>
        </div>
       </div>

      </div>
     </motion.div>
    </>
  );
};

export default Service;
