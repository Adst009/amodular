import { useRouter } from "next/router";
import styles from "./footer.module.css";

export default function Footer() {
  const route = useRouter();
  return (
    <>
      <div
        className={
          styles.content_footer + " pb-36 flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row h-96 justify-center gap-10 pt-20 " +
          (route.asPath === "/" ? styles.content_line : " ")
        }
      >
        <div className={" flex flex-col gap-10 w-80 md:w-60 md:h-64 lg:w-64 " + styles.margin_footer}>
          <img src="/images/logo.png" alt="Amodular" title="amodular" />
          <h4>Sobre nosotros</h4>
          <p>
            AMODULAR con trayectoria de 25 años ha logrado posicionarse como una de las principales empresas transformadoras
            y desarrolladoras de mobiliario y ambientes personalizados para empresas, hogar, educativo
            y hotelería con participación en más de cien proyectos a nivel nacional.


          </p>
        </div>
        <div className="w-80 md:w-60 lg:w-60 ">
          <div className="flex flex-col gap-6">
            <div>
              <h4>Contacto</h4>
            </div>
            <div className={styles.items}>
              <img
                src={"./images/ubicacion.png"}
                alt={"logo ubicacion"}
                width={50}
                height={50}
                title="logo ubicacion"
              />
              <p>Calle 29a #22- 46, Esquina
                Cartagena, Bolívar. Colombia.
              </p>
            </div>
            <div className={styles.items}>
              <img
                src={"./images/telefono.png"}
                alt={"logo telefono"}
                width={50}
                height={50}
                title="logo telefono"
              />
              <div className={styles.textico}>
                <p>(+57)3001234567</p>
              </div>
            </div>
            <div className={styles.items}>
              <img
                src={"./images/horario.png"}
                alt={"logo horario"}
                width={50}
                height={50}
                title="logo horario"
              />
              <div>
                <p>Horario de atención <br/>
                  09:00 am 07:00 pm</p>
              </div>
            </div>
          </div>
        </div>
        <div
          className={"w-80 md:w-60 md:h-64 lg:w-60 " + styles.margin_footer2}
        >
          <div className={"flex flex-col gap-8"}>
            <div className={styles.items}>
              <h4>Redes sociales</h4>
            </div>
            <div className={styles.items}>
              <a href="https://www.instagram.com/amodular.col/" target="_blank">
                <img
                  src={"./images/instagram.png"}
                  alt={"logo instagram"}
                  width={50}
                  height={50}
                  title="logo instagram"
                />
              </a>
              <a
                href="https://www.facebook.com/Amodular.Arquitectura.Interior/"
                target="_blank"
              >
                <img
                  src={"./images/facebook.png"}
                  alt={"logo facebook"}
                  width={50}
                  height={50}
                  title="logo facebook"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
