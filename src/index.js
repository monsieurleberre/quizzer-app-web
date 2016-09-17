/* eslint-disable import/default */

import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import configureStore from './store/configureStore';
import rootSaga from './sagas';
require('./favicon.ico'); // Tell webpack to load favicon.ico
import './styles/styles.scss'; // Yep, that's right. You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.
import { syncHistoryWithStore } from 'react-router-redux';
import ThemeWrapper from './ThemeWrapper';
import {put} from 'redux-saga/effects';

const store = configureStore();
store.runSaga(rootSaga);

// Create an enhanced history that syncs navigation events with the store
// also uses Immutable to change the 'routing' prop of the state, this is
// a little coupling but could we could pass down a variable from the rootReducer...
const history = syncHistoryWithStore(browserHistory, store, {
  selectLocationState (state) {
    return state.get('routing').toJS();
  }
});

//put(type: 'LOAD_USER', {})

render(
  <Provider store={store}>
    <ThemeWrapper>
      <Router history={history} routes={routes} />
    </ThemeWrapper>
  </Provider>, document.getElementById('app')
);
