import CartCard from "./CartCard";

const Cart = () => {
  return ( 
    <div className="background-cart">
      <div className="cart">
        <div className="cart-header">
          <h1>Корзина</h1>
          <img height={36} width={36} src="/icons/remove.svg" alt="Закнрыть корзину" />
        </div>
        <div className="cart-content">
          <CartCard />
          <CartCard />
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
          <button className="cart-submit">
            <p>Оформить заказ</p>
            <img src="/icons/arrow.svg" alt="Стрелка" />
          </button>
        </div>
      </div>
    </div>
  );
}
 
export default Cart;