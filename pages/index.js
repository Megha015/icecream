import Head from "next/head";
import Layout from "../components/Layout";
import Hero from "../components/Hero";
import css from "../styles/Home.module.css";
import Services from "../components/Services";
import Menu from "../components/Menu";
import { client } from "../lib/client";
export default function Home({ pizzas }) {
  return (
    <Layout>
      <div className={css.container}>
        <Head>
          <title>Ice Cream World</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          {/* <meta name="Online Order " content="Promised Delivery Everytime" /> */}
          <link rel="icon" href="" />
        </Head>
        {/* body */}
        <main>
          <Hero />
          <Services />
          <Menu pizzas={pizzas} />
        </main>
      </div>
    </Layout>
  );
}

export const getServerSideProps = async () => {
  const query = '*[_type=="pizza"]';
  const pizzas = await client.fetch(query);
  return {
    props: {
      pizzas,
    },
  };
};
