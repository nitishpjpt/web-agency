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

const PricingPlans = () => {
  const controls = useAnimation();
  const { ref, inView } = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (inView) controls.start("visible");
    else controls.start("hidden");
  }, [controls, inView]);

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.15 },
    },
  };

  return (
    <>
      <motion.section
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={variants}
        className="bg-[#0C2D35] py-16 px-4 md:px-10 text-center"
      >
        <motion.h2
          variants={variants}
          className="text-lg md:text-xl font-semibold text-gray-400 uppercase tracking-widest"
        >
          Our Services
        </motion.h2>
        <motion.p
          variants={variants}
          className="text-3xl md:text-5xl font-bold text-white mt-2 mb-10"
        >
          Choose Your <span className="text-[#37C8AE]">Package</span>
        </motion.p>
        <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((plan, index) => (
            <motion.div
              key={index}
              variants={variants}
              className="bg-white/5 rounded-2xl p-8 border border-white/10 backdrop-blur-lg shadow-xl flex flex-col justify-between hover:scale-[1.03] transition-transform duration-300"
            >
              <div>
                <h3 className="text-white text-xl font-semibold mb-2">
                  {plan.title}
                </h3>
                <p className="text-sm text-gray-400 mb-4">{plan.description}</p>
                <div className="text-white text-3xl font-bold mb-1">
                  {plan.price}
                </div>
                <div className="text-gray-400 text-sm mb-6">
                  {plan.additional}
                </div>

                <ul className="space-y-3 text-sm text-gray-300">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      ✅ <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-8 w-full bg-white/10 border border-white/20 text-white py-2 rounded-lg hover:bg-[#37C8AE] hover:text-black transition-all duration-300 text-sm font-medium">
                {plan.button}
              </button>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </>
  );
};

export default PricingPlans;
