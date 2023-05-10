import Layout from "../../components/general/layout/layout.component";
import Change from "../../components/views/corp/change/change.component";
import Process from "../../components/views/corp/process/process.component";
import Timeline from "../../components/views/corp/timeline/timeline.component";
import Timeline2 from "../../components/views/corp/timeline/timeline2.component";

const index = () => {
  return (
    <Layout>
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
    </Layout>
  );
};

export default index;
