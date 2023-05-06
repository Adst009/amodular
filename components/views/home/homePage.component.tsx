import Head from "next/head";
import Work from "./work/work.component";
import Kitchen from "./kitchen/kitchen.component";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
       <Work />
       <Kitchen />
    </div>
  );
};

export default HomePage;
