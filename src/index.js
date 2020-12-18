import React from 'react';
import ReactDOM from 'react-dom';
import { Suspense, lazy } from 'react';
import { BrowserRouter } from 'react-router-dom';

import Preloader from './components/Preloader';

import 'bootstrap/dist/js/bootstrap.bundle.min';
import './scss/app.scss';
import './App.css';

const App = lazy(() => import('./App'));

ReactDOM.render(
  <BrowserRouter>
    <Suspense fallback={<Preloader />}>
      <App />
    </Suspense>
  </BrowserRouter>,
  document.getElementById('root'),
);
