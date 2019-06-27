 export const DateSelectReducer =(state={date:''},action)=>{
  switch(action.type){
    case'HANDLE_DATE_SELECT':
       return ({...state,date:action.payload})
  
    default:
    return ({...state})
  }
}



