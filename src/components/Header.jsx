import React from "react";

const Header = () => {
  return ( 
    <header>
      <div className='header-left'>
        <div>
        <img height={40} width={40} src="/icons/logo.svg" alt="Лого" />
        </div>
        <div className='header-left-desc'>
          <h3>REACT SNEAKERS</h3>
          <p>Магазин лучших кроссовок</p>
        </div>
      </div>
      <div className='header-right'>
        <div className='header-right-cart'>
          <img height={18} width={18} src="/icons/cart.svg" alt="Корзина" />
          <p>1205 руб.</p>
        </div>
        <div>
          <img height={19} width={21} src="/icons/heart.svg" alt="Избранное" />
        </div>
        <div>
          <img height={20} width={20} src="/icons/user.svg" alt="Профиль" />
        </div>
      </div>
    </header>
  );
}
 
export default Header;