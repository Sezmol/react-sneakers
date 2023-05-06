import { useDispatch } from 'react-redux';
import { REMOVE_FROM_CART } from '../redux/types';

const CartCard = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="cart-card">
      <img
        className="cart-card-img"
        height={70}
        width={70}
        src={item.image}
        alt="Кроссовки"
      />
      <div className="cart-card-desc">
        <h4>{item.name}</h4>
        <p>{item.price} руб.</p>
      </div>
      <img
        onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })}
        height={32}
        width={32}
        src="/icons/remove.svg"
        alt="Удалить"
        className="cart-remove"
      />
    </div>
  );
};

export default CartCard;
