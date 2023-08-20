import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  BigNFTSlider,
  HeroSection,
  Service,
} from "../components/components.index";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
    </div>
  );
};

export default Home;
