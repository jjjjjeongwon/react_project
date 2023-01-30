import React from 'react'
import ProductDetailCard from '../layout/ProductDetailCard'
import style from './ProductDetail.module.css'

const ProductDetail = () => {
  return (
    <div className={style.container}>
      <div className={style.title}>
    <h2 className={style.titleName}>콜드브루</h2>
    <ProductDetailCard/>
      </div>
    </div>
  )
}

export default ProductDetail