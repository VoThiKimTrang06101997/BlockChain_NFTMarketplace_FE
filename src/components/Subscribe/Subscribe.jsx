import React, { useCallback, useState } from "react";
import Image from "next/image";

import SubscribeStyle from "./Subscribe.module.css";
import images from "../../../public/images";
import { RiSendPlaneFill } from "react-icons/ri";

const Subscribe = () => {
  return (
    <div className={SubscribeStyle.subscribe}>
      <div className={SubscribeStyle.subscribe_box}>
        <div className={SubscribeStyle.subscribe_box_left}>
          <h2>Never miss a drop</h2>
          <p>
            Subcribe to our super-exclusive drop list and be the first to know
            abour upcoming drops
          </p>
          <div className={SubscribeStyle.subscribe_box_left_box}>
            <span>01</span>
            <small>Get more discount</small>
          </div>

          <div className={SubscribeStyle.subscribe_box_left_box}>
            <span>02</span>
            <small>Get premium magazines</small>
          </div>

          <div className={SubscribeStyle.subscribe_box_left_input}>
            <input type="email" placeholder="Enter your email" />
            <RiSendPlaneFill
              className={SubscribeStyle.subscribe_box_left_input_icon}
            />
          </div>
        </div>

        <div className={SubscribeStyle.subscribe_box_right}>
          <Image
            src={images.update}
            alt="get update"
            height={600}
            width={800}
          />
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
