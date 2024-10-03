import React, {useState} from "react";
import styles from "./category.module.scss";
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../../features/EachItem";

interface categoryItem {
  childId: number;
  childName: string;
  childPath: string;
}

interface CategoryPageProps {
  filteredCategory: categoryItem[];  
}


const CategoryPage: React.FC<CategoryPageProps> = ({ filteredCategory })=>{
  console.log("CategoryPage rendered", filteredCategory);
  return (
    <div className={styles.wrapper}>
      {
        filteredCategory.map((el)=>{
         
const filteredProducts = productsArr.filter(
  (product) => {
    console.log("Product Category:", product.productCategory);
    console.log("Child Path:", el.childPath);
    return product.productCategory === el.childPath;
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

export default CategoryPage;