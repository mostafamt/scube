import React from "react";
import Header from "../components/Header";
import WhyScube from "../components/WhyScube";
import Message from "../components/Message";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Teachers from "../components/Teachers";
import Students from "../components/Students";

const Scube = () => {
  return (
    <div>
      <Header />
      <WhyScube />
      <Message />
      <Services />
      <Students />
      <Teachers />
      <Contact />
    </div>
  );
};

export default Scube;
