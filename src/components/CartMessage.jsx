import GreenButton from './GreenButton';

const CartMessage = ({ closeCart, img, title, desc, buttonText }) => {
  return (
    <div className="cart-message">
      <img src={img} alt="Картинка" />
      <h3>{title}</h3>
      <span>{desc}</span>
      <GreenButton onClick={closeCart} text={buttonText} arrowPosition="left" />
    </div>
  );
};

export default CartMessage;
