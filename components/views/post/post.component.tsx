import React from 'react'
import Trend from './trend/trend.component'
import Design from "./design/desgin.component";
import styles from "./post.module.css"

const Post = () => {
  return (
    <div>
        <h1 className={'text-center ' + styles.main_title}>TENDENCIAS 2023 EN <br />  diseño de interiores</h1>
    <Trend/>
    <Design/>
    </div>
    
    
  )
}

export default Post