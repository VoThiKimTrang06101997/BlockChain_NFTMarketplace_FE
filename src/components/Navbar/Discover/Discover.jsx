import React from "react";
import Link from "next/link";

import DiscoverStyle from "./Discover.module.css";

const Discover = () => {
  //--------DISCOVER NAVIGATION MENU
  const discover = [
    {
      name: "Collection",
      link: "collection",
    },
    {
      name: "Search",
      link: "search",
    },
    {
      name: "Author Profile",
      link: "author",
    },
    {
      name: "NFT Details",
      link: "NFT-details",
    },
    {
      name: "Account Setting",
      link: "account",
    },
    {
      name: "Upload NFT",
      link: "uploadNFT",
    },
    {
      name: "Connect Wallet",
      link: "connectWallet",
    },
    {
      name: "Blog",
      link: "blog",
    },
  ];
  return (
    <div>
      {discover.map((discoverItem, i) => (
        <div key={i + 1} className={DiscoverStyle.discover}>
          <Link href={{ pathname: `${discoverItem.link}` }}>
            {discoverItem.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default Discover;
