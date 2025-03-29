import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";

const packages = [
  {
    title: "Web Development",
    price: "$499",
    features: [
      "Custom Website Development",
      "E-commerce Solutions",
      "SEO Optimization",
      "CMS Development",
      "Performance Optimization",
    ],
  },
  {
    title: "App Development",
    price: "$799",
    features: [
      "Android & iOS Apps",
      "Cross-Platform Apps",
      "UI/UX Design",
      "API Integration",
      "App Store Deployment",
    ],
  },
  {
    title: "SEO & Marketing",
    price: "$299",
    features: [
      "On-Page & Off-Page SEO",
      "Local SEO Optimization",
      "Content Marketing",
      "Google Ads & PPC",
      "Analytics & Reporting",
    ],
  },
];

const PackageDetails = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.42, 0, 0.58, 1],
        when: "beforeChildren",
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      <section className="bg-[#0A192F] flex justify-center items-center px-6 py-16 md:p-10">
        <div className="max-w-6xl w-full">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <motion.h2
              variants={variants}
              className="text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-widest"
            >
              Our Services
            </motion.h2>
            <motion.p
              variants={variants}
              className="text-3xl md:text-5xl font-bold text-white mt-2"
            >
              Choose Your <span className="text-[#37C8AE]">Package</span>
            </motion.p>
          </div>

          {/* Package Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            {packages.map((pkg, index) => (
              <motion.div
                key={index}
                className="bg-white/10 backdrop-blur-md p-6 md:p-8 rounded-2xl border border-white/20 shadow-lg hover:scale-[1.03] transition-transform duration-300"
                variants={variants}
              >
                <h3 className="text-xl md:text-2xl font-bold text-[#37C8AE] mb-2">
                  {pkg.title}
                </h3>

                <ul className="mt-4 space-y-3 text-gray-300 text-sm md:text-base">
                  {pkg.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <button className="mt-6 bg-[#37C8AE] text-white py-2 px-4 md:px-6 rounded-lg hover:bg-[#2aa189] transition-all duration-300 w-full text-sm md:text-base">
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default PackageDetails;
