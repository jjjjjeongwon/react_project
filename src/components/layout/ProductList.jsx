import React from 'react'
import CoffeeMenu from '../ui/main/CoffeeMenu';
import CoffeeTitle from '../ui/main/CoffeeTitle';
import style from './ProductList.module.css'

const ProductList = () => {
  return (
    <div className={style.container}>
      <h1>음료</h1>
<CoffeeTitle/>
    <CoffeeMenu/>
    </div>

  )
}

export default ProductList