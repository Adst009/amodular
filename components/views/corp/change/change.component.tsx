import SwiperCorp from "./swiper/swiper.component";
import styles from "./change.module.css";

const Change = () => {
  return (
    <div className="bg-zinc-800">
      <div className={styles.container}>
        <div
          className={
            "flex flex-col relative content-center items-center pt-10 md:pt-48 pb-20 w-full " +
            styles.container_text
          }
        >
          <h2
            className={
              "text-4xl md:text-8xl font-black text-white leading-3 pb-0 md:pb-10 " +
              styles.title_main
            }
          >
            CAMBIAMOS
          </h2>
          <h3
            className={
              "text-4xl md:text-7xl pl-4 font-medium text-white " + styles.title_main
            }
          >
            tu entorno de trabajo
          </h3>
        </div>
      </div>
      <SwiperCorp />
    </div>
  );
};

export default Change;
