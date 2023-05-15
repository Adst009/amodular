import styles from "./process.module.css";

function Process() {
  return (
    <div className="flex-col sm:flex-col pt-36 md:mb-[-300px] md:flex-row lg:flex-row xl:flex items-center content-center">
      <div className={"pl-10 lg:pl-32 md:w-8/12"}>
        <h2 className={"text-5xl md:text-8xl font-black text-white " + styles.title_main}>
          NUESTRO
        </h2>
        <h3 className={"text-4xl md:text-6xl font-medium text-white " + styles.title_main}>
          Proceso
        </h3>
        <p className="text-white my-14 w-8/12 md:w-7/12 pl-2 ">
          Si quieres remodelar tus espacios, personalizarlos a tu gusto y cuidar cada detalle del diseño,
          te contamos cómo es el proceso para adquirir nuestros servicios.
        </p>
      </div>
    </div>
  );
}

export default Process;
