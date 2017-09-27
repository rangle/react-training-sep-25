import React from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';
import { RootContainer } from './Root';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { store } from './store';

ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root'),
);
registerServiceWorker();
