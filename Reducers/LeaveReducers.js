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
      leave.push(requestList);
      localStorage.setItem('LeaveList',JSON.stringify({...state,leave:leave}))
      console.log('localstorage',localStorage.getItem('LeaveList'))
      return({...state,leave:leave})
    case 'GET_LEAVE_LIST':
      return(localStorage.getItem('LeaveList') !==undefined ? JSON.parse( localStorage.getItem('LeaveList')):[])
      
     
   
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    leave:[]
  }
}

