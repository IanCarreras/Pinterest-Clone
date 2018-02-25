import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from './reducers'

import './index.css';
import App from './App';

const createStoreWitheMiddleware = applyMiddleware(reduxThunk, logger)(createStore)
export const store = createStoreWitheMiddleware(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  ,document.getElementById('root'));
