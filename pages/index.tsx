import type { NextPage } from "next";
import Head from "next/head";
import Layout from "../components/general/layout/layout.component";
import HomePage from "../components/views/home/homePage.component";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Amodular</title>
        <meta name="description" content="Generated by <<Kru360>>" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
