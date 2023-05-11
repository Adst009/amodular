import React from "react";
import SwiperCorp from "./swiper/swiper.component";
import Navbar from "../../general/layout/navbar/navbar.component";

const Blog = () => {
  return (
    <>
      <Navbar />
        <div className="flex flex-col items-center justify-center">
          <h1
            className={
              "text-7xl md:text-9xl font-black text-white font-[Eina03]"
            }
          >
            BLOGS
          </h1>
          <SwiperCorp />
        </div>
    </>
  );
};

export default Blog;
