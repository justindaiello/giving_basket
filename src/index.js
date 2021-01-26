import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './modules/App';
import AppProviders from './context';

ReactDOM.render(
  <AppProviders>
    <App />
  </AppProviders>,
  document.getElementById('root'),
);
