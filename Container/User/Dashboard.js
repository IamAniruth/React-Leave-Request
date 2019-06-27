import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {GetLoginInfoActions} from '../../Actions/DashboardActions';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';
import {HandleLeaveAction} from '../../Actions/LeaveActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.ValidUserReducer,
  leaveList:state.LeaveReducers
})

const mapDispatchToProps=(dispatch)=>({
  handleLoginInfo:()=>(dispatch(GetLoginInfoActions())),
  handleLeave:(content1,content2,content3)=>(dispatch(HandleLeaveAction(content1,content2,content3))),
})

const styles = (theme)=>({
  card: {
    minWidth: 275,
  },
   root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class UserDashboard extends Component {
  constructor(props) {
    super(props);
    props.handleLoginInfo();
    this.state={
        loginInfo:{
        loginType:'',
        profile:{}
      },
      loginTime:new Date(),
      date:new Date(),
      leaveList:{
        leave:[]
      }
      
    }
  }

  static getDerivedStateFromProps(props,state){
  if(props.loginInfo !== state.loginInfo || props.leaveList !== state.leaveList ){
     let loginInfo ={
       loginType:props.loginInfo.loginType,
       profile:props.loginInfo.profile
    }
    return({
      loginInfo:loginInfo,
      leaveList:props.leaveList
    })
  }
  }


leaveList=()=>{
  let value ='';
  if(this.state.leaveList.leave.length>0){
 value=this.state.leaveList.leave.map((item,i)=>{
            if(item.userInfo.id ===this.state.loginInfo.profile.id ){
   return (
          <div>
            <span>
                <span>
                  {item.leaveDate} 
                </span>
                <span>
                  <b>
                    {item.type}
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
    const classes = this.props
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
       <div className={classes.root}>
      <Grid container spacing={3}>
       <Grid item xs={6}>
          <Paper className={classes.paper}>
         <div>
          My Leaves UserName:<b>{this.state.loginInfo.profile.userName}</b>
          </div>
          <div>
          {this.leaveList()}
          </div>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
          <div>
          New Leave 
          </div>
          <div>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
          <KeyboardDatePicker
          margin="normal"
          minDate={new Date()}
          id="mui-pickers-date"
          label="Date picker"
          value={this.state.date }
          onChange={(date)=>{
            this.setState({date:date},()=>{
              console.log('this.state.loginInfo',this.state.loginInfo)
  this.props.handleLeave(date,this.state.loginInfo.profile,this.state.loginTime)
            })
            
          }}
          KeyboardButtonProps={{
            'aria-label': 'change date',
          }}
        />
       
        </MuiPickersUtilsProvider>
          </div>
          <div>
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
export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(UserDashboard))

