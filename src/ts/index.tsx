import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index/Index';
import '../sass/base';
import { Provider } from 'react-redux';
import store from './store/configreStore';

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app')
);
