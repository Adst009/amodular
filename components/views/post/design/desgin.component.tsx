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
          <div
            className={
              "h-auto w-full md:w-10/12 p-4 bg-[#262526] " + styles.div_subtitles
            }
          >
            <h3 className="flex text-xl font-bold">
              <img src="/images/apoyo_grafico/circle_start.png" alt="circle_start" title="circle_start" /> &nbsp;
              MINIMALISMO
            </h3>
            <p className="pt-3 xl:pl-8 ">
              Se refleja en espacios limpios, ordenados y despejados, con líneas
              simples y colores neutros. Los espacios minimalistas tienden a ser
              funcionales y desprovistos de ornamentación excesiva, creando una
              sensación de calma y serenidad.
            </p>
          </div>

          <div className="w-full md:pb-14">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design1.png"
              alt="design1"
              title="design1"
            />
          </div>
        </div>
        <div
          className={
            "ml-[2px] flex flex-col flex-col-reverse  md:flex-row lg-flex md:gap-10 w-10/12 md:w-8/12 md:m-[-16px]"
          }
        >
          <div
            className={
              "h-auto w-full md:w-10/12 p-4 bg-[#262526] " + styles.div_subtitles
            }
          >
            <h3 className="flex text-xl font-bold">
              <img src="/images/apoyo_grafico/circle_start.png" alt="circle_start" title="circle_start" /> &nbsp;
              INDUSTRIAL
            </h3>
            <p className="pt-3 xl:pl-8 ">
              Se enfoca en la creación y desarrollo de espacios industriales
              funcionales y eficientes. Combina los principios del diseño
              arquitectónico con las necesidades específicas de la industria,
              como la producción, la logística y la seguridad.
            </p>
          </div>

          <div className="w-full md:pb-14">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design2.png"
              alt="design2"
              title="design2"
            />
          </div>
        </div>
        <div
          className={
            "ml-[2px] flex flex-col flex-col-reverse  md:flex-row lg-flex md:gap-10 w-10/12 md:w-8/12 md:m-[-16px]"
          }
        >
          <div
            className={
              "h-[265px] w-full md:w-10/12 p-4 bg-[#262526] " +
              styles.div_subtitles
            }
          >
            <h3 className="flex text-xl font-bold">
              <img src="/images/apoyo_grafico/circle_start.png" alt="circle__start" title="circle_start" /> &nbsp;
              RÚSTICO
            </h3>
            <p className="pt-3 xl:pl-8 ">
              Se inspira en las construcciones tradicionales y rurales,
              caracterizadas por su aspecto natural, materiales orgánicos y
              detalles artesanales. Este estilo busca crear un ambiente cálido,
              acogedor y en armonía con la naturaleza.
            </p>
          </div>

          <div className="w-full md:pb-14">
            <img
              className="w-auto h-full object-cover"
              src="/images/blog/designs/design3.png"
              alt="design3"
              title="design3"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col"></div>
      <div className="ml-1 md:ml-0 w-full flex flex-col items-center justify-center mt-20">
        <div>
          <div className={styles.textoApoyo}>
            <span>SUSCRÍBETE Y</span>
            <span>SUSCRÍBETE Y</span>
          </div>
          <h2 className={"text-center text-4xl md:text-7xl"}>SUSCRÍBETE Y</h2>
          <h3 className={"text-center text-4xl md:text-7xl mb-10"}>
            conoce las ultimas novedades
          </h3>
        </div>
        <div className="md:bg-[#E20613] w-72 md:w-[62%] h-24 gap-2 md:gap-8 flex flex-col md:flex-row items-center justify-center">
          <input
            className="w-11/12 md:ml-7 my-2 p-2 md:w-5/12 "
            type="email"
            placeholder="E-mail"
          />
          <button
            className={
              "bg-[#E20613] md:bg-[#262526] md:mr-7 w-8/12 m-2 p-2 md:w-6/12 h-10"
            }
          >
            SUSCRÍBETE
          </button>
        </div>
      </div>
    </>
  );
};

export default Design;
