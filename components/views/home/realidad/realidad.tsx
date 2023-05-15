import styles from './styles.module.css';

export default function Realidad() {
    return (
        <>
            <section className={styles.section}>
                <div className={"flex flex-col md:flex-col lg:flex-row " + styles.general}>
                    <div className={"md:pt-24 " + styles.content_1}>
                        <h2 className="text-[48px] md:text-7xl leading-10">HACEMOS </h2>
                        <h3 className="text-[48px] md:text-6xl leading-10">tu idea realidad</h3>
                        <p>Contamos con un equipo experto y especializado en plasmar tus ideas.
                            Deja de soñar y ¡hazlo realidad!, juntos podemos crear la cocina que siempre has querido tener.</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2 className="text-[39px] md:text-6xl md:pr-20 md:leading-[60px]">TU COCINA SERÁ COMO IMAGINAS</h2>

                    <a href="#">CONTÁCTANOS</a>
                    </div>
                </div>
            </section>
        </>
    )
}