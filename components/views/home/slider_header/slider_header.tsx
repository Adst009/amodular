import styles from './styles.module.css';
import {SwiperSlide} from "swiper/react";
import SwiperJs from './swiperJs/swiperJs';

export default function SliderHeader() {
    return (
        <>
            <section className={styles.section}>
                <div className={styles.general}>
                    <SwiperJs>
                        <SwiperSlide>
                            <div className={styles.slider}>
                                <div className={styles.content}>
                                    <h1>Remodela <span>tu cocina</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                        ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                        ut aliquip ex ea commodo consequat.</p>
                                    <a href="#">CONTÁCTANOS</a>
                                </div>
                                <img src="/images/slider_header/header_amodular_slider.jpg" alt="header_amodular" title='header_amodular'/>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>

                            <div className={styles.slider}>
                                <div className={styles.content}>
                                    <h1>Remodela <span>tu cocina</span></h1>
                                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh
                                        euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim
                                        ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl
                                        ut aliquip ex ea commodo consequat.</p>
                                    <a href="#">CONTÁCTANOS</a>
                                </div>
                                <img src="/images/slider_header/header_amodular_slider.jpg" alt="header_amodular" title='header_amodular'/>
                            </div>
                        </SwiperSlide>
                    </SwiperJs>
                    <div className={styles.apoyoGrafico}>

                    </div>
                </div>

            </section>
        </>
    )
}