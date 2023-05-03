import { useSelector } from "react-redux";
import Cards from "../components/Cards";
import Header from "../components/Header";
import CartMessage from "../components/CartMessage";
import { useNavigate } from "react-router-dom";

const Purchases = () => {
  const items = useSelector(state => state.purchases.purchases);
  const navigate = useNavigate();

  const backToMain = () => {
    navigate('/');
  };

  return (  
    <>
      <Header />
      {items.length ? 
      <Cards title='Мои покупки' items={items} /> : 
      <CartMessage 
        closeCart={backToMain}
        img='/img/sadSmile.jpg' 
        title='У вас нет заказов'
        desc='Вы нищеброд? Оформите хотя бы один заказ.'
      />
      }
    </>
  );
}
 
export default Purchases;