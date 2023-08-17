import React from "react";
import Image from "next/image";
import {
  TiSocialFacebook,
  TiSocialLinkedin,
  TiSocialTwitter,
  TiSocialYoutube,
  TiSocialInstagram,
  TiArrowSortedDown,
  TiArrowSortedUp,
} from "react-icons/ti";
import { RiSendPlaneFill } from "react-icons/ri";

import FooterStyle from "./Footer.module.css";
import { Discover, HelpCenter } from "../Navbar/index";

import images from "../../../public/images/index";

const Footer = () => {
  return (
    <div className={FooterStyle.footer}>
      <div className={FooterStyle.footer_box}>
        <div className={FooterStyle.footer_box_social}>
          <Image src={images.logo} alt="footer logo" height={100} width={100} />
          <p>
            The world’s first and largest digital marketplace for crypto
            collectibles and non-fungible tokens (NFTs). Buy, sell, and discover
            exclusive digital items.
          </p>

          <div className={FooterStyle.footer_social}>
            <a href="#">
              <TiSocialFacebook />
            </a>
            <a href="#">
              <TiSocialLinkedin />
            </a>
            <a href="#">
              <TiSocialTwitter />
            </a>
            <a href="#">
              <TiSocialYoutube />
            </a>
            <a href="#">
              <TiSocialInstagram />
            </a>
          </div>
        </div>

        <div className={FooterStyle.footer_box_discover}>
          <h3>Discover</h3>
          <Discover />
        </div>

        <div className={FooterStyle.footer_box_help}>
          <h3>Help Center</h3>
          <HelpCenter />
        </div>

        <div className={FooterStyle.subscribe}>
          <h3>Subscribe</h3>

          <div className={FooterStyle.subscribe_box}>
            <input type="email" placeholder="Enter your email *" />
            <RiSendPlaneFill className={FooterStyle.subscribe_box_send} />
          </div>
          <div className={FooterStyle.subscribe_box_info}>
            <p>
              Discover, collect, and sell extraordinary NFTs OpenSea is the
              world first and largest NFT marketplace
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
