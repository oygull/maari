import React from "react";
import styles from "./blogInner.module.scss";
import { useLocation } from "react-router-dom";
import blogArr from "../../app/assets/date/blogArr";

function BlogInner() {
  let location = useLocation();

  return (
    <div className={styles.wrapper}>
      <div className='container'>
       {
        blogArr.map((el,i)=>{
          const blogIdFromPath = Number(location.pathname.split("/").at(-1));

          if (el.blogId === blogIdFromPath){
            return(
              <div>
                 <h2 className={styles.blogTitle}>{el.blogTitle}</h2>
                 <div className={styles.innerWrap}>
                  <div className={styles.textBox}>
                    {
                      el.blogDesc.map((item,i)=>
                        <div key={i} className={styles.blogDesc}>
                            <h3 className={styles.blogSubTitle}>{item.subTitle}</h3>
                            <p className={styles.blogPar}>{item.subPar}</p>
                        </div>
                      )
                    }
                  </div>
                  <div className={styles.imgBox}>
                    <img alt="blogImg" src={el.blogImg}/>
                  </div>
              </div>
              </div>
            )
          }
        })
       }
      </div>
    </div>
  );
}


export default BlogInner;
