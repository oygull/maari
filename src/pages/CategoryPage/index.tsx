import React, {useState} from "react";
import styles from "./category.module.scss";
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../../features/EachItem";

interface subCategoryItem {
  childId: number;
  childName: string;
  childPath: string;
}
interface CategoryItem {
  id: number;
  itemNamme: string;
  itemChildren: subCategoryItem[];
  isDropdownVisible:boolean;
  path: string;
}

interface CategoryPageProps {
  filteredCategory: CategoryItem[];
}

const CategoryPage: React.FC<CategoryPageProps> = ({ filteredCategory }) =>{
  return (
    <div className={styles.wrapper}>
      {
        filteredCategory.map((el)=>{
         
        const filteredProducts = productsArr.filter(
          (product) => {
            return product.productCategory === el.path;
          }
        );
                  
          return(
              <div className="container">
                  <h2 className={styles.title}>{el.itemNamme}</h2>
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