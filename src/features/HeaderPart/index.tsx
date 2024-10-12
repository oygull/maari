import React from "react";
import NavList from "./NavList";
import Logo from "./Logo";
import Menu from "./Menu";
import styles from "./header.module.scss";
import Search from "./Search";
import ResponsiveMenu from "./ResponsiveMenu";

interface Product {
  id: number;
  productName: string;
  productBrend: string;
  productCategory: string;
  productStatus: string;
  productReviews: number;
  productPrice: string;
  productImages: string[];
  productDesc: string;
  productCompound: string;
};
interface ProductProps {
  setSearchedProducts: React.Dispatch<React.SetStateAction<Product[]>>; 
}

const HeaderPart: React.FC<ProductProps> = ({setSearchedProducts}) =>{
  return (
    <div className={styles.wrapper}>
      <div className='container'>
        <div className={styles.header}>
          <Logo />
          <Search setSearchedProducts={setSearchedProducts} />
          <NavList />
          <Menu />
          <ResponsiveMenu/>
        </div>
      </div>
    </div>
  );
}


export default HeaderPart;