import { useEffect, lazy, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { checkUserSession } from './store/user/user-action';

// components
import Spinner from './components/spinner/spinner';

// components lazy load
const Navigation = lazy(() => import('./routes/navigation/Navigation'));
const Home = lazy(() => import('./routes/home/home'));
const Shop = lazy(() => import('./routes/shop/Shop'));
const CheckOut = lazy(() => import('./routes/checkout/CheckOut'));
const Authentication = lazy(() =>
  import('./routes/authentication/Authentication')
);

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkUserSession());
  });

  return (
    <Suspense callback={<Spinner />}>
      <Routes>
        <Route path='/' element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path='shop/*' element={<Shop />} />
          <Route path='checkout' element={<CheckOut />} />
          <Route path='auth' element={<Authentication />} />
        </Route>
      </Routes>
    </Suspense>
  );
};

export default App;
