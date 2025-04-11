import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Service from "../Service";
import Project from "../Project";
import Price from "../Price";
import Faq from "../Faq";
import Footer from "../Footer";
import ServicesSection from "../Services";
import Contact from "../ContactSection";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      {/* <ServicesSection/> */}
      <Project />
      <Price />
      <Contact/>
      <Faq />
      <Footer />
    </>
  );
};
