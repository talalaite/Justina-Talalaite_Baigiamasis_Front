import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';

// import BasketProvider from './contexts/basketContext';
import Routes from './Routes';

ReactDOM.render(
  <React.StrictMode>
    {/* <BasketProvider> */}
    <Routes />
    {/* </BasketProvider> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
