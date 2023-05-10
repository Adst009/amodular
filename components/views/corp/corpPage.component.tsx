import React from "react";
import Change from "./change/change.component";
import Process from "./process/process.component";
import Timeline from "./timeline/timeline.component";
import Timeline2 from "./timeline/timeline2.component";

const CorpPage = () => {
  return (
    <>
      <Change />
      <div>
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
      </div>
    </>
  );
};

export default CorpPage;
