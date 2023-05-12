import Head from "next/head";
import Work from "./work/work.component";
import Kitchen from "./kitchen/kitchen.component";
import Make from "./make/make.component";
import Results from "./results/results.component";
import Form from "./form/form.component";
import Header from "./header/header.component";
import Realidad from "./realidad/realidad";
import Personaliza from "./personaliza/personaliza";
import Resultados from "./resultados/resultados";
import Cuentanos from "./cuentanos/cuentanos";
import SliderHeader from "./slider_header/slider_header";
import NuestroTrabajo from "./nuestro_trabajo/nuestro_trabajo";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Amodular</title>
      </Head>
      <Header />
      {/* <Work /> */}
      {/* <Kitchen /> */}
      {/* <Make/> */}
      {/* <Results/> */}
      {/* <Form/> */}
      {/* <SliderHeader /> */}
      <NuestroTrabajo />
      <Personaliza />
      <Realidad />
      <Resultados />
      <Cuentanos />
    </div>
  );
};

export default HomePage;
