import React from "react";
import Link from "next/link";

import HelpCenterStyle from "./HelpCenter.module.css";

const HelpCenter = () => {
  const helpCenter = [
    {
      name: "About",
      link: "about",
    },
    {
      name: "Contact Us",
      link: "contactus",
    },
    {
      name: "Sign Up",
      link: "signUp",
    },
    {
      name: "Log In",
      link: "login",
    },
    {
      name: "Subscription",
      link: "subscription",
    },
  ];
  return (
    <div className={HelpCenterStyle.box}>
      {helpCenter.map((helpCenterItem, i) => (
        <div className={HelpCenterStyle.helpCenter} key={i + 1}>
          <Link href={{ pathname: `${helpCenterItem.link}` }}>
            {helpCenterItem.name}
          </Link>
        </div>
      ))}
    </div>
  );
};
export default HelpCenter;
