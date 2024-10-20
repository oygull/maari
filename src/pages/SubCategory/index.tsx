import React, { useState } from "react";
import styles from "./mainCategory.module.scss";
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../../features/EachItem";

interface subCategoryItem {
  childId: number;
  childName: string;
  childPath: string;
}

interface SubCategoryPageProps {
  filteredSubCategory: subCategoryItem[];
}


const SubCategory: React.FC<SubCategoryPageProps> = ({filteredSubCategory})=>{

  return (
    <div className={styles.wrapper}>
    {
      filteredSubCategory.map((el)=>{
       
      const filteredProducts = productsArr.filter(
        (product) => {
          return product.productSubCategory === el.childPath;
        }
      );
                
        return(
            <div className="container">
                <h2 className={styles.title}>{el.childName}</h2>
                <div className={styles.productList}>
                {filteredProducts.length > 0 ? (
                  filteredProducts.map((product) => (
                    <EachItem item={product}/>
                  ))
                ) : (
                  <p className={styles.notFound}>Для этой категории не найдено ни одного товара</p>
                )}
                </div>
            </div>
        )
      })
    }
   
    
  </div>
  )
} 

export default SubCategory;