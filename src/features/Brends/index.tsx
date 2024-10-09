import React from "react";
import styles from "./brends.module.scss";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Brends(){

  const brendsArr = [
    'https://kleargloss.com/cdn/shop/collections/image.webp?v=1693336795', 
    'https://www.cosmoprof.com/media//cosmoprof/brandBible/2024/AC22C0A9-CA99-E552-4F9F7663FD23C774.png',
    'https://1000logos.net/wp-content/uploads/2023/11/Holika-Holika-Logo.png',
    'https://www.ashayang.com/cdn/shop/collections/logo.png?v=1711389271&width=750',
    'https://www.sephora.bh/on/demandware.static/-/Library-Sites-SephoraV2/en/dw166fcb5f/Brands_Visuals/LANEIGE/LANEIGE_ALLPRODUCTPAGE_LOGO_300x150.png',
    'https://vely-prod-media-bucket.s3.amazonaws.com/uploads/2020/03/26/brand-logos-with-shadow.png',
    'https://cdn-ilaoppl.nitrocdn.com/XjuIAzNalKJPTbhQUYQPeYggKudYcgAw/assets/images/optimized/www.elbeauty.gr/wp-content/uploads/2023/12/anua-logo.png',
    'https://www.heybabescosmetics.com/upload/resize_cache/webp/upload/iblock/fee/go52kylgybc8qmu41xjp05t29uiba3ea/Dizayn-bez-nazvaniya-_-2023_09_26T111750.274.webp',
    'https://dermaistas.com/wp-content/uploads/2023/01/Farmstay-Square.png'];


    const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 2,
    swipeToSlide: true,
    centerPadding: "60px",
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 4,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <div className={styles.wrapper}>
       <div className="container">
        <h2 className={styles.headline}>Популярные бренды</h2>
        <div className={styles.sliderContaner}>
        <Slider {...settings}>
          {
            brendsArr.map((item) =>  <div className={styles.brendTypes}><img alt="brendImg" src={item}/></div>)
          }
         
        </Slider>
    </div>
       </div>
    </div>
  )
} 

export default Brends;