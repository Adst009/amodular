import styles from './styles.module.css';

export default function Realidad() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content_1}>
                        <h2>Hacemos <br/> <span>tu idea realidad</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation |ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.</p>
                    </div>

                    <div className={styles.content_2}>
                        <h2>tu
                            cocina
                            será
                            como
                            imaginas</h2>
                        <a href="#">Contactanos</a>
                    </div>
                </div>
            </section>
        </>
    )
}