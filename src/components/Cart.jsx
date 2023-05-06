import { CHECKOUT, CLOSE_CART, REMOVE_ALL_FROM_CART } from '../redux/types';
import CartCard from './CartCard';
import { useDispatch, useSelector } from 'react-redux';
import GreenButton from './GreenButton';
import CartMessage from './CartMessage';
import { useState, useEffect } from 'react';

const Cart = () => {
  const dispatch = useDispatch();
  const { cartSneakers, cartIsOpen } = useSelector(
    (state) => state.cartSneakers
  );
  const [cartBody, setCartBody] = useState();
  const [orderProcessed, setOrderProcessed] = useState(false);
  const totalPrice =
    cartSneakers.length > 0
      ? Math.round(cartSneakers.reduce((acc, curr) => acc + curr.price, 0))
      : 0;
  const tax = Math.round((totalPrice / 100) * 5);

  useEffect(() => {
    setOrderProcessed(false);
    if (cartSneakers.length) {
      setCartBody(
        <>
          <div className="cart-content">
            {cartSneakers.map((item) => (
              <CartCard key={item.id} item={item} />
            ))}
          </div>
          <div className="cart-footer">
            <div className="total">
              <p>Итого:</p>
              <div className="dashed"></div>
              <span>{totalPrice + tax} руб.</span>
            </div>
            <div className="tax">
              <p>Налог 5%:</p>
              <div className="dashed"></div>
              <span>{tax} руб.</span>
            </div>
            <GreenButton
              onClick={submitOrder}
              text="Оформить заказ"
              arrowPosition="right"
            />
          </div>
        </>
      );
    } else if (!orderProcessed) {
      setCartBody(
        <CartMessage
          closeCart={closeCart}
          img="/img/empty-cart.jpg"
          title="Корзина пустая"
          desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
          buttonText="Вернуться назад"
        />
      );
    }
  }, [cartSneakers]);

  function closeCart() {
    dispatch({ type: CLOSE_CART });
  }

  function submitOrder() {
    dispatch({ type: CHECKOUT, payload: cartSneakers });
    dispatch({ type: REMOVE_ALL_FROM_CART });
    setCartBody(
      <CartMessage
        closeCart={closeCart}
        img="/img/order-success.jpg"
        title="Заказ оформлен!"
        desc="Ваш заказ #18 скоро будет передан курьерской доставке"
        buttonText="Вернуться назад"
      />
    );
    setOrderProcessed(true);
  }

  return (
    <>
      <div
        className={
          cartIsOpen
            ? 'background-cart open-background-cart'
            : 'background-cart'
        }
      ></div>
      <div className={cartIsOpen ? 'cart open-cart' : 'cart'}>
        <div className="cart-header">
          <h1>Корзина</h1>
          <img
            onClick={closeCart}
            height={36}
            width={36}
            src="/icons/remove.svg"
            alt="Закрыть корзину"
          />
        </div>
        <div className="cart-body">{cartBody}</div>
      </div>
    </>
  );
};

export default Cart;
