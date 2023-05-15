import styles from './styles.module.css';

export default function Realidad() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <h2>HACEMOS </h2>
                        <h3>tu idea realidad</h3>
                        <p>Contamos con un equipo experto y especializado en plasmar tus ideas.
                            Deja de soñar y ¡hazlo realidad!, juntos podemos crear la cocina que siempre has querido tener.</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2 className="pr-20 leading-[60px]">TU COCINA SERÁ TAL CUAL LA IMAGINAS</h2>

                    <a href="#">CONTÁCTANOS</a>
                    </div>
                </div>
            </section>
        </>
    )
}