import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import { combineReducers } from 'redux'
import thunk from 'redux-thunk';
import App from './App'
import {mainReducer} from "./main/mainReducer";
import {groupReducer} from "./group/groupReducer"


const reducers = combineReducers({
    main: mainReducer,
    group: groupReducer
})
const store = createStore(reducers, applyMiddleware(thunk))

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)