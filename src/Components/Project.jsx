import React from "react";
import { AiOutlineInfo } from "react-icons/ai";
import { HiOutlineLightBulb } from "react-icons/hi";
import { RiSettings3Line } from "react-icons/ri";
import { LuFlag } from "react-icons/lu";
import { BsArrowUpRight } from "react-icons/bs";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const Project = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8, // Slightly longer duration for smoothness
        ease: [0.42, 0, 0.58, 1], // Custom cubic bezier for smooth easing
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <>
      <motion.div
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
      >
        <div id="project" className="h-[90vh] lg:block sm:hidden">
          {/* upper side text */}
          <div className="md:flex justify-evenly items-center sm:block sm:text-center sm:p-4 h-[40vh] text-black">
            <div>
              <motion.div variants={textVariants}>
                <h2 className="text-2xl uppercase text-[#45505C]">
                  Here are the steps
                </h2>{" "}
              </motion.div>
              <br></br>
              <h1 className="md:text-5xl sm:text-3xl">
                How do we <span className="text-[#2F9E94]">Work ?</span>
              </h1>
            </div>

            <div className="flex justify-center items-center">
              <p>
                We provide digital marketing services to help clients increase
                <br></br>
                their visibility and reach their target audience more
                effectively.
                <br></br>
                We have assisted various clients Some of the results that have
                been
                <br></br>
                achieved include :
              </p>
            </div>
          </div>

          {/* next text */}
          <div className="flex justify-center items-center text-center">
            <div className="flex justify-center gap-[10rem] items-center w-[50vw] border-dashed border-b-2 border-sky-500">
              <div className="text-center">
                <AiOutlineInfo className="text-[#36C7AD] relative top-8 text-6xl text-center p-3 font-bold bg-white border shadow-lg rounded-full" />
                <h2 className="absolute pt-10 font-extrabold">Briefing</h2>
                <p className="absolute left-[12rem] pt-[4em]  text-center  w-[13rem] h-[10rem] font-light text-[#9CA2A7]">
                  Summary of information or instruction given before a project
                </p>
              </div>
              <div>
                <HiOutlineLightBulb className="text-[#36C7AD] relative top-8 p-3 text-6xl bg-white border shadow-lg rounded-full" />
                <h2 className="absolute pt-10 font-extrabold"> New Ideas</h2>
                <p className="absolute left-[26rem] pt-[4em]  text-center  w-[13rem] h-[10rem] font-light text-[#9CA2A7]">
                  Generated through brainstorming ,research observation
                </p>
              </div>
              <div>
                <RiSettings3Line className="text-[#36C7AD] relative top-8 p-3  text-6xl bg-white border shadow-lg rounded-full" />
                <h2 className="absolute pt-10 font-extrabold">Processing</h2>
                <p className="absolute left-[40rem] pt-[4em]  text-center  w-[13rem] h-[10rem] font-light text-[#9CA2A7]">
                  Set of actions that that transform inputs desired
                  outputs,requiring planning.
                </p>
              </div>
              <div>
                <LuFlag className="text-[#36C7AD] relative top-8 text-6xl p-3  bg-white border shadow-lg rounded-full" />
                <h2 className="absolute pt-10 font-extrabold">Finishing</h2>
                <p className="absolute left-[54rem] pt-[4em]  text-center  w-[13rem] h-[10rem] font-light text-[#9CA2A7]">
                  Final stage of the process where the product or outcome is
                  completed
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects showCase */}
        {/* upper side text */}
        <div className="md:flex justify-evenly items-center sm:block sm:text-center sm:p-4 h-[40vh] text-black">
          <div className="">
            <motion.div variants={textVariants}>
              <h2 className="text-2xl uppercase text-[#45505C]">
                our Projects
              </h2>{" "}
              <br></br>
              <h1 className="md:text-5xl sm:text-3xl">
                Discover our <br></br> Selected
                <span className="text-[#2F9E94]">Projects</span>
              </h1>
            </motion.div>
          </div>

          <div className="block justify-center items-center">
            <motion.div variants={textVariants}>
              <p>
                We provide digital marketing services to help clients increase
                <br></br>
                their visibility and reach their target audience more
                effectively.
                <br></br>
                We have assisted various clients Some of the results that have
                been
                <br></br>
                achieved include :
              </p>
            </motion.div>
            <br></br>
            <h4 className="flex text-center justify-center items-center gap-2 font-extrabold text-[#2F9E94]">
              Discover More <BsArrowUpRight className="text-[#2F9E94]" />
            </h4>
          </div>
        </div>

        {/* Project Card */}

        <motion.div ref={ref} initial="hidden" animate={controls} variants={variants}>
  <div className="lg:grid lg:grid-cols-3 sm:grid sm:pt-20 sm:place-items-center sm:grid-cols-1 p-5 flex justify-evenly items-stretch gap-4">
    {[
      {
        img: "https://www.sketchappsources.com/resources/source-image/shopmate-ui-kit-duong-phan.png",
        title: "An E-commerce Website",
        desc: "Creating seamless online shopping experiences with a modern e-commerce website—easy navigation, fast checkout, and secure transactions.",
        tags: ["#ecommerce", "#shop"],
      },
      {
        img: "https://leadschool.in/wp-content/uploads/2024/01/Which-is-the-best-all-in-one-school-management-system-in-India.png",
        title: "A School Management System",
        desc: "Streamlining school operations with an all-in-one management system—efficient, organized, and designed for academic excellence.",
        tags: ["#schoolmanagement", "#education"],
      },
      {
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/hd/615d34124229923.60ffe9a997396.png",
        title: "A Restaurant Website",
        desc: "Elevate dining experiences with a modern, user-friendly restaurant website—seamless reservations, enticing menus, and a delightful digital presence.",
        tags: ["#restaurant", "#hotel"],
      },
     
      {
        img: "https://www.namasteui.com/wp-content/uploads/2021/08/seo.jpg",
        title: "SEO Optimization",
        desc: "Enhancing online visibility with expert SEO strategies—boosting traffic, improving rankings, and driving conversions.",
        tags: ["#SEO", "#optimization"],
      },
      {
        img: "https://res.cloudinary.com/upwork-cloud/image/upload/c_scale,w_1000/v1707999091/catalog/1501879611637391360/tw4yvftfjozhyoah1rbz.webp",
        title: "App Development",
        desc: "Creating high-performance mobile applications—seamless, user-friendly, and tailored to your business needs.",
        tags: ["#appdevelopment", "#mobile"],
      },
    ].map((card, index) => (
      <div key={index} className="w-full max-w-sm rounded overflow-hidden shadow-lg flex flex-col h-full">
        <img className="w-full h-48 object-cover" src={card.img} alt={card.title} />
        <div className="px-6 py-4 flex-grow">
          <div className="font-bold text-xl mb-2">{card.title}</div>
          <p className="text-gray-700 text-base">{card.desc}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          {card.tags.map((tag, i) => (
            <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {tag}
            </span>
          ))}
        </div>
      </div>
    ))}
  </div>
</motion.div>

      </motion.div>
    </>
  );
};

export default Project;
