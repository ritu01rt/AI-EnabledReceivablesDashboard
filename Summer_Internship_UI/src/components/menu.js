import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));
export default function Menu() {
  const classes = useStyles();
  const [temp, setTemp] = React.useState('');
  const handleChange = (event) => {
    if(event.target.value===10)
           alert("template1")
    else if(event.target.value===20)
           alert("template2")
    setTemp(event.target.value);
  };

  return (
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label">Template1</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={temp}
          onChange={handleChange}
        >
          <MenuItem value={10}>Template1</MenuItem>
          <MenuItem value={20}>Template2</MenuItem>
        </Select>
      </FormControl>
  );
}
