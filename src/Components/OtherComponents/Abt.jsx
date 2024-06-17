import React from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

const Abt = () => {
  return (
    <>
      <div className="bg-gray-100 min-h-screen">
        {/* Header */}
       <Navbar></Navbar>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-6">
          {/* Overview */}
          <section id="overview" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Overview</h2>
            <p className="mt-4 text-gray-700">
              DigiBoost is a dedicated team of web development experts committed
              to delivering tailored solutions that empower businesses to
              succeed in the digital world. With a focus on innovation and
              client satisfaction, we strive to exceed expectations with every
              project.
            </p>
          </section>

          {/* Mission Statement */}
          <section id="mission" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Mission Statement
            </h2>
            <p className="mt-4 text-gray-700">
              Our mission is to leverage cutting-edge technologies and creative
              strategies to build websites and digital solutions that not only
              meet but exceed our clients’ goals. We aim to establish long-term
              partnerships based on trust, transparency, and exceptional
              results.
            </p>
          </section>

          {/* Our Values */}
          <section id="values" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Values</h2>
            <ul className="mt-4 list-disc list-inside text-gray-700">
              <li>
                <strong>Client-Centric Approach:</strong> Putting our clients'
                needs first and ensuring their satisfaction drives every
                decision we make.
              </li>
              <li>
                <strong>Innovation:</strong> Embracing creativity and staying at
                the forefront of technological advancements to deliver
                cutting-edge solutions.
              </li>
              <li>
                <strong>Integrity:</strong> Upholding honesty, transparency, and
                accountability in all our interactions and operations.
              </li>
              <li>
                <strong>Collaboration:</strong> Fostering a collaborative
                environment where teamwork and communication lead to superior
                outcomes.
              </li>
            </ul>
          </section>

          {/* Why Choose Us */}
          <section id="why-choose-us" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Why Choose Us</h2>
            <p className="mt-4 text-gray-700">
              At DigiBoost, we differentiate ourselves through our dedication to
              excellence, personalized service, and a proven track record of
              delivering successful projects. Whether you're a startup or an
              established enterprise, we tailor our solutions to meet your
              unique business objectives.
            </p>
          </section>

          {/* Our Team */}
          <section id="our-team" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Our Team</h2>
            <p className="mt-4 text-gray-700">
              Meet our talented team of developers, designers, and digital
              marketers who bring passion, expertise, and innovation to every
              project. With diverse skill sets and a shared commitment to
              excellence, we collaborate seamlessly to deliver exceptional
              results.
            </p>
          </section>

          {/* Awards and Recognition */}
          <section id="awards" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">
              Awards and Recognition
            </h2>
            <p className="mt-4 text-gray-700">
              We are proud to have been recognized for our achievements in web
              development and digital innovation. These accolades inspire us to
              continually raise the bar and set new benchmarks for excellence in
              our industry.
            </p>
          </section>

          {/* Get in Touch */}
          <section id="contact" className="my-8">
            <h2 className="text-2xl font-bold text-gray-800">Get in Touch</h2>
            <p className="mt-4 text-gray-700">
              Ready to embark on your digital journey with DigiBoost? Contact us
              today to discuss how we can help transform your ideas into
              reality. We look forward to hearing from you!
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
        <Footer/>
      </div>
    </>
  );
};

export default Abt;
