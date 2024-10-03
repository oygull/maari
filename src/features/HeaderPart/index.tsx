import React from "react";
import NavList from "./NavList";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./header.module.scss";
import Search from "./Search";

function HeaderPart() {
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.header}>
          <Logo />
          <Search />
          <NavList />
          <Menu />
        </div>
      </div>
    </div>
  );
}


export default HeaderPart;
