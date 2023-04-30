const CartCard = () => {
  return ( 
    <div className="cart-card">
      <img className="cart-card-img" height={70} width={70} src="/img/sneakers2.jpg" alt="Кроссовки" />
      <div className="cart-card-desc">
        <h4>Мужские Кроссовки Nike Air Max 270</h4>
        <p>12 999 руб.</p>
      </div>
      <img height={32} width={32} src="/icons/remove.svg" alt="Удалить" className="cart-remove" />
    </div>
  );
}
 
export default CartCard;