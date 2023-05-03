import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Header from "../components/Header";
import CartMessage from "../components/CartMessage";
import { useNavigate } from "react-router-dom";

const Favorites = () => {
  const items = useSelector(state => state.favorites.favorites);
  const navigate = useNavigate();

  const backToMain = () => {
    navigate('/');
  };

  return (  
    <>
      <Header />
      {items.length ? 
      <Cards title='Мои закладки' items={items} /> : 
      <CartMessage 
        closeCart={backToMain}
        img='/img/bigEyesSmile.jpg' 
        title='Закладок нет :('
        desc='Вы ничего не добавляли в закладки'
      />
      }
    </>
  );
}
 
export default Favorites;