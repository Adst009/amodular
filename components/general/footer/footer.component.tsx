import styles from "./footer.module.css";

export default function Footer() {
  return (
    <>
      <div
        className={
          "flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row h-96 justify-center gap-10 pt-20 " +
          styles.content_footer
        }
      >
        <div className={"w-80 md:w-60 md:h-64 lg:w-60 " + styles.margin_footer}>
          <img src="/images/logo.png" alt="Amodular" title="amodular" />

          <h4>Sobre nosotros</h4>
          <p>
            Lorem ipsum dolor sit amet, conse tetuer adipiscing elit, sed diam
            nonummy nibh euismod tincidunt ut.
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
              <p>Calle 29a #22-44 Cartagena,Bolivar,Colombia</p>
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
                <p>Horario de atención</p>
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
              {/* <img src={"./images/tik-tok.png"}
                                 alt={"logo tiktok"}
                                 width={50}
                                 height={50}
                                 title="logo tiktok"/>
                            <img src={"./images/youtube.png"}
                                 alt={"logo youtube"}
                                 width={50}
                                 height={50}
                                 title="logo youtube"/> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
