import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  BigNFTSlider,
  HeroSection,
  Service,
  Subscribe,
} from "../components/components.index";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Subscribe />
    </div>
  );
};

export default Home;
