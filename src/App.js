import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, browserHistory } from "react-router-dom";
import store from './redux/store'
import { Home } from './Pages/Main'
import createHistory from './webroot/history';

import 'antd/dist/antd.css';


ReactDOM.render(
  <Provider store={store}>
    <Router history={browserHistory}>
      <Home />
    </Router>
  </Provider>,
  document.getElementById('app'),
)
