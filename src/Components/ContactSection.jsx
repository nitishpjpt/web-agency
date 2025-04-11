import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section
      id="contact-us"
      className="py-16 px-6 md:px-20 bg-white text-center mb-[2rem] sm:mb-[15rem]"
    >
      <h2 className="text-3xl md:text-5xl font-extrabold text-black mb-12">
        Contact for any query
      </h2>

      <div className="bg-[#37C8AE] h-[70vh] p-6 md:p-12 rounded-xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <motion.div
          className="w-[80vw] grid grid-cols-1 md:grid-cols-2 gap-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <motion.div
            className="bg-[#0C2D36] rounded-xl p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14013.12080883604!2d77.2811896!3d28.5355169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce35a22589315%3A0x7a2bcb61e1e1a75!2sSarita%20Vihar!5e0!3m2!1sen!2sin!4v1712719219626!5m2!1sen!2sin"
              width="100%"
              height="350"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <motion.div
            className="bg-[#0C2D36] rounded-xl p-6"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full p-3  rounded-md border border-gray-300 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Equiry"
                className="w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none"
              />
              <textarea
                rows="5"
                placeholder="Message"
                className="w-full p-3 rounded-md bg-white border border-gray-300 focus:outline-none"
              ></textarea>
              <button
                type="submit"
                className="bg-white text-black px-6 py-3 rounded-md hover:bg-gray-200"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
