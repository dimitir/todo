import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';

import App from './App';
/* import reducer from './store/reducers';
import './app.css'; */

// const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

ReactDOM.render(
  <App />,
  document.getElementById('root')
);