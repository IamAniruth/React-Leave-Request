// export const HandleDateSelectAction =(content)=>({
//   type:'HANDLE_DATE_SELECT',
//   payload:content
// })
export const HandleLeaveAction =(content1,content2)=>({
  type:'HANDLE_LEAVE',
  payload:{content1,content2}
})

export const GetLeaveListAction =()=>({
  type:'GET_LEAVE_LIST',
})

export const AcceptLeaveAction =(content)=>({
  type:'ACCEPT_LEAVE',
  payload:content
})

export const DeniedLeaveAction =(content)=>({
  type:'DENIED_LEAVE',
  payload:content
})

