import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { OPEN_CART } from '../redux/types';
import { Link } from 'react-router-dom';
import Cart from './Cart';

const Header = () => {
  const dispatch = useDispatch();
  const cartSneakers = useSelector((state) => state.cartSneakers.cartSneakers);
  const totalPrice =
    cartSneakers.length > 0
      ? Math.round(cartSneakers.reduce((acc, curr) => acc + curr.price, 0))
      : 0;

  return (
    <header>
      <Cart />
      <Link to="/" style={{ textDecoration: 'none' }}>
        <div className="header-left">
          <div>
            <img height={40} width={40} src="/icons/logo.svg" alt="Лого" />
          </div>

          <div className="header-left-desc">
            <h3>REACT SNEAKERS</h3>
            <p>Магазин лучших кроссовок</p>
          </div>
        </div>
      </Link>
      <div className="header-right">
        <div
          onClick={() => dispatch({ type: OPEN_CART })}
          className="header-right-cart"
        >
          <img height={20} width={20} src="/icons/cart.svg" alt="Корзина" />
          <p>{totalPrice} руб.</p>
        </div>
        <div>
          <Link to="/favorites">
            <img
              height={20}
              width={20}
              src="/icons/heart.svg"
              alt="Избранное"
            />
          </Link>
        </div>
        <div>
          <Link to="/purchases">
            <img height={20} width={20} src="/icons/user.svg" alt="Профиль" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
