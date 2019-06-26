import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import {connect} from 'react-redux';
import {LoginActions} from '../Actions/LoginActions';

const mapStatesToProps=(state)=>({
  loginInfo:state.LoginReducers
})

const mapDispatchToProps=(dispatch)=>({
  handleLogin :(content)=>(dispatch(LoginActions(content)))
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
  }

  componentDidMount(){
    this.props.handleLogin('jk ')
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
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
         <TextField
        label="Password"
        className={classes.textField}
        // value={values.name}
        // onChange={handleChange('name')}
        margin="normal"
        variant="outlined"
      />
      </CardContent>
      <CardActions>
        <Button variant="contained">Login</Button>
      </CardActions>
    </Card>
        </p>
      </div>
    );
  }
}

export default connect(mapStatesToProps,mapDispatchToProps) (withStyles(styles)(Login))


