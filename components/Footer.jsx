import React from "react";
import css from "../styles/Footer.module.css";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import logo from "../assets/ice1.jpg";
import Image from "next/image";
const Footer = () => {
  return (
    <div className={css.container}>
      <span>All Rights Reserved</span>
      <div className={css.social}>
        <UilFacebook size={45} />
        <UilTwitter size={45} />
        <UilInstagram size={45} />
      </div>

      <div className={css.logo}>
        <Image
          src={logo}
          className={`${css.image} image`}
          alt="not found"
          width={50}
          height={50}
        />
        <span>Ice Cream World</span>
      </div>
    </div>
  );
};

export default Footer;
