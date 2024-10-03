import React from "react";
import styles from "./eachItem.module.scss"
import Rating from '@mui/material/Rating';
import Badge from '@mui/material/Badge';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { pink } from '@mui/material/colors';
import { Link } from "react-router-dom";
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import { styled } from '@mui/material/styles';

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
}

interface EachItemProps {
  item: Product; 
}

const EachItem: React.FC<EachItemProps> = ({ item }) => {
  
  const [count, setCount] = React.useState(1);
  const BootstrapTooltip = styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} arrow classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.arrow}`]: {
      color: theme.palette.common.black,
    },
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor: theme.palette.common.black,
    },
  }));
  
  return (
      <Link to={`/products/${item.id}`} className={styles.wrapperInner}>
            <div className={styles.wishlistBox}>
            <BootstrapTooltip placement="left" title="Добавить в избранное" arrow
             slotProps={{
              popper: {
                sx: {
                  [`&.${tooltipClasses.popper}[data-popper-placement*="bottom"] .${tooltipClasses.tooltip}`]:
                    {
                      marginTop: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="top"] .${tooltipClasses.tooltip}`]:
                    {
                      marginBottom: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="right"] .${tooltipClasses.tooltip}`]:
                    {
                      marginLeft: '0px',
                    },
                  [`&.${tooltipClasses.popper}[data-popper-placement*="left"] .${tooltipClasses.tooltip}`]:
                    {
                      marginRight: '0px',
                    },
                },
              },
            }}>
              <IconButton 
               disableRipple
                  className={styles.navBtn}>
                <FavoriteIcon className={styles.navIcon} sx={{ color: pink[100] }} />
              </IconButton>
            </BootstrapTooltip>
            </div>
            <img className={styles.productImg} alt="itemImg" src={item.productImages[0]}/>
            <h3 className={styles.productName}>{item.productName}</h3>
            <div className={styles.productReview}>
              <Rating name="read-only" value={5} readOnly />
              <p className={styles.reviews}>({item.productReviews})</p>
            </div>
            <p className={styles.productPrice}>{item.productPrice}</p>
            <div className={styles.hoverBox}>
                  <h3 className={styles.productName}>{item.productName}</h3>
                  <div className={styles.centerBox}>
                  <p className={styles.productPriceHover}>{item.productPrice}</p>
                  <div className={styles.countBox}>
                  <Button
                  disableRipple
                  className={styles.navBtn}
                  aria-label="reduce"
                  onClick={() => {
                    setCount(Math.max(count - 1, 1));
                  }}>
                  <RemoveIcon fontSize="small" />
                </Button>
                <Badge  badgeContent={count}> </Badge>
                <Button
                disableRipple
                  className={styles.navBtn}
                  aria-label="increase"
                  onClick={() => {
                    setCount(count + 1);
                  }}>
                  <AddIcon fontSize="small" />
                </Button>
                  </div>
                  <Button className={styles.boxBtn} variant="contained" >добавить в корзину</Button>
                  </div>        
            </div>
        </Link>
  )
} 

export default EachItem;