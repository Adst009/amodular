import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";
import { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination } from "swiper";
import Link from "next/link";

const lisTrends = [
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más",
  },
];

const SwiperCorp = () => {
  const swiperRef = useRef<SwiperType>();
  return (
    <div className="w-full md:w-[150vw] h-[700px]">
      <Swiper
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        slidesPerView={1}
        spaceBetween={40}
        initialSlide={3}
        centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination, Navigation]}
        className={"mySwiper " + styles.Swiper}
        breakpoints={{
          650: {
            slidesPerView: 3,
          },
          995: {
            slidesPerView: 4,
          },
          1024: {
            slidesPerView: 6,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
      >
        <div className={"flex " + styles.container}>
          {lisTrends.map(
            ({ title, title2, description, button, imageUrl }, index) => (
              <SwiperSlide key={index}>
                <Link href="/post">
                  <div className={"relative px-10 sm:px-0 " + styles.SwiperSlide}>
                    <img src={imageUrl} alt="image3" title="sliderImage" />
                    <div
                      className={
                        "flex flex-col items-center justify-center bg-red-600 text-white font-[Eina03] " +
                        styles.badge
                      }
                    >
                      <h3>02</h3>
                      <h3>FEB</h3>
                    </div>

                    <div
                      className={
                        "bg-zinc-700 px-4 border-b-2 border-l-2 border-r-2 border-red-700 mt-[-44px] p-3 max-w-[478px] " +
                        styles.container_text
                      }
                    >
                      <h2 className="font-bold text-lg">
                        <strong className="text-red-600">{title}</strong>
                        &nbsp;{title2}
                      </h2>
                      <p className="text-sm w-11/12">{description}</p>
                      <button>{button}</button>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            )
          )}
        </div>
        <a
          className={styles.pagination}
          type="button"
          onClick={() => swiperRef.current?.slideNext()}
        >
          <i className="bx bx-right-arrow-alt"></i>
        </a>
        <a
          className={styles.pagination2}
          type="button"
          onClick={() => swiperRef.current?.slidePrev()}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </a>
      </Swiper>
      <hr className="overflow-hidden md:ml-[275px] xl:ml-[500px] " />
    </div>
  );
};

export default SwiperCorp;
