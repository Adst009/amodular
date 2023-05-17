import React from "react";
import Process from "./process/process.component";
import Timeline from "./timeline/timeline.component";
import Timeline2 from "./timeline/timeline2.component";
import Header from "../home/header/header.component";
import styles from "./corPage.module.css";
import Change from "./change/change.component";

const CorpPage = () => {
  return (
    <>
      <Header />
      <Change />
      <div className={styles.container_post}>
        <div className={"relative " + styles.container_process}>
          <Process />
          <Timeline
            title="TOMA DE CONTACTO"
            description="Inicialmente, desde el canal que nos contactes,
           solicitaremos tus datos personales para tener una comunicación más directa a través de nuestras asesoras."
            number="01"
          />
          <Timeline2
            title="DEFINIR PROYECTO"
            description="En este segundo paso escucharemos tus necesidades y requerimientos para el proyecto que deseas desarrollar."
            number="02"
          />
          <Timeline
            title="EJECUCIÓN DE PROYECTO"
            description="Nuestro equipo de expertos pondrá en marcha el desarrollo del proyecto para garantizar un resultado óptimo."
            number="03"
          />
          <Timeline2
            title="ENTREGA DE PROYECTO"
            description="El momento más esperado, entregar un proyecto que cumpla con tus expectativas y necesidades.
           Lo más importante para nosotros es lograr un resultado que sea tal cual el cliente lo imagina. "
            number="04"
          />
          <div className={"flex items-center justify-center "}>
            <img
              className="w-8/12 md:w-4/12 "
              src="./images/corp/remodel.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default CorpPage;
