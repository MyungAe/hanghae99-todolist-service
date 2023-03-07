import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import store from 'redux/config/configStore';

import { BrowserRouter } from 'react-router-dom';
import CustomRoutes from 'router/Router';

import GlobalStyle from 'styles/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <GlobalStyle />
      <CustomRoutes />
    </BrowserRouter>
  </Provider>
);
