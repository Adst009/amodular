import React, {useRef} from "react";
import {Swiper} from "swiper/react";
import SwiperCore, {Swiper as SwiperType, Navigation, Pagination} from "swiper";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from './styles.module.css';

SwiperCore.use([Pagination]);

export default function SwiperJs({children}: any) {
    const swiperRef = useRef<SwiperType>();
    return (
        <Swiper
            slidesPerView={3}
            spaceBetween={30}
            loop={true}
            pagination={{
                type: "fraction",
                modifierClass: "paginacionPersonalizada",
                clickable: true,
            }}
            onBeforeInit={(swiper) => {
                swiperRef.current = swiper;
            }}
            modules={[Pagination, Navigation]}
            className="mySwiper"
        >
            {children}
            <a className={styles.pagination} type="button" onClick={() => swiperRef.current?.slideNext()}>
                <i className='bx bx-right-arrow-alt'></i>
            </a>
        </Swiper>
    );
}