const Card = () => {
  return ( 
    <div className="card">
      <img className='favorite' height={32} width={32} src="/icons/favorite.svg" alt="Добавить в избранное" />
      <img className='sneakers-img' height={112} width={133} src="/img/sneakers1.jpg" alt="Кроссовки" />
      <h4>Мужские Кроссовки Nike Blazer Mid Suede</h4>
      <div className='card-footer'>
        <p>Цена: <span>12 999 руб.</span></p>
        <img src="/icons/plus.svg" alt="Добавить" />
      </div>
    </div>
  );
}
 
export default Card;