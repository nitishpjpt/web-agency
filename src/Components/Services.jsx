import React, { useState } from "react";
import {
  Code,
  FileCode,
  ExternalLink,
  Monitor,
  Smartphone,
  Mail
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const services = [
  {
    icon: <Code className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "Web Design",
    description:
      "We provide custom, responsive, SEO-friendly web design for optimal user experience.",
    details:
      "Our web design services focus on creating engaging, mobile-friendly websites that reflect your brand identity and deliver results. We use the latest design trends and tools to ensure your users have a seamless experience across all devices.",
  },
  {
    icon: <FileCode className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "Web Development",
    description:
      "We offer web development services, building scalable and secure websites using modern tech.",
    details:
      "We specialize in developing robust websites and web apps using modern stacks like MERN, MEAN, or Django. Whether it's a small portfolio site or a large-scale SaaS platform, we ensure performance and security at every layer.",
  },
  {
    icon: <ExternalLink className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "UI/UX Design",
    description:
      "UI/UX design services focused on intuitive, user-friendly interfaces that drive conversions.",
    details:
      "Our UI/UX designers craft intuitive interfaces that improve usability and boost engagement. From user journey mapping to final mockups, we blend creativity and strategy for better conversion rates.",
  },
  {
    icon: <Monitor className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "Web Security",
    description:
      "Web security services, ensuring websites are protected from cyber threats with robust security measures like encryption, firewalls, and vulnerability testing.",
    details:
      "We create stunning visuals for branding, social media, advertisements, and more. Our designs reflect your brand voice and help you stand out in a crowded market.",
  },
  {
    icon: <Mail className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "Digital Marketing",
    description:
      "Digital marketing services, including SEO, social media marketing, content creation, and paid advertising, to help businesses enhance their online presence and drive traffic.",
    details:
      "From schema design to backup and performance optimization, we handle your database needs to ensure data integrity, scalability, and security.",
  },
  {
    icon: <Smartphone className="w-16 h-16 text-[#9b1c23] mb-4" />,
    title: "Programming",
    description:
      "Programming services, specializing in custom software development, web applications, and solutions using technologies like Java, Python, PHP, and more to meet specific business requirements.",
    details:
      "We build high-performance mobile apps for both Android and iOS platforms using React Native and Flutter, ensuring smooth user experiences and real-time capabilities.",
  },
];

const ServicesSection = () => {
  const [selectedService, setSelectedService] = useState(null);

  return (
    <div id="services" className="bg-white py-16 px-4 text-center">
      <motion.h3
        className="text-[#9b1c23] text-lg font-semibold mb-2"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our Services
      </motion.h3>
      <motion.h2
        className="text-3xl md:text-5xl font-extrabold text-black mb-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Services Built Specifically For <br className="hidden md:block" />
        Your Business
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <motion.div
          key={index}
          className="bg-gradient-to-br from-white to-[#f9f9f9] text-[#1a1a1a] rounded-2xl shadow-xl px-6 py-10 flex flex-col items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.2 }}
          viewport={{ once: true }}
        >
          {React.cloneElement(service.icon, { className: "w-16 h-16 text-[#3F88C5] mb-4" })}
          <h3 className="text-xl font-bold text-[#1a1a1a] mb-3">{service.title}</h3>
          <p className="text-gray-600 mb-6 text-center">{service.description}</p>
          <button
            className="bg-[#4BABA2] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#3F88C5] transition"
            onClick={() => setSelectedService(service)}
          >
            Read More
          </button>
        </motion.div>
        
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService && (
          <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-2xl p-8 max-w-xl w-full relative"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              transition={{ duration: 0.3 }}
            >
              <h2 className="text-2xl font-bold mb-4 text-[#9b1c23]">
                {selectedService.title}
              </h2>
              <p className="text-gray-700 mb-6">{selectedService.details}</p>
              <button
                className="absolute top-3 right-4 text-gray-500 hover:text-black text-2xl"
                onClick={() => setSelectedService(null)}
              >
                &times;
              </button>
              <div className="text-right">
                <button
                  onClick={() => setSelectedService(null)}
                  className="bg-[#c62828] text-white px-6 py-2 rounded-full hover:bg-[#a71f1f] transition"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ServicesSection;
