import { combineReducers } from 'redux';
import {LoginReducers} from './LoginReducers';
import {ValidUserReducer} from './ValidUserReducer';


 export const RootReducers= combineReducers({
  LoginReducers,
  ValidUserReducer
})
 