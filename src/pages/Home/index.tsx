import React from "react";
import styles from "./home.module.scss"
import Hero from "../../features/Hero";
import Brends from "../../features/Brends";
import Item from "../../features/Item";

function HomePage(){
  return (
    <div className={styles.wrapper}>
        <Hero/>
        <Brends/>
        <Item/>
    </div>
  )
} 

export default HomePage;