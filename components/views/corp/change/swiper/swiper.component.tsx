import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./swiper.module.css";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";


const lisTrends = [
  {
    imageUrl: "/images/corp/slider/image3.png",
    title: "PROYECTO",
    title2: "OFICINAS 001",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates! Nesciunt repellendus",
    button: "CONTACTANOS"
  },
  {
    imageUrl: "/images/corp/slider/image2.png",
    title: "PROYECTO",
    title2: "OFICINAS 001",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates! Nesciunt repellendus",
    button: "CONTACTANOS"
  },
  {
    imageUrl: "/images/corp/slider/image5.png",
    title: "PROYECTO",
    title2: "OFICINAS 001",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates! Nesciunt repellendus",
    button: "CONTACTANOS"
  },
  {
    imageUrl: "/images/corp/slider/image4.png",
    title: "PROYECTO",
    title2: "OFICINAS 001",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates! Nesciunt repellendus",
    button: "CONTACTANOS"
  },
  {
    imageUrl: "/images/corp/slider/image4.png",
    title: "PROYECTO",
    title2: "OFICINAS 001",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora, voluptates! Nesciunt repellendus",
    button: "CONTACTANOS"
  }
]


const SwiperCorp = () => {
  return (
    <div className="w-full sm:w-2 md:w-[115vw] md:ml-[-60px] lg:ml-[-100px] relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={15}
        initialSlide={2}
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
            slidesPerView: 5,
          },
          1920: {
            slidesPerView: 5,
          },
        }}
      >
        {
          lisTrends.map(({button, description, imageUrl, title, title2}, index)=>(
        <SwiperSlide key={index}>
          <div className={"px-10 sm:px-0 " + styles.SwiperSlide}>
              <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" className="fill-white">
                <title />
                <g data-name="Layer 2" id="Layer_2">
                  <path d="M28,28.5H4a.5.5,0,0,1-.5-.5V4A.5.5,0,0,1,4,3.5H28a.5.5,0,0,1,.5.5V28A.5.5,0,0,1,28,28.5Zm-23.5-1h23V4.5H4.5Z" />
                  <path d="M22,16.5H10a.5.5,0,0,1,0-1H22a.5.5,0,0,1,0,1Z" />
                  <path d="M16,22.5a.5.5,0,0,1-.5-.5V10a.5.5,0,0,1,1,0V22A.5.5,0,0,1,16,22.5Z" />
                </g>
              </svg>
            <img src={imageUrl} alt="image3" />
            <div
              className={
                "bg-zinc-700  border-b-2 border-l-2 border-r-2 border-red-700 mt-[-22px] p-3 " +
                styles.container_text
              }
            >
              <h3 className="font-bold text-lg">
                <strong className="text-red-600">{title}</strong> {title2}
              </h3>
              <p className="text-sm">
                {description}
              </p>
            </div>
            <button>{button}</button>
          </div>
        </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default SwiperCorp;
