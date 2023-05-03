import Card from "./Card";

const Cards = ({ items, title }) => {
  return ( 
    <>
      <div className="content-header">
        <h1>{title}</h1>
        <div className='search'>
          <img src="/icons/search.svg" alt="Поиск" />
          <input placeholder='Поиск...' type="text" />
        </div>
      </div>
      <div className="content">
      {
        items.map(item => {
          return <Card key={item.id} item={item}/>
        })
      }
      </div>
    </>
  );
}

export default Cards;