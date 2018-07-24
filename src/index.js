import React from 'react'
import { render } from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'

import App from './App.js'
import cities from './reducers/reducers'

const store =  createStore(combineReducers({cities}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
let rootElement = document.getElementById('app')

render(
   <Provider store = {store}>
    <App />
   </Provider>,
	
   rootElement
)