import React from "react";
import styles from "./about.module.scss"
import blogArr from "../../app/assets/date/blogArr";
import TextTruncate from "../../features/TextTruncate";

function Blog(){
  return (
    <div className={styles.wrapper}>
        <div className="container">
        <h2 className={styles.blogTitile}>Блог</h2>
        <div className={styles.blogList}>
            {
              blogArr.map((item)=>
                <div className={styles.blogListItem}>
                  <div className={styles.card}>
                  <h2 className={styles.blogItemTitle}><TextTruncate  maxLength={30} text={item.blogTitle}/> </h2>
                    <div className={styles.textBox}>
                    <p className={styles.blogText}> <TextTruncate  maxLength={150} text={item.blogSubDesc}/> </p>
                    <div className={styles.ctaContainer}>
                      <a href="#" className={styles.cta}>Call to action</a>
                      </div>
                    </div>
                    <div className={styles.cardCircle}>
                      <img alt="blogImg" src={item.blogImg}/>
                    </div>
                  </div>
                </div>
              )
            }
        </div>
        </div>
    </div>
  )
} 

export default Blog;