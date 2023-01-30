import React from 'react'
import style from './ProductDetailCard.module.css'

const ProductDetailCard = () => {
  return (
    <div>
    <div className={style.detailCardWrap}>
        <h4>나이트로 바닐라 크림
        </h4>
        <span>Nitro Vanilla Cream</span>
    </div>

    <p>부드러운 목넘김의 나이트로 커피와 바닐라 크림의 매력을 한번에 느껴보세요!</p>

    <div className={style.imageWrap}>
    <img class="m_view_img" src="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg" data-zoom-image="https://image.istarbucks.co.kr/upload/store/skuimg/2021/04/[9200000002487]_20210426091745609.jpg" alt=""/>
    </div>

    <div className={style.menuInfo}>

    </div>

    <div className={style.cartBtn}>
        사이렌오더
    </div>
        </div>
  )
}

export default ProductDetailCard