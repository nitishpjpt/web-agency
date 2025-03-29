import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const KnowMore = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-50 min-h-screen">
        {/* Main Content */}
        <main className="container mx-auto px-6 py-10">
          {/* About HyperDev */}
          <section id="about" className="my-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              About HyperDev
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              HyperDev is a leading web development agency focused on creating
              custom websites that help businesses thrive online. Our mission is
              to deliver innovative digital solutions that exceed our clients’
              expectations.
            </p>
          </section>

          {/* Our Services */}
          <section id="services" className="my-12">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Our Services
            </h2>
            <ul className="mt-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 text-gray-700">
              <li className="p-6 bg-white shadow-md rounded-lg">
                <strong className="text-xl">
                  Website Design & Development
                </strong>
                <p className="mt-2">
                  Creating responsive, user-friendly websites tailored to your
                  needs.
                </p>
              </li>
              <li className="p-6 bg-white shadow-md rounded-lg">
                <strong className="text-xl">E-commerce Solutions</strong>
                <p className="mt-2">
                  Building robust online stores with seamless shopping
                  experiences.
                </p>
              </li>
              <li className="p-6 bg-white shadow-md rounded-lg">
                <strong className="text-xl">SEO & Digital Marketing</strong>
                <p className="mt-2">
                  Enhancing your online presence to reach and engage your target
                  audience.
                </p>
              </li>
              <li className="p-6 bg-white shadow-md rounded-lg">
                <strong className="text-xl">Maintenance & Support</strong>
                <p className="mt-2">
                  Providing ongoing support to keep your website secure and
                  updated.
                </p>
              </li>
            </ul>
          </section>

          {/* Technologies We Use */}
          <section id="technologies" className="my-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Technologies We Use
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              We leverage the latest technologies like React,
              Node.js,Express,Mongodb, and WordPress to deliver high-performing,
              scalable websites.
            </p>
          </section>

          {/* Client Testimonials */}
          <section id="testimonials" className="my-12">
            <h2 className="text-3xl font-extrabold text-gray-900 text-center">
              Client Testimonials
            </h2>
            <blockquote className="mt-6 bg-white shadow-md p-6 rounded-lg text-gray-700 italic max-w-3xl mx-auto">
              "Working with HyperDev transformed our online presence. Their
              expertise and dedication are unparalleled."
              <span className="block mt-2 font-bold">– Akshay Rao</span>
            </blockquote>
          </section>

          {/* Get in Touch */}
          <section id="contact" className="my-12 text-center">
            <h2 className="text-3xl font-extrabold text-gray-900">
              Get in Touch
            </h2>
            <p className="mt-4 text-lg text-gray-700 max-w-3xl mx-auto">
              Have questions or ready to start your project? Contact us at
              <a
                href="mailto:hyperdev95@gmail.com"
                className="text-blue-600 underline ml-1"
              >
                hyperdev95@gmail.com
              </a>
            </p>
          </section>
        </main>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
};

export default KnowMore;
