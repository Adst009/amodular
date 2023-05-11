import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const SwiperCorp = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      centeredSlides={false}
      pagination={{
        type: "fraction",
      }}
      modules={[Pagination]}
      className={"mySwiper " + styles.Swiper}
      breakpoints={
        {
          650: {
            slidesPerView: 3
          },
          995: {
            slidesPerView: 4
          },
          1024: {
            slidesPerView: 5
          },
          1920: {
            slidesPerView: 5
          }
        }
      }
    >

      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image3.png" alt="image3" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image4.png" alt="image4" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image2.png" alt="image2" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image5.png" alt="image5" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image4.png" alt="image4" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
          <img src="/images/corp/slider/image4.png" alt="image4" />
          <div className={"bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " + styles.container_text} >
            <h3 className="font-bold text-lg"> <strong className="text-red-600">PROYECTO</strong> OFICINAS 001</h3>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora,
              voluptates! Nesciunt repellendus
            </p>
          </div>
          <button>contáctanos</button>
        </div>
      </SwiperSlide>

    </Swiper>
  );
};

export default SwiperCorp;
