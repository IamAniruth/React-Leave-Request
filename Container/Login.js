import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = (them)=>({
  card: {
    minWidth: 275,
  },
 
});

class Login extends Component {
  constructor() {
    super();
  }

  render() {
    const classes = this.props
    return (
      <div>
        <p>
        <Card className={classes.card}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Word of the Day
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
        </p>
      </div>
    );
  }
}

export default withStyles(styles)(Login)


