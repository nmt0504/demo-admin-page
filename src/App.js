import React from 'react';
import { LocaleProvider } from 'antd';
import { Dashboard, Header, Sidebar } from 'react-adminlte-dash';
import { Provider } from 'react-redux';
import { Routes } from './routes';
import { store, history } from './_helpers';

import './assets/libs/font-awesome-web-fonts/css/fontawesome-all.min.css';

const App = () => (
  <LocaleProvider>
    <Provider store={store}>
	    <Routes/>
    </Provider>
  </LocaleProvider>
);

export default App;
