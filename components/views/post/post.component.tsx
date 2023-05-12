import React from "react";
import Trend from "./trend/trend.component";
import Design from "./design/desgin.component";
import styles from "./post.module.css";

const Post = () => {
  return (
    <div className={styles.container_post}>
      <div className={styles.container_component}>
        <Trend />
        <Design />
      </div>
    </div>
  );
};

export default Post;
