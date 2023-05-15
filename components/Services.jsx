import React from "react";
import css from "../styles/Services.module.css";
import img from "../assets/pic5.jpg";
import img2 from "../assets//New folder/i0.jpg";
import img3 from "../assets/pic7.jpg";
import Image from "next/image";
const Services = () => {
  return (
    <>
      {/* <div className={css.heading}>
        <span>Our Menu</span>
        <span>Our All Time Hits</span>
        <span>Our Delivery Partners</span>
      </div> */}

      <div className={css.services}>
        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image
              src={img}
              alt=""
              objectFit="cover"
              layout="fixed"
              height={100}
              width={100}
              className={css.roundImage}
            />{" "}
          </div>

          <span>Order now </span>
          <span>Get 20% discount on your first order!</span>
          {/* <span>Enjoy you Pizza</span> */}
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image
              src={img2}
              alt=""
              objectFit="cover"
              layout="fixed"
              height={100}
              width={100}
              className={css.roundImage}
            />
          </div>
          <span>Quick Ordering</span>
          <span>Delivering on time is our pleasure.</span>
        </div>

        <div className={css.feature}>
          <div className={css.ImageWrapper}>
            <Image
              src={img3}
              alt=""
              objectFit="cover"
              layout="fixed"
              height={100}
              width={100}
              className={css.roundImage}
            />
          </div>
          <span>Hassle-free Ordering</span>
          <span>Get yours before it melts </span>
        </div>
      </div>
    </>
  );
};

export default Services;
