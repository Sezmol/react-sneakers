import { CHECKOUT, CLOSE_CART, REMOVE_ALL_FROM_CART } from "../redux/types";
import CartCard from "./CartCard";
import { useDispatch, useSelector } from "react-redux";
import GreenButton from "./GreenButton";
import CartMessage from "./CartMessage";
import { useState, useEffect } from "react";

const Cart = () => {
  const {cartSneakers, cartIsOpen} = useSelector(state => state.cartSneakers);
  const dispatch = useDispatch();
  const [cartBody, setCartBody] = useState();

  useEffect(() => {
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
              <span>21 498 руб.</span>
            </div>
            <div className="tax">
              <p>Налог:</p>
              <div className="dashed"></div>
              <span>1074 руб.</span>
            </div>
            <GreenButton
              onClick={submitOrder}
              text="Оформить заказ"
              arrowPosition="right"
            />
          </div>
        </>
      );
    } else {
      setCartBody(
        <CartMessage
          closeCart={closeCart}
          img="/img/empty-cart.jpg"
          title="Корзина пустая"
          desc="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
        />
      );
    }
  }, [cartSneakers]);

  function closeCart() {
    dispatch({ type: CLOSE_CART })
  }

  function submitOrder() {
    dispatch({ type: CHECKOUT, payload: cartSneakers });
    dispatch({ type: REMOVE_ALL_FROM_CART });
    setCartBody(
      <CartMessage 
        closeCart={closeCart}
        img='/img/order-success.jpg'
        title='Заказ оформлен!' 
        desc='Ваш заказ #18 скоро будет передан курьерской доставке' 
      />
    );
  }

  return ( 
    <>
      <div className={cartIsOpen ? "background-cart open-background-cart" : "background-cart"}></div>
      <div className={cartIsOpen ? "cart open-cart" : "cart"}>
        <div className="cart-header">
          <h1>Корзина</h1>
          <img onClick={closeCart} height={36} width={36} src="/icons/remove.svg" alt="Закрыть корзину" />
        </div>
        <div className="cart-body">
          {cartBody}
        </div>
      </div>
    </>
  );
}
 
export default Cart;