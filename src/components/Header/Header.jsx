import React from 'react'
import styles from "./Header.module.css"

import menuIcon from "../../assets/images/menuIcon.png"
import logo from "../../assets/images/logo.png"
import locationIcon from "../../assets/images/locationIcon.png"
import basketIcon from "../../assets/images/shoppingCart.png"
import countryFlag from "../../assets/images/russianFlag.png"
import arrowDown from "../../assets/images/arrowDown.png"
import userIcon from "../../assets/images/userIcon.png"


const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header__left}>
        <div className={styles.header__menu}>
          <img src={menuIcon} alt="" />
        </div>
        <div className={styles.header__logo}>
          <img src={logo} alt="Zuzu logo" />
        </div>
        <div className={`${styles.header__location} ${styles.header__item}`}>
          <img src={locationIcon} alt="location icon" />
          <p>Toshkent</p>
        </div>
      </div>
      <div className={styles.header__right}>
        <div className={`${styles.header__basket} ${styles.header__item}`}>
          <img src={basketIcon} alt="Basket Icon" />
          <p>Корзина</p>
        </div>
        <div className={`${styles.header__language} ${styles.header__item}`}>
          <img src={countryFlag} alt="Country Flag" />
          <img src={arrowDown} alt="Arrow Down Icon" />
        </div>
        <div className={`${styles.header__account} ${styles.header__item}`}>
          <img src={userIcon} alt="User Account Icon" />
          <p>Войти</p>
        </div>
      </div>
    </header>
  )
}

export default Header