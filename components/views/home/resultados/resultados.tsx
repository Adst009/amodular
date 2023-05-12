import styles from './styles.module.css'

export default function Resultados() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.cardGeneral_1}>
                        <div className={styles.textoApoyo}>
                            <span>Mira los</span>
                            <span>Mira los</span>
                            <span>Mira los</span>
                        </div>
                        <div className={styles.content}>
                            <h2>Mira los <br/> <span>resultados</span></h2>
                        </div>
                        <div className={styles.cardImg}>
                            <img src="/images/personalize/res1.png" alt=""/>
                            <img src="/images/personalize/res2.png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.cardGeneral_2}>
                        <div className={styles.singleImg}>
                            <img src="/images/personalize/res3.png" alt=""/>
                        </div>
                        <div className={styles.content}>
                            <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                                tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                                quis nostrud exerci tation |ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                                consequat.</p>
                            <a href="#">Contactanos</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}