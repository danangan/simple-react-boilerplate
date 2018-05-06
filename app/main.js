import React from 'react'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import ReactDOM from 'react-dom'
import App from './src/container/App'
import AppReducer from './reducer'

const store = createStore(AppReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
