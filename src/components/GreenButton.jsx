const GreenButton = ({ text, arrowPosition, onClick }) => {
  let arrow =
    arrowPosition === 'right' ? (
      <>
        <p>{text}</p>
        <img
          className="arrow-right"
          src="/icons/arrow-right.svg"
          alt="Стрелка"
        />
      </>
    ) : (
      <>
        <img className="arrow-left" src="/icons/arrow-left.svg" alt="Стрелка" />
        <p>{text}</p>
      </>
    );

  return (
    <button onClick={onClick} className="cart-button">
      {arrow}
    </button>
  );
};

export default GreenButton;
