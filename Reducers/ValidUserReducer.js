 export const ValidUserReducer =(state=defaultValues(),action)=>{
 
  switch(action.type){
    case 'HANDLE_LOGIN':
   let  loginType =action.loginType;
   let profile = action.profile
     console.log('ValidUser',action)
      return {...state,loginType:loginType,profile:profile}
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
   loginType:'',
   profile:{}
  }
}

