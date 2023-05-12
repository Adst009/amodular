import React from 'react'
import styles from './design.module.css'

const Design = () => {
  return (
      <>

    <div className="flex flex-col items-center justify-center pt-20">

      <div className={"flex gap-10 w-7/12 m-[-16px]"}>

          <div className={"w-6/12 bg-[#262526]"}><h3 className={styles.titles}>MINIMALISMO</h3>
          <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
              adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
              veritatis cumque minima.</p></div>

          <div className={styles.div_i}> <img src="/images/blog/designs/design1.png" alt="" /> </div>

      </div>
      <div className="flex gap-10 pt-4 w-7/12 m-[-16px]">

          <div className="w-6/12 bg-[#262526]"><h3 className={styles.titles}>INDUSTRIAL</h3>
              <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
              adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
              veritatis cumque minima.</p></div>

          <div className={styles.div_i}><img src="/images/blog/designs/design2.png" alt="" /></div>

      </div>
      <div className={"flex gap-10 pt-4 w-7/12 m-[-16px]" }>

          <div className="w-6/12 bg-[#262526] "><h3 className={styles.titles}>RÚSTICO</h3>
              <p className="pt-3">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
              suscipit quod et? Sit harum vitae modi perferendis, minus deleniti
              adipisci autem, ipsa deserunt quisquam vel praesentium repellendus,
              veritatis cumque minima.</p></div>

          <div className={styles.div_li}><img src="/images/blog/designs/design3.png" alt="" /></div>

      </div>

    </div>
        <div className="flex flex-col">
          {/*<div className={styles.textoApoyo}>*/}
          {/*    <span>SUSCRÍBETE Y </span>*/}
          {/*    <span>SUSCRíBETE Y</span>*/}
          {/*    <span>SUSCRíBETE Y</span>*/}
          {/*</div>*/}
      </div>
          <div className="flex flex-col items-center justify-center mt-20">
              <div>

              <h2 className={styles.main_title}>SUSCRíBETE Y <br /> <span className="">conoce las ultimas novedades</span></h2>
            </div>
            <div className="bg-[#E20613] w-[850px] h-[140px] gap-8 flex items-center justify-center">
                <input className="w-[380px] h-[60px]" type="email" placeholder="E-mail"/>
                <button className={"bg-[#262526] w-[240px] h-[60px]"}>SUSCRIBETE</button>

            </div>
          </div>

      </>
  )
}

export default Design