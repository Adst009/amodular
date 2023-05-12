import React, {useRef, useState} from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import styles from './styles.module.css';

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import SwiperCore, {Pagination} from "swiper";

export default function SwiperJs({children}: any) {


    return (
        <>
            <Swiper

                spaceBetween={30}
                pagination={{
                    "clickable": true
                }}
                navigation={true}
                modules={[Pagination]}
                className="mySwiper"
            >

                {children}

            </Swiper>
        </>
    );
}