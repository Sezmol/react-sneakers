import React from 'react';
import './App.css';
import Header from './components/Header';
import Card from './components/Card';
import Cart from './components/Cart';

function App() {
  return (
    <div className="container">
      {/* <Cart /> */}
      <Header />
      <div className="content-header">
        <h1>Все кроссовки</h1>
        <div className='search'>
          <img src="/icons/search.svg" alt="Поиск" />
          <input placeholder='Поиск...' type="text" />
        </div>
      </div>
      <div className="content">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
}

export default App;
