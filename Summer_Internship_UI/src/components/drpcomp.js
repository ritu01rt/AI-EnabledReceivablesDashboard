import React from 'react';
import { makeStyles } from '@material-ui/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';


const useStyles = makeStyles(theme => ({
  root: {
    display: 'inline-block',
    flexWrap: 'wrap',
  },
  formControl: {
    minWidth: 120,
    display:"inline-block"
  },
  inp:{
      backgroundColor:"#283A46",
      border:"1px solid #14AFF1",
      color:"#fff",
      
  },
}));

function NativeSelects() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    age: '',
    name: 'hai',
    labelWidth: 0,
  });

  const handleChange = name => event => {
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  return (
    <div className={classes.root}>
      <FormControl variant="filled" className={classes.formControl}>
        <Select
          className={classes.inp}
          native
          value={state.age}
          onChange={handleChange('age')}
        >
          <option style={{backgroundColor:"#283A46"}} value={"Template 1"}>Template 1</option>
          <option style={{backgroundColor:"#283A46"}} value={"Template 2"}>Template 2</option>
        </Select>
      </FormControl>
    </div>
  );
}

export default NativeSelects;