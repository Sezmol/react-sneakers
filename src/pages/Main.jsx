import { useDispatch, useSelector } from 'react-redux';
import Cards from '../components/Cards';
import { useEffect } from 'react';
import { fetchData } from '../redux/actions';

function Main() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.appSneakers.sneakers);
  const error = useSelector((state) => state.appSneakers.error);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (error) {
    return <div>Ошибка: {error}</div>;
  }

  return <Cards title="Все кроссвоки" items={items} />;
}

export default Main;
