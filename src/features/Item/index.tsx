import React from "react";
import styles from "./item.module.scss"
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../EachItem";

function Item(){
  

  return (
    <div className="container">
      <h2 className={styles.headline}>Наши продукты</h2>
          <div className={styles.wrapper}>
      {
        productsArr.map((item)=>
          <EachItem item={item}/>
        )
      }
    </div>
    </div>
  
  )
} 

export default Item;