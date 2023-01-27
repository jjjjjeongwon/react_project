import React from 'react'

import style from './HeaderRight.module.css';

import { MdCoffee } from 'react-icons/md';
import {BsFillPersonFill, BsFillCartFill} from 'react-icons/bs'

const HeaderRight = () => {
  return (
    <nav className={style.navWrap}>
        <ul >
        <li className={style.iconBox}>
        <a href='/'><BsFillPersonFill className={style.icon}/></a>
        </li>
        <li className={style.iconBox}>
        <a href='/' >< MdCoffee className={style.icon}/></a>
            </li>
        <li className={style.iconBox}>
        <a href='/'><BsFillCartFill className={style.icon}/></a>
            </li>
        </ul>
    </nav>
  )
}

export default HeaderRight