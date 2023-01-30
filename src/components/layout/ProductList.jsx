import React from 'react'
import CoffeeMenu from '../ui/main/CoffeeMenu';
import CoffeeTitle from '../ui/main/CoffeeTitle';
import style from './ProductList.module.css'

const ProductList = () => {
  return (
    <div className={style.container}>

<CoffeeTitle/>
    <CoffeeMenu/>
    </div>

  )
}

export default ProductList