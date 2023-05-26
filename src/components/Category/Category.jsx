import React from 'react'
import ProductCard from '../ProductCard/ProductCard'
import styles from './Category.module.css'

const Category = ({category, products}) => {

  return (
    <section key={category} className={styles.category}>
      <h1 className={styles.category__title}>
        {category.slice(0,1).toUpperCase()+category.slice(1)}
      </h1>
      <div className={styles.products}>
        {
          products.filter(prod => prod.category == category).map(prod => (
            <ProductCard product={prod}/>
          ))
        }
      </div>
    </section>
  )
}

export default Category