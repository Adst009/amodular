import styles from "./make.module.css";

const Make = () => {
  return (
    <div className="flex-col sm:flex-col md:flex-row lg:flex-row xl:flex items-center content-center">
      <div className={"pl-4 md:pl-32 md:w-6/12"}>
        <h2 className={"text-8xl font-black text-white " + styles.title_main}>
          HACEMOS
        </h2>
        <h3
          className={
            "text-6xl font-medium text-white " + styles.title_main
          }
        >
          tu idea realidad
        </h3>
        <p className="text-white my-14 md:w-6/12 pl-2 ">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.
        </p>
      </div>
      <div className={"flex-col md:w-6/12 " + styles.container_text}>
        <div className="border-2 border-red-700 p-8 ">
          <h3
              className={
                  "text-4xl md:text-7xl pl-4 font-medium text-white " + styles.title_main
              }
          >
            TU <br/>COCINA <br/>SERÁ <br/>COMO <br/> IMAGINAS
          </h3>
          <button className="text-white px-2 py-2 ml-2 w-10/12">
            Contáctanos
          </button>
        </div>
      </div>
    </div>
  );
};

export default Make;
