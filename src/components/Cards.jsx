import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Card from './Card';
import CardLoader from './CardLoader';
import CartMessage from './CartMessage';

const Cards = ({ items, title }) => {
  const [search, setSearch] = useState('');
  const resetSearch = () => setSearch('');
  const isLoading = useSelector((state) => state.appSneakers.loading);
  let goods;

  if (isLoading)
    goods = new Array(8).fill(null).map((elem, i) => <CardLoader key={i} />);
  else
    goods = items
      .filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .map((item) => <Card key={item.id} item={item} />);

  if (goods.length === 0)
    goods = (
      <CartMessage
        closeCart={resetSearch}
        img="/img/sadSmile.jpg"
        title="Товары не найдены"
        desc="Товары с таким запросом не найдены"
        buttonText="Сбросить поиск"
      />
    );

  return (
    <>
      <div className="content">
        <div className="content-header">
          <h1>{title}</h1>
          <div className="search">
            <img src="/icons/search.svg" alt="Поиск" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Поиск..."
              type="text"
            />
          </div>
        </div>
        <div className="content-main">{goods}</div>
      </div>
    </>
  );
};

export default Cards;
