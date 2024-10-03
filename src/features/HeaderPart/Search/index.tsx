import React from "react";
import styles from "./search.module.scss"
import SearchIcon from '@mui/icons-material/Search';
import { pink } from '@mui/material/colors';

function Search(){
  return (
    <div className={styles.wrapper}>
     <input placeholder="Ищите свое счастье на нашем сайте!" className={styles.searchInput}/>
     <SearchIcon sx={{ color: pink[100] }}/>
    </div>
  )
} 

export default Search;