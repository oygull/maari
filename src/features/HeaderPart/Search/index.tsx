import React, { useState } from 'react';
import styles from "./search.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';
import productsArr from '../../../app/assets/date/productsArr';
import { useNavigate } from 'react-router-dom';

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

const Search: React.FC<ProductProps> = ({ setSearchedProducts }) =>{
  const [query, setQuery] = useState<string>('');
  const navigate = useNavigate();
 

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchTerm = event.target.value;
    setQuery(searchTerm);

    const result = productsArr.filter((product) =>
      product.productName.toLowerCase().includes(searchTerm)
    );
    

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchedProducts(result);
    } else {
      navigate('/');
    }
  };

  return (
    <div className={styles.wrapper}>
     <input  type="text"
        value={query}
        onChange={handleSearch}
        placeholder="Ищите свое счастье на нашем сайте!"
        className={styles.searchInput}/>
     <SearchIcon sx={{ color: pink[100] }}/>
    </div>
  )
} 

export default Search;