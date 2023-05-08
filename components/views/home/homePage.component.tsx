import Head from "next/head";
import Work from "./work/work.component";
import Kitchen from "./kitchen/kitchen.component";
import Make from "./make/make.component";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title></title>
      </Head>
        <Work />
        <Kitchen />
        <Make/>
    </div>
  );
};

export default HomePage;
