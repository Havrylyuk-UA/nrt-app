import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';

import './App.css';
import SharedLayout from './components/SharedLayout/SharedLayout';

const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));
const IdealPage = lazy(() => import('./pages/IdealPage'));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<IdealPage />} />
          <Route path="/ideal" element={<IdealPage />} />
          <Route path="/*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
