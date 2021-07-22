import React from 'react';
import ReactDOM from 'react-dom';

import BasketProvider from './contexts/basketContext';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    <BasketProvider>
      <Routes />
    </BasketProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);
