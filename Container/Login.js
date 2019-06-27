import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {UserNameActions,UserPasswordActions,LoginAction,ClearLoginFieldAction,ClearHistoryLoginAction} from '../Actions/LoginActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.LoginReducers,
  validUser:state.ValidUserReducer
})

const mapDispatchToProps=(dispatch)=>({
  handleUserName :(content)=>(dispatch(UserNameActions(content))),
  handleUserPassword :(content)=>(dispatch(UserPasswordActions(content))),
  handleLogin :(content)=>(dispatch(LoginAction(content))),
  handleClearLoginField:()=>(dispatch(ClearLoginFieldAction())),
   handleClearHistoryLogin:()=>(dispatch(ClearHistoryLoginAction())),
})

const styles = (theme)=>({
  card: {
    minWidth: 275,
  },
   textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(1),
  },
});

class Login extends Component {
  constructor(props) {
    super(props);
      props.handleClearHistoryLogin();
    this.state={
      loginInfo:{
        userName:'',
        userPassword:''
      },
      loginErr:'',
      validUser:{
        loginType:'',
        profile:{}
  }
    }
  }

static getDerivedStateFromProps(props,state){
 console.log('props',props)
  if(props.loginInfo !== state.loginInfo || props.validUser !== state.validUser){
    let loginInfo ={
       userName:props.loginInfo.userName,
        userPassword:props.loginInfo.userPassword
    }
     let validUser ={
       loginType:props.validUser.loginType,
        profile:props.validUser.profile
    }
    return({
      loginInfo:loginInfo,
        validUser:validUser
    })
  }

  //   if(props.validUser !== state.validUser){
  //   let validUser ={
  //      loginType:props.validUser.loginType,
  //       profile:props.validUser.profile
  //   }
  //   return({
  //     validUser:validUser
  //   })
  // }
}
  componentDidUpdate(){
   console.log("ji",this.state)
  }

  handleDashboard=()=>{
 var promise = new Promise(function(resolve) {   
          
         resolve();   
      });   
      return promise; 
  }

  handleLogin=()=>{
    //  this.props.handleLogin(this.state.loginInfo);
this.handleDashboard().then(()=>{
  this.props.handleLogin(this.state.loginInfo);
  this.handleDashboard().then(()=>{
  this.props.handleClearLoginField();
   this.handleDashboard().then(()=>{
  this.handleDashboardType();
  
})
})
})
  }

  handleDashboardType=()=>{
    if(this.state.validUser.loginType ==='Admin'){
       this.setState({
        loginErr:''
      },()=>{
         this.props.history.push('/AdminDashboard')
      })
     
    }
    else if(this.state.validUser.loginType ==='User'){
       this.setState({
        loginErr:''
      },()=>{
    this.props.history.push('/UserDashboard')
      })
       
    }else if(this.state.validUser.loginType ==='InvalidData'){
      this.setState({
        loginErr:'Invalid UserName or Password'
      })
    }
  }

  render() {
    const classes = this.props
    return (
      <div>
        <p>
        <Card className={classes.card}>
      <CardContent>
        <TextField
        label="User Name"
        className={classes.textField}
        value={this.state.loginInfo.userName}
        onChange={(event)=>{
           let value=event.target.value
          this.setState({
            loginErr:''
          },()=>{
          this.props.handleUserName(value)
          })
         
        }}
        margin="normal"
        variant="outlined"
      />
         <TextField
        label="Password"
        type='password'
        className={classes.textField}
       value={this.state.loginInfo.userPassword}
        onChange={(event)=>{
          let value=event.target.value
           this.setState({
            loginErr:''
          },()=>{
          this.props.handleUserPassword(value)
          })

         
        }}
        margin="normal"
        variant="outlined"
      />
      </CardContent>
      <CardActions>
      <div>
      <div style={{color:'red'}}>
      {this.state.loginErr}
      </div>
      <div>
      <Button variant="contained" onClick={()=>{
                this.handleLogin()
          // this.props.handleLogin(this.state.loginInfo)
        }}>Login</Button>
      </div>
      </div>
       
      </CardActions>
    </Card>
        </p>
      </div>
    );
  }
}

export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(Login))


