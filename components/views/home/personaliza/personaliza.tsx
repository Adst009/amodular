import styles from "./styles.module.css";
import Slider from "../../../../components/views/home/slider/slider";

export default function Personaliza() {
  return (
    <>
      <section className={styles.section}>
        <div className={styles.title}>
          <h2 className="text-[29px] md:text-6xl lg:text-7xl w-12/12">Personalizamos</h2>
          <h3 className="text-[40px] md:text-7xl leading-4">tu cocina</h3>
          <img src="/images/apoyo_grafico/title.png" alt="" />
        </div>
        <div className={styles.general}>
          <div className={styles.slider}>
            <Slider />
          </div>
        </div>
      </section>
    </>
  );
}
