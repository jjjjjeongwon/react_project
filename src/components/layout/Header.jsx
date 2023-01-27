import React from 'react'
import HeaderLogo from '../ui/header/HeaderLogo'
import HeaderRight from '../ui/header/HeaderRight'
import style from './Header.module.css'

const Header = () => {
  return (
    <header className={style.header}>
        <HeaderLogo/>
        <HeaderRight/>
    </header>
  )
}

export default Header