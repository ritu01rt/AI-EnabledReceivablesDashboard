import React from 'react';
import './App.css';
import theme from '../src/utils/theme';
import { makeStyles } from '@material-ui/core';
//import CollectorDashboard from '../src/views/CollectorDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ROLL_NUMBER } from '../src/utils/constants';
import Table_data from "../src/components/axiosComponent"
import SimpleAppBar from "./components/Header";
import Footer from "./components/Footer"
import AlertDialog from './components/DeleteModal';
import FormDialog from './components/AddModal';
import FormDialog1 from "./components/EditModal"
//import SearchBar from './components/SearchBar';
import Correspondance from "./components/viewcorrespondance";
import Button from '@material-ui/core/Button';
import setSearchterm from "../src/components/axiosComponent";


const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },}
}));
const styles = theme => ({
  mainBackground: {
    //background: theme.palette.primary.main,
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  }
});
const App = () => {
  console.log('theme', theme);
  //const classes = useStyles();
  return (
    <div style={{backgroundColor:"#46566c"}}>
      
      <Router basename={`/${ROLL_NUMBER}`}>
      <Route exact path="/" component={SimpleAppBar} />
      <div >
      <Button style={{backgroundColor:"#14AFF1",border:"1px solid #14AFF1",height:"1.8rem",fontSize:".7rem",color:"#fff",margin:"1.5vh"}} >Predict</Button>
      <Route exact path="/" component={Correspondance} />
      <Route exact path="/" component={FormDialog} />
      <Route exact path="/" component={FormDialog1} />
      <Route exact path="/" component={AlertDialog} />
      <>
        <input style={{backgroundColor:"#283A46",border:"1px solid #14AFF1",borderRadius:"5px",height:"1.5rem",width:"15rem",fontSize:".7rem",color:"#FFFFFF",margin:"1.5vh",top: "355px",marginLeft:"45rem",}}type="text" placeholder="Search By Invoice Number" onChange={(event)=>{setSearchterm(event.target.value);}} />
      </>
      </div>
      <div >
        <Route exact path="/" component={Table_data} />
      </div>
      <div>
        <Route exact path="/" component={Footer} />
      </div>
        
      </Router>
      
    </div>
  );
};

    
export default App;

/*return (<div><Router basename={`/${ROLL_NUMBER}`}>
        <Route exact path="/" component={CollectorDashboard} />
      </Router> <Route exact path="/" component={SimpleAppBar} />
      <Route exact path="/" component={Footer} />
      className={classes.mainBackground}
      <Route exact path="/" component={SearchBar} />
      <Table_data /></div>)*/
