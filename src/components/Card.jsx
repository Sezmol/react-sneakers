import { useDispatch, useSelector } from 'react-redux';
import {
  ADD_TO_CART,
  ADD_TO_FAVORITES,
  REMOVE_FROM_CART,
  REMOVE_FROM_FAVORITES,
} from '../redux/types';

const Card = ({ item }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSneakers.cartSneakers);
  const favorites = useSelector((state) => state.favorites.favorites);

  const addToFavorites = () => {
    dispatch({ type: ADD_TO_FAVORITES, payload: item });
  };

  const removeFromFavorites = () => {
    dispatch({ type: REMOVE_FROM_FAVORITES, payload: item.id });
  };

  const addToCart = () => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };

  const removeFromCart = () => {
    dispatch({ type: REMOVE_FROM_CART, payload: item.id });
  };

  const isInFavorites = favorites.some((elem) => elem.id === item.id);
  const isInCart = cart.some((elem) => elem.id === item.id);

  return (
    <div className="card">
      <img
        onClick={isInFavorites ? removeFromFavorites : addToFavorites}
        className="favorite"
        height={32}
        width={32}
        src={isInFavorites ? '/icons/favorited.svg' : '/icons/favorite.svg'}
        alt={isInFavorites ? 'Убрать из избранного' : 'Добавить в избранное'}
      />
      <img
        className="sneakers-img"
        height={112}
        width={133}
        src={item.image}
        alt="Кроссовки"
      />
      <h4>{item.name}</h4>
      <div className="card-footer">
        <p>
          Цена: <span>{item.price} руб.</span>
        </p>
        <img
          onClick={isInCart ? removeFromCart : addToCart}
          src={isInCart ? '/icons/added.svg' : '/icons/plus.svg'}
          alt={isInCart ? 'Убрать из корзины' : 'Добавить в корзину'}
        />
      </div>
    </div>
  );
};

export default Card;
