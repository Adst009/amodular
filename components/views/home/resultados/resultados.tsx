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
                            <h2>Mira los </h2>
                            <h3>resultados</h3>
                        </div>
                        <div className={styles.cardImg}>
                            <img src="/images/Personalize/res1.png" alt=""/>
                            <img src="/images/Personalize/res2.png" alt=""/>
                        </div>
                    </div>

                    <div className={styles.cardGeneral_2}>
                        <div className={styles.singleImg}>
                            <img src="/images/Personalize/res3.png" alt=""/>
                        </div>
                        <div className={styles.content}>
                            <p>¿Estás listo para ver cómo tu cocina pasa de ser una habitación ordinaria a un espacio
                                excepcionalmente hermoso y funcional?
                            </p>
                            <a href="#">Contactanos</a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}