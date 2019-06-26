 export const LoginReducers =(state=defaultValues(),action)=>{
   console.log(action)
  switch(action.type){
    case 'HANDLE_USER_NAME':
    console.log(action)
      return({...state,userName:action.payload})

      case 'HANDLE_USER_PASSWORD':
      return({...state,userPassword:action.payload})
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    userName:'',
    userPassword:''
  }
}

