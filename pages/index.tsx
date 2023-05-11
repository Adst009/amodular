import type { NextPage } from "next";
import Layout from "../components/general/layout/layout.component";
import HomePage from "../components/views/home/homePage.component";

const Home: NextPage = () => {
  return (
    <div>
      <Layout>
        <HomePage />
      </Layout>
    </div>
  );
};

export default Home;
