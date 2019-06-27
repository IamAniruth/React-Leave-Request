import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {GetLoginInfoActions} from '../../Actions/DashboardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {GetLeaveListAction,AcceptLeaveAction,DeniedLeaveAction} from '../../Actions/LeaveActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.ValidUserReducer,
  leaveList:state.LeaveReducers
 
})

const mapDispatchToProps=(dispatch)=>({
  handleLoginInfo:()=>(dispatch(GetLoginInfoActions())),
  getLeaveList:()=>(dispatch(GetLeaveListAction())),
  acceptLeave:(content)=>(dispatch(AcceptLeaveAction(content))),
  deniedLeave:(content)=>(dispatch(DeniedLeaveAction(content))),
})

const styles = (theme)=>({
  card: {
    minWidth: 275,
  }
});
class AdminDashboard extends Component {
  constructor(props) {
    super(props);
    props.handleLoginInfo();
    props.getLeaveList();
    this.state={
        loginInfo:{
        loginType:'',
        profile:{},
      },
      leaveList:{
        leave:[]
      },
      pendingCount:0,
      aprovedCount:0,
    }
  }

  static getDerivedStateFromProps(props,state){
 let pendingCount=0;
 let aprovedCount = 0;
  if(props.loginInfo !== state.loginInfo || props.leaveList !==state.leaveList){
  for(let i=0;i<props.leaveList.leave.length;i++){
    if(props.leaveList.leave[i].type ==='Request sended' ){
      pendingCount +=1;
    }
     if(props.leaveList.leave[i].type ==='Leave Aproved' ){
      aprovedCount +=1;
    }
  }
     let loginInfo ={
       loginType:props.loginInfo.loginType,
        profile:props.loginInfo.profile,
       
    }
      return({
        loginInfo:loginInfo,
      leaveList:props.leaveList,
      pendingCount:pendingCount,
      aprovedCount:aprovedCount
      })
    }
  }


  leaveList=()=>{
  let value =''
  if(this.state.leaveList.leave.length>0){
 value=this.state.leaveList.leave.map((item,i)=>{
              if(item.type ==='Request sended'){
        return (
                <div>
                  <span>
                    <span>
                      <b>
                      {item.userInfo.userName+' '+item.leaveDate+' '+item.type}
                      </b>
                    </span>
                  <span>
                    {item.loginTime}
                  </span>
            <Button variant="contained" onClick={()=>{
              this.props.acceptLeave(item)
        }}> Leave Accept</Button>
        <Button variant="contained" onClick={()=>{
         this.props.deniedLeave(item)
        }}> Leave Denied</Button>
             </span>
              </div>)
              }
          })
  }else{
      value =  (
                  <div>
                  There are no Request
                  </div>
                )
         }
        return value
}


responseRequest=()=>{
   let value =''
  if(this.state.leaveList.leave.length>0){
 value=this.state.leaveList.leave.map((item,i)=>{
              if(item.type ==='Leave Denied' || item.type ==='Leave Aproved'){
   return (
          <div>
            <span>
              <span>
                <b>
                {item.userInfo.userName+' '+item.leaveDate+' '+item.type+' '+item.loginTime}
                </b>
              </span>
            </span>
        </div>)
              }
          })
  }else{
      value =  (
                  <div>
                  There are no Request
                  </div>
                )
        }
    return value
}
  render() {
    const classes= this.props
    return (
      <div>
      {this.state.loginInfo.loginType===''?(<div>
      Something is wrong.. Please goto Login page 
       <Button variant="contained" onClick={()=>{
          this.props.history.push('/')
        }}>Click here</Button>
      </div>):(
        <div>
          <Button variant="contained" onClick={()=>{
          this.props.history.push('/')
        }}>Logout</Button>
        <div>
         <Grid container spacing={3}>
       <Grid item xs={6}>
          <Paper className={classes.paper}>
         <div>
        Pending Request List({this.state.pendingCount})
        UserName:<b>{this.state.loginInfo.profile.userName}</b>
          </div>
          <div>
           {this.leaveList()}
          </div>
          </Paper>
        </Grid>
         <Grid item xs={6}>
          <Paper className={classes.paper}>
         <div>
          Leave Aproved List({this.state.aprovedCount})
          <div>
          {this.responseRequest()}
          </div>
          </div>
          </Paper>
        </Grid>
        </Grid>
        </div>
        </div>
      )}
      </div>
    );
  }
}
export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(AdminDashboard))

