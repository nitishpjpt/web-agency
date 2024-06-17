import React from "react";
import Navbar from "../Navbar";
import Hero from "../Hero";
import About from "../About";
import Service from "../Service";
import Project from "../Project";
import Price from "../Price";
import Faq from "../Faq";
import Footer from "../Footer";

export const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Service />
      <Project />
      <Price />
      <Faq />
      <Footer />
    </>
  );
};
