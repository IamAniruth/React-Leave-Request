import { combineReducers } from 'redux';
import {LoginReducers} from './LoginReducers';
import {ValidUserReducer} from './ValidUserReducer';
import {LeaveReducers} from './LeaveReducers';


 export const RootReducers= combineReducers({
  LoginReducers,
  ValidUserReducer,
 LeaveReducers
})
 