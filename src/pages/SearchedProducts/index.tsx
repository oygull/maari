import React, { useState } from "react";
import styles from "./searchedProducts.module.scss";
import { useParams } from 'react-router-dom';
import EachItem from "../../features/EachItem";

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
interface ProductPageProps {
  searchedProducts: Product[];  
}

const SearchedProducts: React.FC<ProductPageProps> = ({searchedProducts}) => {
  const { query } = useParams<{ query: string }>();
  return (
    <div className={styles.wrapper}>   
      <div className="container">
      <h2 className={styles.wrapperTitle}>Результаты поиска по "{query}"</h2> 
      <div className={styles.wrapperInner}>
        {searchedProducts.length === 0 ? (
            <p className={styles.noResults}>Ничего не найдено</p> 
          ) : (
            searchedProducts.map((item) => <EachItem key={item.id} item={item} />)
        )}
      </div>
    </div>
    </div>
  )
} 

export default SearchedProducts;