import React from "react";
import styles from "./howToOrder.module.scss";
import order from './orderImg.png'

function HowToOrder(){
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.wrapperInner}>
        <div>
          <h1 className={styles.orederTitile}>Как заказать? (Пошаговая инструкция)</h1>
         <ul className={styles.orderList} role="list">
            <li className={styles.listItem}>Зарегистрируйтесь или выполните вход в имеющийся аккаунт</li>
            <li className={styles.listItem}>Выберите нужную вам категорию в меню, вы можете выбирать бренды или же категории товаров.При желании воспользуйтесь поиском(значок лупы)</li>
            <li className={styles.listItem}>Найдя нужный товар, нажмите на кнопку «в корзину»</li>
            <li className={styles.listItem}>Когда вы добавите в корзину все необходимые товары, перейдите к ней нажав на кнопку «КОРЗИНА» в правом верхнем углу.</li>
            <li className={styles.listItem}>Проверьте содержимое корзины и нажмите кнопку "Оформить заказ"</li>
            <li className={styles.listItem}>Выберите самовывоз (если хотите забрать заказ самостоятельно) или же укажите адрес доставки, выберите удобный способ оплаты, и оставьте дополнительный комментарий (при наличии).</li>
            <li className={styles.listItem}>Нажмите кнопку «ОФОРМИТЬ» и дождитесь звонка оператора-консультанта.</li>
         </ul>
        </div>
        <div className={styles.imgBox}>
          <div className={styles.imgBoxInner} >
            <img alt="img" src="https://mylittlekorea.com/cdn/shop/files/LaneigeNeoCushion_Glow_PDP_01.jpg?v=1688366004&width=528"/>
          </div>
          
        </div>
        </div>
      </div>
    </div>
  )
} 

export default HowToOrder;