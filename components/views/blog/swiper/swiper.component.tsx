import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const lisTrends = [
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  },
  {
    imageUrl: "/images/blog/slider/image.png",
    title: "TENDENCIAS 2023",
    title2: "EN DISEÑOS DE INTERIORES",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora, voluptates! Nesciunt repellendus",
    button: "Leer más"
  }
]


const SwiperCorp = () => {
  return (
    <div className="w-full md:w-[150vw]">
      <Swiper
        slidesPerView={1}
        spaceBetween={40}
        initialSlide={3}
        centeredSlides={true}
        pagination={{
          type: "fraction",
        }}
        modules={[Pagination]}
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
          {
            lisTrends.map(({title, title2, description, button, imageUrl}, index)=> (
            <SwiperSlide key={index}>
              <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
                <img src={imageUrl} alt="image3" />
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
                    "bg-zinc-700 px-4 border-b-2 border-l-2 border-r-2 border-red-700 mt-[-44px] p-3 2xl:w-[27.5vw] " +
                    styles.container_text
                  }
                >
                  <h3 className="font-bold text-lg">
                    <strong className="text-red-600">{title}</strong> {title2}
                  </h3>
                  <p className="text-sm">
                    {description}
                  </p>
                  <button>{button}</button>
                </div>
              </div>
            </SwiperSlide>
            ))
          }
        </div>
      </Swiper>
    </div>
  );
};

export default SwiperCorp;
