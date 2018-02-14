import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './components/App';
import rootReducer from './reducers/index';
import './public/assets/stylesheet.css';

render(
  <Provider store={createStore(rootReducer)}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
