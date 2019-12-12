import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Home from './containers/Home'
import 'antd/dist/antd.css';

ReactDOM.render(
  <Provider store={store}>
    <Home />
  </Provider>,
  document.getElementById('app'),
)
