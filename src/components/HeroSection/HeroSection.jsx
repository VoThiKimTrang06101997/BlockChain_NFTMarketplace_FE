import React from "react";
import Image from "next/image";

import HeroSectionStyle from "./HeroSection.module.css";
import images from "../../../public/images";
import { Button } from "../components.index";

const HeroSection = () => {
  return (
    <div className={HeroSectionStyle.heroSection}>
      <div className={HeroSectionStyle.heroSection_box}>
        <div className={HeroSectionStyle.heroSection_box_left}>
          <h1>Discover, collect, and sell NFTs 🖼️</h1>
          <p>
            Discover the most outstanding NTFs in all topics of life. Creative
            your NTFs and sell them
          </p>
          <Button btnName="Start your search" />
        </div>
        <div className={HeroSectionStyle.heroSection_box_right}>
          <Image
            src={images.hero}
            alt="Hero section"
            width={600}
            height={600}
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
