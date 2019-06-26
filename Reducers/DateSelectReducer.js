 export const DateSelectReducer =(state={date:''},action)=>{
 
  switch(action.type){
    case'HANDLE_DATE_SELECT':
    console.log("kjvkdfc",action)
       return ({...state,date:action.payload})
  
    default:
    return ({...state})
  }
}



