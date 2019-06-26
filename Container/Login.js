import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {UserNameActions,UserPasswordActions,LoginAction} from '../Actions/LoginActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.LoginReducers
})

const mapDispatchToProps=(dispatch)=>({
  handleUserName :(content)=>(dispatch(UserNameActions(content))),
  handleUserPassword :(content)=>(dispatch(UserPasswordActions(content))),
  handleLoginAction :(content)=>(dispatch(LoginAction(content)))
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
  constructor() {
    super();
    this.state={
      loginInfo:{
        userName:'',
        userPassword:''
      }
    }
  }

static getDerivedStateFromProps(props,state){
 
  if(props.loginInfo !== state){
    let loginInfo ={
       userName:props.loginInfo.userName,
        userPassword:props.loginInfo.userPassword
    }
    return({
      loginInfo:loginInfo
    })
  }
}
  componentDidUpdate(){
   console.log("ji",this.state.loginInfo)
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
          this.props.handleUserName(event.target.value)
        }}
        margin="normal"
        variant="outlined"
      />
         <TextField
        label="Password"
        className={classes.textField}
       value={this.state.loginInfo.userPassword}
        onChange={(event)=>{
          this.props.handleUserPassword(event.target.value)
        }}
        margin="normal"
        variant="outlined"
      />
      </CardContent>
      <CardActions>
        <Button variant="contained" onClick={()=>{
          this.props.handleLoginAction(this.state.loginInfo)
        }}>Login</Button>
      </CardActions>
    </Card>
        </p>
      </div>
    );
  }
}

export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(Login))


