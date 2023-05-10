import React from 'react'
import styles from "./trend.module.css";

function Trend() {
  return (
    <>
    <div className={styles.content}>
        <div className={styles.par}>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
          adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
          veritatis cumque minima.</p>
        </div>

        
    </div>
    <div className='flex items-center justify-center'>
    <img className={styles.image} src="/images/blog/trend4.png" alt="" />
    </div>
    
    </>
  );
};

export default Trend