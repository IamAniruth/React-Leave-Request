
import {adminInfo,userInfo} from '../DataAPI/LoginData';
export const UserNameActions =(content)=>({
  type:'HANDLE_USER_NAME',
  payload:content
})

export const UserPasswordActions =(content)=>({
  type:'HANDLE_USER_PASSWORD',
  payload:content
})

export const LoginAction =(content)=>{
  console.log(adminInfo,userInfo)
  console.log(content)
  var isValidUser;

      if(content.userName === adminInfo.userName && content.userPassword === adminInfo.userPassword){
      console.log("ok")
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

  // return dispatch=>{

  // }
}



// export const LoginActions =(content)=>{
//   console.log(content)
// }