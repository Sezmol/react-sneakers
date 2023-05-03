import { useDispatch, useSelector } from 'react-redux';
import { ADD_TO_CART, ADD_TO_FAVORITES, REMOVE_FROM_CART, REMOVE_FROM_FAVORITES } from '../redux/types';

const Card = ({item}) => {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.cartSneakers.cartSneakers);
  const favorites = useSelector(state => state.favorites.favorites);

  return ( 
    <div className="card">
      {favorites.find(elem => elem.id === item.id) ? 
        <img onClick={() => dispatch({ type: REMOVE_FROM_FAVORITES, payload: item.id })} className='favorite' height={32} width={32} src="/icons/favorited.svg" alt="Убрать из избранного" /> :
        <img onClick={() => dispatch({ type: ADD_TO_FAVORITES, payload: item })} className='favorite' height={32} width={32} src="/icons/favorite.svg" alt="Добавить в избранное" />
      }
      <img className='sneakers-img' height={112} width={133} src={item.image} alt="Кроссовки" />
      <h4>{item.name}</h4>
      <div className='card-footer'>
        <p>Цена: <span>{item.price} руб.</span></p>
        {cart.find(elem => elem.id === item.id) ? 
          <img onClick={() => dispatch({ type: REMOVE_FROM_CART, payload: item.id })} src="/icons/added.svg" alt="Убрать из корзины" /> :
          <img onClick={() => dispatch({ type: ADD_TO_CART, payload: item })} src="/icons/plus.svg" alt="Добавить в корзину" />
        }
      </div>
    </div>
  );
}
 
export default Card;