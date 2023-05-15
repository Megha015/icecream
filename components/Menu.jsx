import React from "react";
import css from "../styles/Menu.module.css";
import { urlFor } from "../lib/client";
import Image from "next/image";
import Link from "next/link";
const Menu = ({ pizzas }) => {
  // console.log(pizzas);
  return (
    <div id="menu" className={css.container}>
      <div className={css.heading}>
        <span>Fall In Love</span>
        <span>With Our Menu</span>
        <span>EVERYTIME!!!!</span>
      </div>
      <div className={css.menu}>
        {pizzas.map((pizza, id) => {
          const src = urlFor(pizza.image).url();
          return (
            <div className={css.pizza} key={id}>
              <Link href={`./pizza/${pizza.slug.current}`}>
                <div className={css.ImageWrapper}>
                  <Image
                    loader={() => src}
                    src={src}
                    alt=""
                    objectFit="cover"
                    layout="fill"
                  />
                </div>
              </Link>
              <span>{pizza.name}</span>
              <span>${pizza.price[1]}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Menu;
