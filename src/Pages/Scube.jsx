import React from "react";
import { Link } from "react-router-dom";
import Performance from "../components/Performance";
import Header from "../components/Header";
import WhyScube from "../components/WhyScube";
import Story from "../components/Story";
import Services from "../components/Services";
import Contact from "../components/Contact";

const Scube = () => {
  return (
    <div>
      <Header />
      <WhyScube />
      <Performance />
      <Story />
      <Services />
      <Contact />
    </div>
  );
};

export default Scube;
