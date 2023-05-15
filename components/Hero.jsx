import React from "react";
import Link from "next/link";

import css from "../styles/Hero.module.css";
import img from "../assets/New folder/ice3.jpg";
// import img2 from "../assets/pic3.jpg";
import Image from "next/image";
import { UilPhone } from "@iconscout/react-unicons";

const Hero = () => {
  return (
    <div className={css.container} id="hero">
      <div className={css.left}>
        {/* <div className={css.cherryDiv}>
          <span>Always On Time</span>
          <Image src={img2} alt="not found" width={30} height={25} />
        </div> */}
      </div>
      <div className={css.heroText}>
        <span>
          Our<span style={{ color: "yellowgreen" }}> Happiness </span>is
        </span>
        <span> Delivering </span>
        <span>
          Your<span style={{ color: "red" }}> Ice Cream</span>
        </span>
        <span> On Time </span>
        <span className={css.miniText}> Always in the race to win.</span>
      </div>

      <div className={css.button}>
        <Link href="#menu">
          <button className={`btn $(css.btn)`}>Order Now!</button>
        </Link>
      </div>

      <div className={css.rightSide}>
        <div className={css.imageContainer}>
          <Image src={img} alt="" layout="intrinsic" />
        </div>
        <div className={css.ContactUs}>
          <Link href="/Contact">
            <span>Contact Us</span>
          </Link>
          <div>
            <UilPhone color="black" />
          </div>
        </div>

        {/* <div className={css.pizza}>
          <div>
            <Image src={img2} alt="" objectFit="cover" layout="intrinsic" />
          </div>
          <div className={css.details}>
            <span>Veggie Pizza </span>
            <span>$7.99</span>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default Hero;
