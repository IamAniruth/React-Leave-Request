
import {adminInfo,userInfo} from '../DataAPI/LoginData';
export const UserNameActions =(content)=>({
  type:'HANDLE_USER_NAME',
  payload:content
})

export const UserPasswordActions =(content)=>({
  type:'HANDLE_USER_PASSWORD',
  payload:content
})

export const ClearLoginFieldAction=()=>({
  type:'HANDLE_CLEAR_FIELD'
})

export const ClearHistoryLoginAction=()=>({
  type:'HANDLE_CLEAR_HISTORY_LOGIN'
})

export const LoginAction =(content)=>{
  var isValidUser;
      if(content.userName === adminInfo.userName && content.userPassword === adminInfo.userPassword){
      return({type:'HANDLE_LOGIN',payload:{loginType:'Admin',profile:adminInfo}})
    }else{
       isValidUser = userInfo.find((item, i) => {
        if (content.userName === item.userName && content.userPassword === item.userPassword) {
          return true;
        }
      });

      if(isValidUser == undefined){
         return({type:'HANDLE_LOGIN',payload:{loginType:'InvalidData'}})
      }else{
        return({type:'HANDLE_LOGIN',payload:{loginType:'User',profile:isValidUser}})
      }
    }
}
