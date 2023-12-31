import React from "react";

//INTERNAL IMPORT
import Style from "../styles/index.module.css";
import {
  BigNFTSlider,
  Category,
  Filter,
  HeroSection,
  Service,
  Subscribe,
  Title,
  NFTCard,
  Collection,
  FollowerTab,
} from "../components/components.index";

const Home = () => {
  return (
    <div className={Style.homePage}>
      <HeroSection />
      <Service />
      <BigNFTSlider />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />

      <FollowerTab />
      <Collection />
      <Title
        heading="Featured NFTs"
        paragraph="Discover the most outstanding NFTs in all topics of life."
      />
      <Filter />
      <NFTCard />
      <Title
        heading="Browse by category"
        paragraph="Explore the NFTs in the most featured categories."
      />
      <Category />
      <Subscribe />
    </div>
  );
};

export default Home;
