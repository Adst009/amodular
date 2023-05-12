import Form from './form/form'
import styles from './styles.module.css'

export default function Cuentanos() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>CUENTANOS SOBRE TU</h2>
                        <h3>proyecto</h3>
                    </div>
                    <Form/>
                </div>
            </section>
        </>
    )
}