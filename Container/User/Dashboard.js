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
import {HandleLeaveAction} from '../../Actions/LeaveActions'

const mapStatesToProps=(state)=>({
  loginInfo:state.ValidUserReducer,
  selectedDate:state.LeaveReducers
})

const mapDispatchToProps=(dispatch)=>({
  handleLoginInfo:()=>(dispatch(GetLoginInfoActions())),
  handleLeave:(content1,content2)=>(dispatch(HandleLeaveAction(content1,content2))),
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
      selectedDate:''
    }
  }

  static getDerivedStateFromProps(props,state){
    console.log("kiuhjdvfs",props)
  if(props.loginInfo !== state.loginInfo || props.selectedDate !== state.selectedDate ){
  
     let loginInfo ={
       loginType:props.loginInfo.loginType,
        profile:props.loginInfo.profile
    }
    return({
      loginInfo:loginInfo,
        selectedDate:props.selectedDate.date
    })
  }
  }

componentDidMount(){
  console.log("jkkk",this.state)
}


  render() {
    const classes = this.props
    console.log("this.state.selectedDate",this.state.selectedDate)
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
          My Leaves
          </div>
          <div>
          Table
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
          id="mui-pickers-date"
          label="Date picker"
          value={this.state.selectedDate ==='' ? new Date() : this.state.selectedDate}
          onChange={(date)=>{
            this.props.handleLeave(date,this.state.loginInfo.profile)
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

