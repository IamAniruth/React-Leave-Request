import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import {RootReducers} from '../Reducers/RootReducers'

export const store = createStore(RootReducers,applyMiddleware(thunk)
)
