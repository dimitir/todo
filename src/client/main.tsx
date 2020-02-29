import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
// import thunk from 'redux-thunk';
import createSagaMiddleware from 'redux-saga'
import 'bootstrap/dist/css/bootstrap.min.css';
import rootSaga from './store/saga/sagas';

import App from './App';
import reducer from './store/RootStore/reducers';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducer, composeWithDevTools(applyMiddleware(logger, sagaMiddleware)));
sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,
  document.getElementById('root')
);