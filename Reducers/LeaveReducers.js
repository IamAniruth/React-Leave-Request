import moment from 'moment';

 export const LeaveReducers =(state=defaultValues(),action)=>{
   console.log('HANDLE_LEAVE',action)
  switch(action.type){
    case 'HANDLE_LEAVE':
    let requestList ={
      id:1,
      type:'Request sended',
      leaveDate:moment(action.payload.content1).format('DD-MM-YYYY'),
      userInfo:action.payload.content2
    }
    let leave=state.leave;
    
      leave.push(requestList)
    

      return({...state,leave:leave})

      
     
   
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    leave:[]
  }
}

