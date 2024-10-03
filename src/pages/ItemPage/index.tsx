import React from "react";
import styles from "./itemPage.module.scss"
import { useLocation } from "react-router-dom";
import productsArr from "../../app/assets/date/productsArr";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Badge from '@mui/material/Badge';
import RemoveIcon from '@mui/icons-material/Remove';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import NotesIcon from '@mui/icons-material/Notes';
import HubOutlinedIcon from '@mui/icons-material/HubOutlined';
import RateReviewOutlinedIcon from '@mui/icons-material/RateReviewOutlined';

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      id={`action-tabpanel-${index}`}
      aria-labelledby={`action-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

function a11yProps(index: any) {
  return {
    id: `action-tab-${index}`,
    'aria-controls': `action-tabpanel-${index}`,
  };
}

const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'nextArrow'}
      onClick={onClick}
    >
      <ArrowForwardIosIcon/>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'prevArrow'}
      onClick={onClick}
    >
      <ArrowBackIosIcon/>
    </div>
  );
};

function ItemPage(){

  let location = useLocation();

  let settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />  
  };

  const [count, setCount] = React.useState(1);

  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: unknown, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={styles.wrapper}>
      {
        productsArr.map((el,i)=>{
          const pathId = location.pathname.split("/").at(-1);
          if(el.id === Number(pathId)){
            return(
              <div key={i} className={styles.wrapper} >
                  <div className="container">
                    <div className={styles.wrapperInner}>
                        <div className={styles.imgBox}>
                            <Slider {...settings}>
                              {
                                el.productImages.map((img)=>
                                  <div className={styles.productImg}>
                                    <img alt="productImg" src={img}/>
                                  </div>
                                )
                              }
                              <img alt="productImg" src={el.productImages[0]}/>
                            </Slider>
                        </div>
                        <div className={styles.descBox}>
                              <h2 className={styles.productTitle}>{el.productName}</h2>
                              <div className={styles.productReview}>
                                <Rating name="read-only" value={5} readOnly />
                                <p className={styles.reviews}>{el.productReviews} отзыва</p>
                              </div>
                              <p className={styles.itemPrice}>{el.productPrice}</p>
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
                                <p> Укажите количество товара !</p>
                              </div>
                             
                             <Box className={styles.tabsBox}>
                                <AppBar position="static" color="default">
                                  <Tabs
                                    value={value}
                                    onChange={handleChange}
                                    sx={{
                                      '& .MuiTabs-indicator': {
                                        backgroundColor: '#ff485f', 
                                      },
                                    }}
                                    variant="fullWidth"
                                  >
                                    <Tab label={<div className={styles.tabCon}><NotesIcon className={styles.tabIcon}/>Описание</div>}{...a11yProps(0)} />
                                    <Tab label={<div className={styles.tabCon}><HubOutlinedIcon className={styles.tabIcon}/>Состав</div>}{...a11yProps(1)} />
                                    <Tab label={<div className={styles.tabCon}><RateReviewOutlinedIcon className={styles.tabIcon}/>Отзывы</div>}{...a11yProps(2)} />
                                  </Tabs>
                                </AppBar>
                                <TabPanel value={value} index={0} dir={theme.direction} >
                                  <div className={styles.tabPanel}>{el.productDesc}</div> 
                                </TabPanel>
                                <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className={styles.tabPanel}>{el.productCompound} </div>
                                </TabPanel>
                                <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className={styles.tabPanel}> </div>
                                </TabPanel>
                             </Box>
                             <Box sx={{ '& > :not(style)': { mr: 2 } }}>
                                <Button className={styles.boxBtn} endIcon={<AddShoppingCartIcon />} variant="contained" >добавить в корзину</Button>
                                <Button className={styles.boxBtn} endIcon={<FavoriteBorderIcon />} variant="contained" >Добавить в избранное</Button>
                             </Box>
                        </div>
                    </div>
                  </div>
              </div>
            )
          }
        })
      }
    </div>
  )
} 

export default ItemPage;