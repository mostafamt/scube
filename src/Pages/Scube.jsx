import React from "react";
import { Link } from "react-router-dom";
import Performance from "../components/Performance";
import Header from "../components/Header";
import WhyScube from "../components/WhyScube";

const Scube = () => {
  return (
    <div>
      <Header />
      <WhyScube />
      <Performance />
    </div>
  );
};

export default Scube;
