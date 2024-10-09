import React, {useState} from "react";
import styles from "./footer.module.scss";
import { Link } from "react-router-dom";
import logoSvg from "../HeaderPart/Logo/logo.png"
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import headerItemsArr from "../../app/assets/date/headwrItemsArr";

const Footer = ()=>{

  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.wrapperInner}>
          <div className={styles.logoBox}>
          <Link className={styles.logoLink} to="/">
          <img className={styles.logoImgLink} alt="logo" src={logoSvg} />
          </Link>
          <p className={styles.footerColor}>В MAARI мы считаем, что красота индивидуальна, как и ваш уход за кожей. Наш интернет-магазин предлагает тщательно подобранный выбор косметики премиум-класса, предметов первой необходимости по уходу за кожей и косметических инструментов, которые помогут вам выглядеть и чувствовать себя лучше каждый день. Ищете ли вы последние тенденции в макияже, роскошные средства по уходу за кожей или экологически чистые косметические решения, у нас есть что-то для каждого.</p>
          <div className={styles.socialsBox}>
              <Link className={styles.socialsLink} to="/"> <InstagramIcon/> </Link>
              <Link className={styles.socialsLink} to="/"> <TelegramIcon/> </Link>
              <Link className={styles.socialsLink} to="/"> <FacebookIcon/> </Link>
              <Link className={styles.socialsLink} to="/"> <YouTubeIcon/> </Link>
          </div>
          </div>
          <div className={styles.separateBox}>
              <div className={styles.sectionsList}>
              <h3 className={styles.footerSubtitle}>Категории</h3>
                {
                  headerItemsArr.map((el,i)=>
                    <Link key={i} className={styles.sctionLink} to={el.path}> {el.itemNamme}</Link>
                  )
                }
              </div>
              <div className={styles.navListBox}>
                <h3 className={styles.footerSubtitle}>Разделы</h3>
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
          </div>
         
        </div>
        <p className={styles.copyRight}>© 2024 MAARI Все права защищены.</p>
      </div>
    </div>
  )
} 

export default Footer;