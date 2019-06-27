import moment from 'moment';

 export const LeaveReducers =(state=defaultValues(),action)=>{
   console.log('HANDLE_LEAVE',action)
  switch(action.type){
    case 'HANDLE_LEAVE':
    let requestList ={
      id:JSON.parse( localStorage.getItem('LeaveList'))  ==null ||undefined  ? 1:JSON.parse( localStorage.getItem('LeaveList')).leave.length +1,
      type:'Request sended',
      leaveDate:moment(action.payload.content1).format('DD-MM-YYYY'),
      userInfo:action.payload.content2
    }
    let leave=state.leave;
      leave.push(requestList);
      localStorage.setItem('LeaveList',JSON.stringify({...state,leave:leave}))
     
      return({...state,leave:leave})
    case 'GET_LEAVE_LIST':
 console.log('localstorage',localStorage.getItem('LeaveList'))
      return(localStorage.getItem('LeaveList') !==null ||undefined  ? JSON.parse( localStorage.getItem('LeaveList')):{leave:[]})
      
    case 'ACCEPT_LEAVE':
    let acceptLeaveInfo = action.payload;
    let leaveList = JSON.parse( localStorage.getItem('LeaveList')).leave
    console.log('acceptLeaveInfo',acceptLeaveInfo)
     console.log('leaveList',leaveList)
    for(let i = 0;i<leaveList.length;i++){
      if(leaveList[i].userInfo.id ===acceptLeaveInfo.userInfo.id && acceptLeaveInfo.id ===  leaveList[i].id){
        console.log("okkk")
        leaveList[i].type='Leave Aproved';
       
      }
       leaveList= leaveList;
       let updateLeave = {...state,leave:leaveList}
        localStorage.setItem('LeaveList',JSON.stringify(updateLeave))
    }

    return ({...state,leave:leaveList})

case 'DENIED_LEAVE':

      let acceptLeaveInfo = action.payload;
    let leaveList = JSON.parse( localStorage.getItem('LeaveList')).leave
   
    for(let i = 0;i<leaveList.length;i++){
      if(leaveList[i].userInfo.id ===acceptLeaveInfo.userInfo.id && acceptLeaveInfo.id ===  leaveList[i].id){
        console.log("okkk")
        leaveList[i].type='Leave Denied';
       
      }
       leaveList= leaveList;
       let updateLeave = {...state,leave:leaveList}
        localStorage.setItem('LeaveList',JSON.stringify(updateLeave))
    }

    return ({...state,leave:leaveList})
   
    default:
    return {...state}
  }
}

function defaultValues(){
  return {
    leave:[]
  }
}

