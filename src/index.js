import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';
import makeInspectable from 'mobx-devtools-mst';

import App from './App';

import './assets/main.css';

import store from './store';

makeInspectable(store);

ReactDOM.render(
  <Provider {...store}>
    <App />
  </Provider>, document.getElementById('root')
);