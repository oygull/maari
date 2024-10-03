import React from "react";
import styles from "./hero.module.scss";


function Hero(){
  return (
    <div className="container">
     <div className={styles.flexBox}>
        <div className={styles.itemA}>
          <h2 className={styles.itemTitle}>Skincare</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/Screenshot_2023-06-20_at_9.58.26_AM.png?v=1687222714&width=797"/>
        </div>
        <div className={styles.itemBox}>
        <div className={styles.itemB}>
        <h2 className={styles.itemTitle}>Nails</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/moodnail1.jpg?v=1690781849&width=550"/>
        </div>
        <div className={styles.itemB}>
        <h2 className={styles.itemTitle}>Eyes</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/TWINKLEPOPGlitteringEyeStick1.jpg?v=1691037861&width=600"/>
        </div>
        </div>
        <div className={styles.itemA}>
        <h2 className={styles.itemTitle}>Make up</h2>
          <img src="https://mylittlekorea.com/cdn/shop/files/etude-house-sand-hill-eye-palette-model_1024x1024_47b0caa9-df67-47cb-8fab-54783ce81f79.png?v=1687211310&width=800"/>
        </div>
     </div>
    </div>
  )
} 

export default Hero;