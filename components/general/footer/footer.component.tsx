import styles from './footer.module.css'


export default function Footer() {

    return(
        <>
        <div className={styles.content_footer0}>
            <div>
                <h2>Cuentanos sobre tu proyecto</h2>
            </div>

            <div>
                <form>
                    <div className={styles.div_form}>
                        <div>
                        <input type="text"  name="name" placeholder="Nombres*"/>
                        </div>
                        <div>
                        <input type="text"  name="phone" placeholder="Apellidos*"/>
                        </div>
                    </div>
                    <div className={styles.div_form}>
                        <div>
                        <input type="number"  name="email" placeholder="Cel/tel*"/>
                        </div>
                        <div>
                        <input type="email"  name="email" placeholder="E-mail*"/>
                        </div>
                    </div>
                        <div >
                            <button>Contactanos</button>
                        </div>
                </form>
            </div>
        </div>

            <div className={"flex-col sm:flex-col md:flex-row lg:flex-row xl:flex-row h-96 justify-center gap-10 pt-20 "+ styles.content_footer}>



                <div className={"w-80 md:w-60 md:h-64 lg:w-60 " + styles.margin_footer} >
                    <img src='/images/logo.png' alt="Amodular" title="amodular" />


                    <h4>Sobre nosotros</h4>
                    <p>
                        Lorem ipsum dolor sit amet, conse
                        tetuer adipiscing elit, sed diam
                        nonummy nibh euismod tincidunt ut.
                    </p>
                </div>
                <div className="w-80 md:w-60 lg:w-60 ">
                    <div className="flex flex-col gap-6">
                        <div>
                            <h4>Contacto</h4>
                        </div>
                        <div className={styles.items}>
                        <img src={"./images/ubicacion.png"}
                        alt={"logo ubicacion"}
                             width={50}
                             height={50}
                             title="logo ubicacion"/>
                        <div>Calle 29a #22-44 Cartagena,Bolivar,Colombia</div>
                        </div>
                        <div className={styles.items}>
                            <img src={"./images/telefono.png"}
                                 alt={"logo telefono"}
                                 width={50}
                                 height={50}
                                 title="logo telefono"/>
                            <div>(+57)3001234567</div>
                        </div>
                        <div className={styles.items}>
                            <img src={"./images/horario.png"}
                                 alt={"logo horario"}
                                 width={50}
                                 height={50}
                                 title="logo horario"/>
                            <div>Horario de atención</div>
                        </div>
                    </div>
                </div>
                <div className={"w-80 md:w-60 md:h-64 lg:w-60 "+ styles.margin_footer2}>
                    <div className={"flex flex-col gap-8"}>
                        <div className={styles.items}>
                            <h4>Redes sociales</h4>
                        </div>
                        <div className={styles.items}>
                            <img src={"./images/instagram.png"}
                                 alt={"logo instagram"}
                                 width={50}
                                 height={50}
                                 title="logo instagram"/>
                            <img src={"./images/facebook.png"}
                                 alt={"logo facebook"}
                                 width={50}
                                 height={50}
                                 title="logo facebook"/>
                            <img src={"./images/tik-tok.png"}
                                 alt={"logo tiktok"}
                                 width={50}
                                 height={50}
                                 title="logo tiktok"/>
                            <img src={"./images/youtube.png"}
                                 alt={"logo youtube"}
                                 width={50}
                                 height={50}
                                 title="logo youtube"/>

                        </div>
                    </div>
                </div>
            </div>


        </>

    );

}