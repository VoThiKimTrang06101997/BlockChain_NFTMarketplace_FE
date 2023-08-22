import React from "react";

import TitleStyle from "./Title.module.css";

const Title = ({ heading, paragraph }) => {
  return (
    <div className={TitleStyle.title}>
      <div className={TitleStyle.title_box}>
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
    </div>
  );
};

export default Title;
