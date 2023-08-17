import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

// Import Icon
import { MdNotifications } from "react-icons/md";
import { BsSearch } from "react-icons/bs";
import { CgMenuLeft, CgMenuRight } from "react-icons/cg";

import NavbarStyle from "./Navbar.module.css";
import { Discover, HelpCenter, Notification, Profile, Sidebar } from "./index";
import { Button } from "../components.index";
import images from "../../../public/images";

const NavBar = () => {
  const [discover, setDiscover] = useState(false);
  const [help, setHelp] = useState(false);
  const [notification, setNotification] = useState(false);
  const [profile, setProfile] = useState(false);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const openMenu = (e) => {
    const btnText = e.target.innerText;
    if (btnText === "Discover") {
      setDiscover(true);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    } else if (btnText === "Help Center") {
      setDiscover(false);
      setHelp(true);
      setNotification(false);
      setProfile(false);
    } else {
      setDiscover(false);
      setHelp(false);
      setNotification(false);
      setProfile(false);
    }
  };

  const openNotification = () => {
    if (!notification) {
      setNotification(true);
      setDiscover(false);
      setHelp(false);
      setProfile(false);
    } else {
      setNotification(false);
    }
  };

  const openProfile = () => {
    if (!profile) {
      setProfile(true);
      setHelp(false);
      setDiscover(false);
      setNotification(false);
    } else {
      setProfile(false);
    }
  };

  const openSideBar = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={NavbarStyle.navbar}>
      <div className={NavbarStyle.navbar_container}>
        <div className={NavbarStyle.navbar_container_left}>
          <div className={NavbarStyle.logo}>
            <Image src={images.logo} alt="logo" width={100} height={100} />
          </div>

          <div className={NavbarStyle.navbar_container_left_box_input}>
            <div className={NavbarStyle.navbar_container_left_box_input_box}>
              <input type="text" placeholder="Search NFT" />
              <BsSearch
                onClick={() => {}}
                className={NavbarStyle.search_icon}
              />
            </div>
          </div>
        </div>

        <div className={NavbarStyle.navbar_container_right}>
          {/* Discover Menu */}
          <div className={NavbarStyle.navbar_container_right_discover}>
            <p onClick={(e) => openMenu(e)}>Discover</p>
            {discover && (
              <div className={NavbarStyle.navbar_container_right_discover_box}>
                <Discover />
              </div>
            )}
          </div>

          {/* Help Center Menu */}
          <div className={NavbarStyle.navbar_container_right_help}>
            <p onClick={(e) => openMenu(e)}>Help Center</p>
            {help && (
              <div className={NavbarStyle.navbar_container_right_help_box}>
                <HelpCenter />
              </div>
            )}
          </div>

          {/* Notification */}
          <div className={NavbarStyle.navbar_container_right_notify}>
            <MdNotifications
              className={NavbarStyle.notify}
              onClick={openNotification}
            />
            {notification && <Notification />}
          </div>

          {/* CREATE BUTTON SECTION */}
          <div className={NavbarStyle.navbar_container_right_button}>
            <Button btnName="Create" handleClick={() => {}} />
          </div>

          {/* User Profile */}
          <div className={NavbarStyle.navbar_container_right_profile_box}>
            <div className={NavbarStyle.navbar_container_right_profile}>
              <Image
                src={images.user1}
                alt="Profile"
                width={40}
                height={40}
                onClick={openProfile}
                className={NavbarStyle.navbar_container_right_profile}
              />

              {profile && <Profile />}
            </div>
          </div>

          {/* Menu Button */}
          <div className={NavbarStyle.navbar_container_right_menuBtn}>
            <CgMenuRight
              className={NavbarStyle.menuIcon}
              onClick={() => openSideBar()}
            />
          </div>
        </div>
      </div>

      {/* Sidebar Component */}
      {openSideMenu && (
        <div className={NavbarStyle.sideBar}>
          <Sidebar setOpenSideMenu={setOpenSideMenu} />
        </div>
      )}
    </div>
  );
};

export default NavBar;
