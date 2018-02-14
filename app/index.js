import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import reducers from './reducers/index';
import './public/assets/stylesheet.css';

render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
