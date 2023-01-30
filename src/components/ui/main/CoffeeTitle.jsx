import React from 'react'
import style from './CoffeeTitle.module.css'

const ProductList = () => {
  return (
    <div className={style.productList}>
            <div  >
                <span className={style.coffeeTitle}>
                    콜드 브루 커피
                </span>
                <i className={style.summaryIcon}>
                    <img className={style.icon} src="//image.istarbucks.co.kr/common/img/menu/logo_decaf.png" alt =""/>
                </i>
                </div>

                <span class="summary">디카페인 에스프레소 샷 추가 가능 (일부 음료 제외)</span>
            

    </div>
  )
}

export default ProductList