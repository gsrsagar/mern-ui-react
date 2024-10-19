
import { appReducer } from './reducer';
import { thunk } from 'redux-thunk'
import { applyMiddleware, createStore } from "redux";


export const appStore = createStore(
    appReducer,
    applyMiddleware(thunk)
)