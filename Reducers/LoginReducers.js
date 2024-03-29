 export const LoginReducers =(state=defaultValues(),action)=>{
  
  switch(action.type){
    case 'HANDLE_USER_NAME':
      return({...state,userName:action.payload})
      case 'HANDLE_USER_PASSWORD':
      return({...state,userPassword:action.payload})
      case 'HANDLE_CLEAR_FIELD':
      return({state,id:'',userName:'',userPassword:''})
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    id:'',
    userName:'',
    userPassword:''
  }
}

