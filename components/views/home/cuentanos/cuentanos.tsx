import Form from './form/form'
import styles from './styles.module.css'

export default function Cuentanos() {
    return ( 
        <>
            <section className={styles.section}>
                <div className={"flex flex-col lg:flex-row items-center w-10/12 gap-14 lg:gap-20 " + styles.general}>
                    <div className={"text-center w-full text-4xl md:text-7xl "}>
                        <h2>CUENTANOS SOBRE TU</h2>
                        <h3>proyecto</h3>
                    </div>
                    <Form/>
                </div>
            </section>
        </>
    )
}