import React from 'react';
import { LocaleProvider } from 'antd';
import { BrowserRouter } from 'react-router-dom';
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store } from './_helpers';

import './assets/libs/font-awesome-web-fonts/css/fontawesome-all.min.css';

const App = () => (
  <LocaleProvider>
    <Provider store={store}>
      <BrowserRouter>
        <Routes/>
      </BrowserRouter>
    </Provider>
  </LocaleProvider>
);

export default App;
