import React from "react";
import { useDispatch } from "react-redux";
import { OPEN_CART } from "../redux/types";
import { Link } from "react-router-dom";
import Cart from './Cart';

const Header = () => {
  const dispatch = useDispatch()

  return ( 
    <header>
      <Cart />
      <div className='header-left'>
        <div>
        <img height={40} width={40} src="/icons/logo.svg" alt="Лого" />
        </div>
        <Link to='/' style={{ textDecoration: 'none' }}>
          <div className='header-left-desc'>
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </Link>
      </div>
      <div className='header-right'>
        <div onClick={() => dispatch({ type: OPEN_CART }) } className='header-right-cart'>
          <img height={18} width={18} src="/icons/cart.svg" alt="Корзина" />
          <p>1205 руб.</p>
        </div>
        <div>
          <Link to='/favorites'>
            <img height={19} width={21} src="/icons/heart.svg" alt="Избранное" />
          </Link>
        </div>
        <div>
          <Link to='/purchases'>
            <img height={20} width={20} src="/icons/user.svg" alt="Профиль" />
          </Link>
        </div>
      </div>
    </header>
  );
}
 
export default Header;