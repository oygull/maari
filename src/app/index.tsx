import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "../pages/Home"
import HeaderPart from "../features/HeaderPart"
import Products from "../pages/Products";
import Subheader from "../features/Subheader";
import ItemPage from "../pages/ItemPage";
import HowToOrder from "../pages/HowToOrder";
import CategoryPage from "../pages/CategoryPage";
import MainCategory from "../pages/MainCategory";
import Blog from "../pages/Blog";
import BlogInner from "../pages/BlogInner";
import Footer from "../features/Footer";
import SearchedProducts from "../pages/SearchedProducts";

function App(){

  interface categoryItem {
    childId: number;
    childName: string;
    childPath: string;
  }
  interface mainCategoryItem {
    id: number;
    itemNamme: string;
    itemChildren: categoryItem[];
    isDropdownVisible:boolean;
    path: string;
  }

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
  const [searchedProducts, setSearchedProducts] = useState<Product[]>([]);
const [filteredCategory,setFilteredCategory] = useState<categoryItem[]>([]);
const [filteredMainCategory,setFilteredMainCategory] = useState<mainCategoryItem[]>([]);
  return (
    <>
     <HeaderPart setSearchedProducts={setSearchedProducts}/>
     <Subheader setFilteredMainCategory={setFilteredMainCategory} setFilteredCategory={setFilteredCategory}/>
     <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/blog" element={<Blog/>}/>
      <Route path="/blog/:id" element={<BlogInner/>}/>
      <Route path="/products" element={<Products/>}/>
      <Route  path="/products/:id"   element={<ItemPage />} />
      <Route  path="/eachitem/:categoryName"   element={<CategoryPage filteredCategory={filteredCategory}/>} />
      <Route  path="/:maincategoryName"   element={<MainCategory filteredMainCategory={filteredMainCategory}/>} />
      <Route path="/howtoorder" element={<HowToOrder/>}/>
      <Route  path="/search/:query" element={<SearchedProducts searchedProducts={searchedProducts}/>}/>
    </Routes>
    <Footer/>
    </>
  )
} 

export default App;