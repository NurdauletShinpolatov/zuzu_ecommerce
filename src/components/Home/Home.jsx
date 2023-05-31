import React, { useEffect, useState } from 'react'
import { productsServices } from '../../API/productsServices'
import Category from '../Category/Category'
import styles from './Home.module.css'
import headerImage from '../../assets/images/headerImage.png'
import arrowDown from '../../assets/images/arrowDown.png'
import ModalSP from '../ModalSP/ModalSP'
import { useDispatch, useSelector } from 'react-redux'
import { setCategoriesAC, setProductsAC } from '../../redux/productReducer'

const Home = ({loading}) => {
  const products = useSelector(state => state.product.products)
  const categories = useSelector(state => state.product.categories)
  const dispatch = useDispatch()

  // useEffect(() => {
  //   productsServices.getAllProducts().then((res) => {
  //     dispatch(setProductsAC(res));
  //   });

  //   productsServices.getAllCategories().then((res) => {
  //     dispatch(setCategoriesAC(res));
  //   })
  // }, [])


  const sectionsJSX = categories.map(category => (
    <Category category={category} products={products} />
  ))
  
  return (
    <div className={styles.home}>
        {
          loading ? (
            <div className="progress">
              <div className="indeterminate"></div>
            </div>
          ):(
            <>
            <div className={styles.header__image_container}>
              <div className={`${styles.arrow__bg} ${styles.arrow__bg_left}`}>
                <img src={arrowDown} alt="Arrow left" />
              </div>
              <div className={`${styles.arrow__bg} ${styles.arrow__bg_right}`}>
                <img src={arrowDown} alt="Arrow right" />
              </div>
              <img className={styles.header__image} src={headerImage} alt="" />
            </div>
            <div className={styles.products__section}>
              { sectionsJSX }
              <ModalSP />
            </div>
          </>
          )
        }
      
    </div>
  )
}

export default Home