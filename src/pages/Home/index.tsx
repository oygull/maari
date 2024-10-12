import React from "react";
import styles from "./home.module.scss"
import Hero from "../../features/Hero";
import Brends from "../../features/Brends";
import Item from "../../features/Item";
import banner from "./banner.png"

function HomePage(){
  return (
    <div className={styles.wrapper}>
        <Hero/>
        <Brends/>
        <div className={styles.innerWrap}>
          <img alt="banner" src={banner}/>
        </div>
        <Item/>
        
    </div>
  )
} 

export default HomePage;