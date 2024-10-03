import React from "react";
import styles from "./logo.module.scss"
import { Link } from "react-router-dom";
import logoSvg from "./logo.png"

function Logo(){
  return (
    <div className="styles.wrapper">
        <Link className={styles.logoLink} to="/">
            <img className={styles.logoImgLink} alt="logoSvg" src={logoSvg}/>
        </Link>
    </div>
  )
} 

export default Logo;