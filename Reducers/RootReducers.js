import { combineReducers } from 'redux';
import {LoginReducers} from './LoginReducers';
import {ValidUserReducer} from './ValidUserReducer';
import {DateSelectReducer} from './DateSelectReducer';


 export const RootReducers= combineReducers({
  LoginReducers,
  ValidUserReducer,
  DateSelectReducer
})
 