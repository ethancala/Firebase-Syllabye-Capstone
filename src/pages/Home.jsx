import React from "react";
import Header from "../components/Header";
import TechStack from "../components/TechStack";
import Services from "../components/Services";
import WhyUse from "../components/WhyUse";
import Parallax from "../components/Parallax";
import Team from "../components/Team";

const Home = () => {
  return (
    <div>
      <Header />
      <TechStack />
      <Services />
      <WhyUse />
      <Parallax />
      <Team />
    </div>
  );
};

export default Home;
