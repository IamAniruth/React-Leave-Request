import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {GetLoginInfoActions} from '../../Actions/DashboardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import {GetLeaveListAction} from '../../Actions/LeaveActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.ValidUserReducer,
  leaveList:state.LeaveReducers
 
})

const mapDispatchToProps=(dispatch)=>({
  handleLoginInfo:()=>(dispatch(GetLoginInfoActions())),
  getLeaveList:()=>(dispatch(GetLeaveListAction())),
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
      leaveList:[]
    }
  }

  static getDerivedStateFromProps(props,state){

  if(props.loginInfo !== state.loginInfo){
  
     let loginInfo ={
       loginType:props.loginInfo.loginType,
        profile:props.loginInfo.profile,
       
    }
    return({
      loginInfo:loginInfo,
     leaveList:props.leaveList.leave
    })
  }
  }

  componentDidMount(){
    console.log("Admin",this.props)
  }

  leaveList=()=>{
  // return <div>r</div>
  let value =''
  console.log('this.state.leaveList',this.state.leaveList)
  if(this.state.leaveList.length>0){
 value=this.state.leaveList.map((item,i)=>{
          
              // (<div>df</div>)
   return (
     
                <div>
             <span>
             <span>
             <b>
             {item.userInfo.userName+' '+item.leaveDate+' '+item.type}
             </b>
             </span>
             
            
             </span>
              </div>)
           
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
          Leave Request List
          </div>
          <div>
           {this.leaveList()}
          </div>
          </Paper>
        </Grid>
         <Grid item xs={6}>
          <Paper className={classes.paper}>
         <div>
          Leave Aproved List
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

