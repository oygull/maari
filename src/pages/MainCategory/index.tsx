import React, { useState } from "react";
import styles from "./mainCategory.module.scss";
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../../features/EachItem";

interface Item {
  childId: number; 
  childName: string; 
  childPath:string;
}

interface mainCategoryItem {
  id: number;
  itemNamme: string;
  itemChildren: Item[];
  isDropdownVisible:boolean;
  path: string;
}

interface CategoryPageProps {
  filteredMainCategory: mainCategoryItem[];  
}


const MainCategory: React.FC<CategoryPageProps> = ({ filteredMainCategory })=>{

  return (
    <div className={styles.wrapper}>
      
      {filteredMainCategory.map((el, i) => {
        return (
          <div key={el.id} className="container">
            <h2>{el.itemNamme}</h2>
            {el.itemChildren.map((child) => {
              const filteredProducts = productsArr.filter(
                (product) => product.productCategory === child.childPath
              );
              return (
                <div key={child.childId} className={styles.productList}>
                  {
                      filteredProducts.map((product) => (
                        <EachItem key={product.id} item={product} />
                      ))
                  }
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  )
} 

export default MainCategory;