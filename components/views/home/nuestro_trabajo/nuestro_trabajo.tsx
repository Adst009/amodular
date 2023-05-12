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
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>

                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide>
                                <div className={styles.card}>
                                    <img src="/images/personalize/res1.png" alt=""/>
                                    <div className={styles.callToAction}>
                                        <i className='bx bx-plus'></i>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </SwiperJs>
                    </div>
                    <div className={styles.content}>
                        <h2><b>Nuestro</b> <br/> <span>trabajo</span></h2>
                        <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod
                            tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis
                            nostrud exerci tation |ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo
                            consequat.</p>
                        <a href="#">Contactanos</a>
                       <div className={styles.mundo}>
                           <img src="/images/apoyo_grafico/mundo.png" alt=""/>
                       </div>
                    </div>

                </div>
            </section>
        </>
    )
}