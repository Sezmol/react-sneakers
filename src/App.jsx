import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/Main';
import Favorites from './pages/Favorites';
import Purchases from './pages/Purchases';
import Header from './components/Header';

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
