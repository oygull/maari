import React from "react";
import styles from "./home.module.scss"
import Hero from "../../features/Hero";
import Brends from "../../features/Brends";
import banner from "./banner.png"
import productsArr from "../../app/assets/date/productsArr";
import EachItem from "../../features/EachItem";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import banner2 from "./banner2.png"

interface ArrowProps {
  className?: string;
  onClick?: () => void;
}


const NextArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'nextArrowHome'}
      onClick={onClick}
    >
      <ArrowForwardIosIcon/>
    </div>
  );
};

const PrevArrow: React.FC<ArrowProps> = ({ className, onClick }) => {
  return (
    <div
      className={'prevArrowHome'}
      onClick={onClick}
    >
      <ArrowBackIosIcon/>
    </div>
  );
};

function HomePage(){

  const filteredProducts = productsArr.filter(product => product.productReviews > 5);
  const lastTenProducts = productsArr.slice(-10);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerPadding: "30px",
    centerMode: true,
    nextArrow: <NextArrow />,  
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: "0px",
       
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          centerPadding: "0",
        },
      },
    ],
  };


  return (
    <div className={styles.wrapper}>
        <Hero/>
        <Brends/>
        <div className={styles.innerWrap}>
          <img alt="banner" src={banner}/>
        </div>
        <div className="container">
          <h2 className={styles.headline}>Самые популярные продукты</h2>
          <div className={styles.sliderWrapper}>
              <Slider {...settings}>
              {filteredProducts.length > 0 ? (
                      filteredProducts.map((item) => (
                        <EachItem key={item.id} item={item} />
                      ))
                    ) : (
                      <p>No products found with more than 5 reviews.</p>
                    )}
              </Slider>
           
          </div>
        </div>
        <div className={styles.innerWrap2}>
          <img alt="banner2" src={banner2}/>
        </div>
        <div className="container">
          <h2 className={styles.headline}>Новинки</h2>
          <div className={styles.sliderWrapper}>
              <Slider {...settings}>
              {
                      lastTenProducts.map((item) => (
                        <EachItem key={item.id} item={item} />
                      ))
                   }
              </Slider>
           
          </div>
        </div>
    </div>
  )
} 

export default HomePage;