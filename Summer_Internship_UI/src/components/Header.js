import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import cornerLogo from "../assets/companyLogo.svg";
import highLogo from "../assets/Highradius_Logo.svg"

const styles = {
  root: {
    flexGrow: 1,
  },
  abcStyle:{
    color:"#fff",
    fontWeight:900,
    fontSize:"1.3rem"
  },
  highStyle:{
    marginLeft:"30rem",
    width:"10rem"
  },
  appBar:{
    backgroundImage:"radial-gradient(#58687E ,#39495E)",
    boxShadow:"none"
  }
};

function SimpleAppBar(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
         <Toolbar style={{margin:0}}>
            <img src={cornerLogo} alt="The Company Logo"/>
            <Typography className={classes.abcStyle}>ABC PRODUCTS</Typography>
            <img className={classes.highStyle} src={highLogo} alt="The Highradius Logo"/>
         </Toolbar>
          <Typography style={{margin:"1rem 1rem",letterSpacing:".4rem"}}>Invoice List</Typography>
      </AppBar>
    </div>
  );
}

SimpleAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleAppBar);
