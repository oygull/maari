import React, { useState, useEffect } from 'react';
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"
import HeaderPart from "../features/HeaderPart"
import Products from "../pages/Products";
import Subheader from "../features/Subheader";
import ItemPage from "../pages/ItemPage";
import HowToOrder from "../pages/HowToOrder";
import CategoryPage from "../pages/CategoryPage";
import SubCategory from "../pages/SubCategory";
import Blog from "../pages/Blog";
import BlogInner from "../pages/BlogInner";
import Footer from "../features/Footer";
import SearchedProducts from "../pages/SearchedProducts";
import Loader from '../pages/Loader';

function App(){

  const [isLoading, setIsLoading] = useState(true); 

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false); 
    }, 2000); 

    return () => clearTimeout(timer); 
  }, []);

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


  interface Product {
    id: number;
    productName: string;
    productBrend: string;
    productCategory: string;
    productSubCategory?: string; 
    productStatus: string;
    productReviews: number;
    productPrice: string;
    productImages: string[];
    productDesc: string;
    productCompound: string;
  };
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
  const [filteredCategory,setFilteredCategory] = useState<CategoryItem[]>([]);
  const [filteredSubCategory,setFilteredSubCategory] = useState<subCategoryItem[]>([]);
  return (
    <>
    {isLoading ? <Loader /> : 
     <>
     <HeaderPart setSearchedProducts={setSearchedProducts}/>
     <Subheader setFilteredSubCategory={setFilteredSubCategory} setFilteredCategory={setFilteredCategory}/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogInner/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route  path="/products/:id"   element={<ItemPage />} />
      <Route  path="/:categoryName"   element={<CategoryPage filteredCategory={filteredCategory} />} />
      <Route  path="/:categoryName/:subCategory"   element={<SubCategory filteredSubCategory={filteredSubCategory}/>} />
      <Route path="/howtoorder" element={<HowToOrder/>}/>
      <Route  path="/search/:query" element={<SearchedProducts searchedProducts={searchedProducts}/>}/>
    </Routes>
    <Footer/>
    </>
    } 
  </>
   
  )
} 

export default App;