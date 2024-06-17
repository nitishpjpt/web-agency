import React from "react";
import Navbar from "../Navbar";
import Footer from "../Footer";

const KnowMore = () => {
  return (
    <>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
     

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* About DigiBoost */}
          <section id="about" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">
              About DigiBoost
            </h2>
            <p className="mt-4 text-gray-700">
              DigiBoost is a leading web development agency focused on creating
              custom websites that help businesses thrive online. Our mission is
              to deliver innovative digital solutions that exceed our clients’
              expectations.
            </p>
          </section>

          {/* Our Services */}
          <section id="services" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Services</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>
                <strong>Website Design and Development:</strong> Creating
                responsive, user-friendly websites tailored to your needs.
              </li>
              <li>
                <strong>E-commerce Solutions:</strong> Building robust online
                stores with seamless shopping experiences.
              </li>
              <li>
                <strong>SEO and Digital Marketing:</strong> Enhancing your
                online presence to reach and engage your target audience.
              </li>
              <li>
                <strong>Maintenance and Support:</strong> Providing ongoing
                support to keep your website secure and updated.
              </li>
            </ul>
          </section>

          {/* Our Process */}
          <section id="process" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Process</h2>
            <p className="mt-4 text-gray-700">
              From consultation to launch, our structured process ensures
              quality and efficiency at every step. We collaborate closely with
              clients to ensure their vision is realized.
            </p>
          </section>

          {/* Meet the Team */}
          <section id="team" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Meet the Team</h2>
            <p className="mt-4 text-gray-700">
              Our team of skilled developers, designers, and marketers bring
              years of experience and a passion for innovation to every project.
            </p>
          </section>

          {/* Technologies We Use */}
          <section id="technologies" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Technologies We Use
            </h2>
            <p className="mt-4 text-gray-700">
              We leverage the latest technologies like React, WordPress, and
              Node.js to deliver high-performing, scalable websites.
            </p>
          </section>

          {/* Client Testimonials */}
          <section id="testimonials" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Client Testimonials
            </h2>
            <blockquote className="mt-4 border-l-4 border-blue-800 pl-4 text-gray-700 italic">
              "Working with DigiBoost transformed our online presence. Their
              expertise and dedication are unparalleled."
              <span className="block mt-2 font-bold">
                – John Doe, CEO of XYZ Corp.
              </span>
            </blockquote>
          </section>

          {/* FAQs */}
          <section id="faqs" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">FAQs</h2>
            <div className="mt-4">
              <p className="font-bold text-gray-700">
                How much does it cost to develop a website?
              </p>
              <p className="text-gray-700">
                Costs vary by project complexity, starting from $1,000 for basic
                sites to $5,000+ for custom solutions.
              </p>
            </div>
            <div className="mt-4">
              <p className="font-bold text-gray-700">
                How long does it take to develop a website?
              </p>
              <p className="text-gray-700">
                Typically, projects take between 4 to 12 weeks, depending on
                their complexity.
              </p>
            </div>
          </section>

          {/* Get in Touch */}
          <section id="contact" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-4 text-gray-700">
              Have questions or ready to start your project? Contact us at{" "}
              <a
                href="mailto:info@digiboost.com"
                className="text-blue-800 underline"
              >
                info@digiboost.com
              </a>{" "}
              or follow us on social media.
            </p>
            <div className="mt-4">
              <a href="#" className="text-blue-800 underline mr-4">
                LinkedIn
              </a>
              <a href="#" className="text-blue-800 underline mr-4">
                Twitter
              </a>
              <a href="#" className="text-blue-800 underline">
                Facebook
              </a>
            </div>
          </section>
        </main>

        {/* Footer */}
         <Footer></Footer>
      </div>
    </>
  );
};

export default KnowMore;
