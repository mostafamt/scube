import React from "react";
import { Link } from "react-router-dom";
import Performance from "../components/Performance";
import Header from "../components/Header";
import WhyScube from "../components/WhyScube";
import Story from "../components/Story";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Teachers from "../components/Teachers";
import Students from "../components/Students";

const Scube = () => {
  return (
    <div>
      <Header />
      <WhyScube />
      <Performance />
      <Story />
      <Services />
      <Students />
      <Teachers />
      <Contact />
    </div>
  );
};

export default Scube;
