import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

import './styles.css'

import App from './containers/App'
import rootReducer from './state/reducers'

const state = createStore(rootReducer)

const rootElement = document.getElementById('root')
ReactDOM.render(
  <Provider store={state}>
    <App />
  </Provider>,
  rootElement
)
