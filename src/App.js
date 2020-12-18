import React from 'react';
import { Route } from 'react-router-dom';

import { Nav, Footer } from './components';
import { Home, NotFound } from './pages'; 

const linkItems = [
  {
    name: 'Главная',
    out: false,
    id: 'home',
  },
  {
    name: 'О нас',
    out: false,
    id: 'about',
  },
  {
    name: 'Отзывы',
    out: false,
    id: 'reviews',
  },
  {
    name: 'Портфолио',
    out: false,
    id: 'partf',
  },
  {
    name: 'Прайс',
    out: false,
    id: 'price',
  },
  {
    name: 'Контакты',
    out: false,
    id: 'contact',
  },
];

const footetItems = {
  underTitle: 'КОНТАКТЫ',
  title: 'Будем рады сотрудничеству',
  items: [
    {
      icon: 'lnr-map-marker',
      list: ['Санкт-Петербург, Неский бульвар, 23', 'Москва, Ленина 35'],
    },
    {
      icon: 'lnr-phone-handset',
      list: ['+7 914 586-029-1', '+65 93901337'],
    },
    {
      icon: 'lnr-envelope',
      list: ['koralldv@gmail.com', 'trueton26.com@gmail.com'],
    },
  ],
};

function App() {
  return (
    <div>
      <Nav linkItems={linkItems} />
      <Route exact path="/" component={Home} />
      <Route exact path="*/**" component={NotFound} />
      <Footer linkItems={linkItems} footetItems={footetItems} />
    </div>
  );
}

export default App;
