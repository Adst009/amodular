import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './styles.module.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {Pagination, Navigation, Swiper as SwiperType} from "swiper";

SwiperCore.use([Pagination, Navigation]);

export default function SwiperJs({children}: any) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);
    const swiperRef = useRef<SwiperType>();

    return (
        <>
            <Swiper
                loop={true}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
                navigation={{
                    nextEl: nextRef.current,
                    prevEl: prevRef.current,
                }}
                modules={[Navigation, Pagination]}
                className="mySwiper"
            >

                {children}

            </Swiper>
            {/* Establece los botones de navegación personalizados */}
            <div className={styles.swiperNavigation}>
                <a className={styles.pagination} type="button" onClick={() => swiperRef.current?.slideNext()}>
                <div ref={nextRef} className={styles.swiperNext}>
                    <i className='bx bx-chevrons-right'></i>
                </div>
                </a>
            </div>
        </>
    );
}