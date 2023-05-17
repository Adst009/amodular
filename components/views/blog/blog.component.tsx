import React from "react";
import SwiperCorp from "./swiper/swiper.component";
import Navbar from "../../general/layout/navbar/navbar.component";
import styles from "./blog.module.css";

const Blog = () => {
  return (
    <div className={styles.container}>
      <Navbar />
      <div
        className={
          "flex flex-col items-center justify-center " +
          styles.container_blog
        }
      >
        <h1 className={"text-7xl md:text-9xl font-black text-white "}>BLOGS</h1>
        <SwiperCorp />
      </div>
    </div>
  );
};

export default Blog;
