import styles from './styles.module.css'; 
import {SwiperSlide} from "swiper/react";
import SwiperJs from './swiperJs/swiperJs';

export default function NuestroTrabajo() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <div className={styles.carrucel}>
                        <SwiperJs>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/Personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </SwiperJs>
                    </div>
                    <div className={styles.content}>
                        <h2><b>Nuestro</b> <br/> <span>trabajo</span></h2>
                        <p>Somos una empresa dedicada al diseño y construcción de espacios,
                            encaminados a lograr un lugar cómodo de acuerdo a tus necesidades.
                            Nuestro principal objetivo es recrear cada diseños de manera autónoma,
                            teniendo en cuenta la inversión y así,  poder ejecutar los resultados de cada proyecto de la mejor manera.
                        </p>
                        <a href="#">Contáctanos</a>
                       <div className={styles.mundo}>
                           <img src="/images/apoyo_grafico/mundo.png" alt=""/>
                       </div>
                    </div>

                </div>
            </section>
        </>
    )
}