import React from "react";
import Image from "next/image";

import NotificationStyle from "./Notification.module.css";
import images from "../../../../public/images/index";

const Notification = () => {
  return (
    <div className={NotificationStyle.notification}>
      <p>Notification</p>
      <div className={NotificationStyle.notification_box}>
        <div className={NotificationStyle.notification_box_img}>
          <Image
            src={images.user1}
            alt="profile image"
            width={50}
            height={50}
            className={NotificationStyle.notification_box_img}
          />
        </div>
        <div className={NotificationStyle.notification_box_info}>
          <h4>Võ Thị Kim Trang</h4>
          <p>Measure action your user...</p>
          <p>3 minutes ago</p>
        </div>
        <span className={NotificationStyle.notification_box_new}></span>
      </div>
    </div>
  );
};

export default Notification;
