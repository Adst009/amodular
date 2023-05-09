import Head from "next/head";
import Work from "./work/work.component";
import Kitchen from "./kitchen/kitchen.component";
import Make from "./make/make.component";
import Results from "./results/results.component";
import Slider from "./slider/slider";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Amodular</title>
      </Head>
        <Work />
        <Kitchen />
        <Make/>
        <Results/>
        
    </div>
  );
};

export default HomePage;
