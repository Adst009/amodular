import styles from './styles.module.css';

export default function Realidad() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <h2>HACEMOS </h2>
                        <h3>tu idea realidad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation |ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2 className="pr-20 leading-[60px]">TU COCINA SERÁ COMO IMAGINAS</h2>

                    <a href="#">CONTÁCTANOS</a>
                    </div>
                </div>
            </section>
        </>
    )
}