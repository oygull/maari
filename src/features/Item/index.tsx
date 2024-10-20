import React, { useState } from 'react';
import styles from "./item.module.scss"
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../EachItem";
import Pagination from "@mui/material/Pagination";
import { Box } from "@mui/material";

const itemsPerPage = 12;

function Item(){

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(productsArr.length / itemsPerPage);
  const currentItems = productsArr.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  const handlePageChange = (event: React.ChangeEvent<unknown>, page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="container">
      <h2 className={styles.headline}>Наши продукты</h2>
      <div className={styles.wrapper}>
        {currentItems.map((item) => (
          <EachItem key={item.id} item={item} />
        ))}
      </div>
      
      <Box display="flex" justifyContent="center" mt={4}>
        <Pagination
          count={totalPages}
          page={currentPage}
          onChange={handlePageChange}
          sx={{
            "& .Mui-selected": {
              backgroundColor: "pink",
              color: "white", 
            },
            "& .MuiPaginationItem-root": {
              color: "black", 
            },
          }}
          shape="rounded"
        />
      </Box>
    </div>
  
  )
} 

export default Item;