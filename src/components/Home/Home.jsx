import React, { useEffect, useState } from 'react'
import { productsServices } from '../../API/productsServices'
import styles from './Home.module.css'
import axios from 'axios'

const BASE_URL = 'https://fakestoreapi.com/products'

const Home = () => {
  const [products, setProducts] = useState([])

  

  useEffect(() => {
    productsServices.getAll().then((res) => {
      setProducts(res);
    })
  }, [])
  const productsJSX = products.map(prod => (
    <div key={prod.id} className="product">
      <img src={prod.image} alt="product image" />
      <div className="title">
        {prod.title}
      </div>
      <div className="description">
        {prod.description}
      </div>
    </div>
  ))
  
  return (
    <div className="home">
      {productsJSX}
    </div>
  )
}

export default Home