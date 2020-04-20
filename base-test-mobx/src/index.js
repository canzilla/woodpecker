/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'mobx-react';
import App from './containers/App'
import Store from './stores/Store'

ReactDOM.render(
  <Provider Store={Store}>
    <App />
  </Provider>,
	document.getElementById('root')
)

