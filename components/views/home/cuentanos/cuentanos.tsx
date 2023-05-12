import Form from './form/form'
import styles from './styles.module.css'

export default function Cuentanos() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.content}>
                        <h2>Cuéntanos <br/>
                            sobre tu <br/> <span>proyecto</span></h2>
                    </div>
                    <Form/>
                </div>
            </section>
        </>
    )
}