import React from "react";
import styles from "./design.module.css";

const Design = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center pt-20">
        <div
          className={
            "ml-[2px] flex flex-col flex-col-reverse  md:flex-row lg-flex md:gap-10 w-10/12 md:w-8/12 md:m-[-16px]"
          }
        >
          <div className={"h-auto w-full md:w-7/12 p-4 bg-[#262526] " + styles.div_subtitles }>
            <h3 className="text-xl font-bold">MINIMALISMO</h3>
            <p className="pt-3">
              Se refleja en espacios limpios, ordenados y despejados, con líneas simples y colores neutros.
              Los espacios minimalistas tienden a ser funcionales y desprovistos de ornamentación excesiva,
              creando una sensación de calma y serenidad.
            </p>
          </div>

          <div className="w-full">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design1.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={
            "ml-[2px] flex flex-col flex-col-reverse  md:flex-row lg-flex md:gap-10 w-10/12 md:w-8/12 md:m-[-16px]"
          }
        >
          <div className={"h-auto w-full md:w-7/12 p-4 bg-[#262526] " + styles.div_subtitles}>
            <h3 className="text-xl font-bold">INDUSTRIAL</h3>
            <p className="pt-3">
              Se enfoca en la creación y desarrollo de espacios industriales funcionales y eficientes.
              Combina los principios del diseño arquitectónico con las necesidades específicas de la industria,
              como la producción, la logística y la seguridad.
            </p>
          </div>

          <div className="w-full">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design2.png"
              alt=""
            />
          </div>
        </div>
        <div
          className={
            "ml-[2px] flex flex-col flex-col-reverse  md:flex-row lg-flex md:gap-10 w-10/12 md:w-8/12 md:m-[-16px]"
          }
        >
          <div className={"h-auto w-full md:w-7/12 p-4 bg-[#262526] " + styles.div_subtitles}>
            <h3 className="text-xl font-bold">RÚSTICO</h3>
            <p className="pt-3">
              Se inspira en las construcciones tradicionales y rurales, caracterizadas por su aspecto natural,
              materiales orgánicos y detalles artesanales. Este estilo busca crear un ambiente cálido, acogedor y en armonía con la naturaleza.
            </p>
          </div>

          <div className="w-full">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design3.png"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col">
      </div>
      <div className="ml-1 md:ml-0 w-full flex flex-col items-center justify-center mt-20">
        <div>
          <div className={styles.textoApoyo}>


            <span>SUSCRÍBETE Y</span>
          </div>
          <h2 className={"text-center text-4xl md:text-7xl"}>SUSCRÍBETE Y</h2>
          <h3 className={"text-center text-4xl md:text-7xl mb-10"}>conoce las ultimas novedades</h3>
        </div>
        <div className="bg-[#E20613] w-80 md:w-[62%] h-20 gap-2 md:gap-8 flex items-center justify-center">
          <input className="w-5/12 h-10" type="email" placeholder="E-mail" />
          <button className={"bg-[#262526] w-6/12 h-10"}>SUSCRÍBETE</button>
        </div>
      </div>
    </>
  );
};

export default Design;
