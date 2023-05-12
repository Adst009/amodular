import React from "react";
import Process from "./process/process.component";
import Timeline from "./timeline/timeline.component";
import Timeline2 from "./timeline/timeline2.component";
import Header from "../home/header/header.component";
import styles from "./corPage.module.css"
import Change from "./change/change.component";

const CorpPage = () => {
  return (
    <>
      <Header />
      <Change />
      <div className={ "relative " + styles.container_process}>
        <Process />
        <Timeline
          title="TOMA DE CONTACTO"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
          iusto laborum illo voluptatum rerum animi incidunt distinctio aut
          expedita."
          number="01"
        />
        <Timeline2
          title="DEFINIR PROYECTO"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                      iusto laborum illo voluptatum rerum animi incidunt distinctio aut
                      expedita."
          number="02"
        />
        <Timeline
          title="EJECUCIÓN DE PROYECTO"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
                iusto laborum illo voluptatum rerum animi incidunt distinctio aut
                expedita."
          number="03"
        />
        <Timeline2
          title="ENTREGA DE PROYECTO"
          description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
              iusto laborum illo voluptatum rerum animi incidunt distinctio aut
              expedita."
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
    </>
  );
};

export default CorpPage;
