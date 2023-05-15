import styles from './styles.module.css';

export default function Realidad() {
    return (
        <>
            <section className={styles.section}>
                <div className={"flex flex-col md:flex-col lg:flex-row " + styles.general}>
                    <div className={"md:pt-24 " + styles.content_1}>
                        <h2 className="text-[48px] md:text-7xl leading-10">HACEMOS </h2>
                        <h3 className="text-[48px] md:text-6xl leading-10">tu idea realidad</h3>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation |ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.</p>
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