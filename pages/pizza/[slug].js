import React, { useState } from "react";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../lib/client";
import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import LeftArrow from "../../assets/arrowLeft.png";
import RightArrow from "../../assets/arrowRight.png";
import { useStore } from "../../store/store";
import toast, { Toaster } from "react-hot-toast";

const Pizza = ({ pizza }) => {
  const src = urlFor(pizza.image).url();
  const [Size, setSize] = useState(1);
  const [Quantity, setQuantity] = useState(1);

  const handleQuantity = (type) => {
    type === "inc"
      ? setQuantity((prev) => prev + 1)
      : Quantity === 1
      ? null
      : setQuantity((prev) => prev - 1);
  };
  const addPizza = useStore((state) => state.addPizza);
  const addToCart = () => {
    addPizza({
      ...pizza,
      price: pizza.price[Size],
      quantity: Quantity,
      size: Size,
    });
    toast.success("Added to cart");
  };
  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            src={src}
            layout="fill"
            objectFit="cover"
            alt=""
          />
        </div>
        <div className={css.right}>
          <span>{pizza.name}</span>
          <span>{pizza.details}</span>
          <span>${pizza.price[Size]}</span>
          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div
                onClick={() => setSize(0)}
                className={Size === 0 ? css.selected : ""}
              >
                Small
              </div>
              <div
                onClick={() => setSize(1)}
                className={Size === 1 ? css.selected : ""}
              >
                Regular
              </div>
              <div
                onClick={() => setSize(2)}
                className={Size === 2 ? css.selected : ""}
              >
                Large
              </div>
            </div>
          </div>

          <div className={css.quantity}>
            <span>Quantity</span>
            <div className={css.counter}>
              <Image
                src={LeftArrow}
                height={20}
                width={20}
                alt=""
                objectFit="contain"
                onClick={() => handleQuantity("dec")}
              />
              <span>{Quantity}</span>
              <div className={css.counter}>
                <Image
                  src={RightArrow}
                  height={20}
                  width={20}
                  alt=""
                  objectFit="contain"
                  onClick={() => handleQuantity("inc")}
                />
              </div>
            </div>

            <div className={`btn ${css.btn}`} onClick={addToCart}>
              Add to Cart
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </Layout>
  );
};

export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza"&&defined(slug.current)][].slug.current`
  );
  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == "${slug}"][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}

export default Pizza;
