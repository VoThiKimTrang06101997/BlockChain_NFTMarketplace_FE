import React from "react";
import Image from "next/image";
import { BsCircleFill } from "react-icons/bs";

import CategoryStyle from "./Category.module.css";
import images from "../../../public/images";

const Category = () => {
  const CategoryArray = [1, 2, 3, 4, 5, 6];
  return (
    <div className={CategoryStyle.box_category}>
      <div className={CategoryStyle.category}>
        {CategoryArray.map((el, i) => (
          <div className={CategoryStyle.category_box} key={1 + 1}>
            <Image
              src={images.creatorbackground1}
              className={CategoryStyle.category_box_img}
              alt="Background image"
              width={350}
              height={150}
              objectFit="cover"
            />

            <div className={CategoryStyle.category_box_title}>
              <span>
                <BsCircleFill />
              </span>
              <div className={CategoryStyle.category_box_title_info}>
                <h4>Enterainment</h4>
                <p>1995 NFTS</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
