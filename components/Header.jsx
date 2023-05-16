import React, { useEffect, useState } from "react";
import css from "../styles/Header.module.css";
import logo from "../assets/ice1.jpg";
import Image from "next/image";
import { UilShoppingBag, UilReceipt } from "@iconscout/react-unicons";
import { useStore } from "../store/store";
import Link from "next/link";

const Header = () => {
  const [Order, setOrder] = useState("");

  useEffect(() => {
    setOrder(localStorage.getItem("order"));
  }, []);

  const items = useStore((state) => state.cart.pizzas.length);

  return (
    <div className={`${css.header} ${css.animateHeader}`}>
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

      <ul className={css.menu}>
        <li>
          <Link href="../">Home</Link>
        </li>
        <Link href="../#menu">
          <li>Menu</li>
        </Link>
        <Link href="/Contact">
          <li>Contact</li>
        </Link>
      </ul>

      <div className={css.rightSide}>
        <Link href="/cart">
          <div className={css.cart}>
            <UilShoppingBag size={35} color="black" />
            <div className={css.badge}>{items}</div>
            <span className={css.cartText}></span>
          </div>
        </Link>

        {Order && (
          <Link href={`/order/${Order}`}>
            <div className={css.cart}>
              <UilReceipt size={35} color="black" />
              {Order != "" && <div className={css.badge}></div>}
              <span className={css.statusText}></span>
            </div>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
