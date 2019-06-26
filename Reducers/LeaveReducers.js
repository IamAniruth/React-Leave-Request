 export const LoginReducers =(state=defaultValues(),action)=>{
   console.log(action)
  switch(action.type){
    case'HANDLE_DATE_SELECT':
       return (action.payload)
    case 'HANDLE_LEAVE':

      return({...state,userName:action.payload})

      
     
   
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    Leave:[]
  }
}

