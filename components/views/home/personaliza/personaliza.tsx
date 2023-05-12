import styles from './styles.module.css';
import Slider from '../../../../components/views/home/slider/slider';

export default function Personaliza() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.title}>
                    <h2>Personalizamos <br/> <span>tu cocina</span></h2>
                    <img src="/images/apoyo_grafico/title.png" alt=""/>
                </div>
                <div className={styles.general}>

                    <div className={styles.slider}>
                    <Slider/>
                    </div>
                </div>
            </section>
        </>
    )
}