import '../sass/base';
import React from 'react';
import ReactDOM from 'react-dom';
import Index from './pages/Index/Index';
import { Provider } from 'react-redux';
import store, { persistor } from './store/configreStore';
import { PersistGate } from 'redux-persist/integration/react';

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <Index />
    </PersistGate>
  </Provider>,
  document.getElementById('app')
);
