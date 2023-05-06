import styles from "./work.module.css";
const Work = () => {
  return (
    <div className="flex w-full">
      <div className="w-8/12">
        <h3>sliderrrr</h3>
      </div>
      <div
        className={
          "flex flex-col content-center items-start py-48 w-4/12 " +
          styles.container_text
        }
      >
        <h2 className={"text-8xl font-black text-white " + styles.title_main}>
          NUESTRO
        </h2>
        <h3 className={"text-8xl pl-4 font-medium text-white " + styles.title_main}>
          trabajo
        </h3>
        <p className="text-white my-14 w-8/12 pl-2">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.
        </p>
        <button className="text-white px-11 py-2 ml-2">Contactanos</button>
      </div>
    </div>
  );
};

export default Work;
