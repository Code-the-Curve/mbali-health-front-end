import React, { Suspense } from 'react';
import { hot } from 'react-hot-loader';

import AppRoutes from './components/routes/AppRoutes';
import LoadingPage from './components/pages/LoadingPage';

const App = () => (
  <Suspense loader={<LoadingPage />}>
    <AppRoutes />
  </Suspense>
);

export default hot(module)(App);
