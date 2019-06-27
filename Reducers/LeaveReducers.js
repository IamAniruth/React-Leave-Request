import moment from 'moment';

 export const LeaveReducers =(state=defaultValues(),action)=>{
 
  switch(action.type){
    case 'HANDLE_LEAVE':
     let leaveList = localStorage.getItem('LeaveList')==null ||undefined  ? {leave:[]}: JSON.parse( localStorage.getItem('LeaveList')).leave;

      let requestList ={
        id:JSON.parse( localStorage.getItem('LeaveList'))  ==null ||undefined  ? 1:JSON.parse( localStorage.getItem('LeaveList')).leave.length +1,
        type:'Request sended',
        loginTime:moment(action.payload.content3).format('MMMM Do YYYY, h:mm:ss a'),
        leaveDate:moment(action.payload.content1).format('DD-MM-YYYY'),
        userInfo:action.payload.content2
      }
    let leave=state.leave;
      leave.push(requestList);
      localStorage.setItem('LeaveList',JSON.stringify({...state,leave:leave}))
      return({...state,leave:leave})
      
    case 'ACCEPT_LEAVE':
    let acceptLeaveInfo = action.payload;
     let leaveList = localStorage.getItem('LeaveList')==null ||undefined  ? {leave:[]}: JSON.parse( localStorage.getItem('LeaveList')).leave
    for(let i = 0;i<leaveList.length;i++){
      if(leaveList[i].userInfo.id ===acceptLeaveInfo.userInfo.id && acceptLeaveInfo.id ===  leaveList[i].id){
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
    leave:localStorage.getItem('LeaveList')==null ||undefined  ? []:JSON.parse( localStorage.getItem('LeaveList')).leave
  }
}

