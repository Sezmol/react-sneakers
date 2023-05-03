import { useSelector } from 'react-redux';
import Header from '../components/Header';
import Cards from '../components/Cards';

function Main() {
  const items = useSelector(state => state.appSneakers.sneakers);

  return (
    <>
      <Header />
      <Cards title='Все кроссвоки' items={items} />
    </>
  );
}

export default Main;
