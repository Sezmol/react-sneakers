import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import Favorites from "./pages/Favorites";
import Purchases from "./pages/Purchases";

function App() {

  return (
    <div className="container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/purchases" element={<Purchases />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
