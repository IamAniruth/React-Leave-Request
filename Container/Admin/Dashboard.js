import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import {GetLoginInfoActions} from '../../Actions/AdminDashboardActions';
import Button from '@material-ui/core/Button';

const mapStatesToProps=(state)=>({
  loginInfo:state.ValidUserReducer,
 
})

const mapDispatchToProps=(dispatch)=>({
  handleLoginInfo:()=>(dispatch(GetLoginInfoActions())),
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
    this.state={
        loginInfo:{
        loginType:'',
        profile:{}
  }
    }
  }

  static getDerivedStateFromProps(props,state){

  if(props.loginInfo !== state.loginInfo){
  
     let loginInfo ={
       loginType:props.loginInfo.loginType,
        profile:props.loginInfo.profile
    }
    return({
      loginInfo:loginInfo,
     
    })
  }
  }

  componentDidMount(){
    console.log("Admin",this.props)
  }

  render() {
    return (
      <div>
      {this.state.loginInfo.loginType===''?(<div>
      Something is wrong.. Please goto Login page 
       <Button variant="contained" onClick={()=>{
          this.props.history.push('/')
        }}>Click here</Button>
      </div>):(
        <div>
         Admin Dashboard
        </div>
      )}
       
      </div>
    );
  }
}
export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(AdminDashboard))

