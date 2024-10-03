import React from "react";
import styles from "./navList.module.scss"
import { Link } from "react-router-dom";

function NavList(){
  return (
    <div className="styles.wrapper">
      <ul className={styles.wrapperList}>
            <li className={styles.navListItem}>
            <Link className={styles.listLink} to="/blog">Блог</Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.listLink} to="/products">Продукты</Link>
            </li>
            <li className={styles.navListItem}>
              <Link className={styles.listLink} to="/howtoorder">Как заказать?               </Link>
            </li>
        </ul>
    </div>
  )
} 

export default NavList;