import React, { useRef } from 'react';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import editLogo from "../assets/editLogo.svg"
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';


const styles={
  but:{
    backgroundColor:"#273D49",
    border:"1px solid #14AFF1",
    height:"1.8rem",
    fontSize:".7rem",
    margin:"1rem",
    color:"#fff"
  },
  but1:{
    backgroundColor:"#14AFF1",
    border:"1px solid #14AFF1",
    height:"1.8rem",
    fontSize:".7rem",
    color:"#fff"
  },
  text1:{
    position:"relative",
    bottom:"1.5rem",
    left:"1.1rem",
    border:"1px solid #356680"
    
  },
  text2:{
    outline:"none",
    boxShadow:"none",
    position:"relative",
    bottom:"1.5rem",
    left:"6rem",
    border:"1px solid #356680",
    height:"10rem"
  }
}

var global;
 export function Edit(props) {
 
  global = props;
  return (<div>{console.log(props)}</div>);
}

 const FormDialog1=()=>{
  const [open, setOpen] = React.useState(false);
  const [invamt,setInvamt]=React.useState('');
  const [Notes,setNotes]=React.useState('');
  const inpt=useRef(null)
  const handleOpen = () => {
    if(global.length>1){alert("only 1 value allowed")}
    else if(global.length==0){alert("only 1 value allowed")}
    else{
    setOpen(true);}
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleInvamt=(event) => 
  {
       setInvamt(event.target.value)
  }
  const handleNotes1 =(event) =>
  {
    setNotes(event.target.value)
  }
  const handleReset= (event) =>
  {
       setNotes('');
       setInvamt('');
  }
  const handleSubmit =(event) =>
  { 
    let docid=global;
    event.preventDefault();
    axios.get(`http://localhost:8080/1805054/EditServlet?docid=${docid[0]}&iamount=${invamt}&notes=${Notes}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  

    return (
      <>
        <Button style={{backgroundColor:"#273D49",border:"1px solid #14AFF1",height:"1.8rem",fontSize:".7rem",color:"#fff",margin:"1.5vh"}} onClick={handleOpen}>
        <img style={{width:".7rem",margin:".3rem"}} src={editLogo} alt="Edit Logo"/>Edit</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={{backgroundColor:"#2A3E4C",color:"#fff"}} id="form-dialog-title">Edit Invoice
          <CloseIcon style={{position:"absolute",right:"1rem",color:"#97A1A9"}} onClick={handleClose}/>
          </DialogTitle>
          <DialogContent style={{backgroundColor:"#2A3E4C"}}>
            
          <span style={{color:"#97A1A9"}}>Invoice Amounts</span>
             <TextField
              className={styles.text1}
              required
              id="outlined-bare"
              type="number"
              margin="normal"
              variant="outlined"
              onChange={handleInvamt}
            />
            <br/>
            <span style={{color:"#97A1A9"}}>Notes</span>
            <TextField
               className={styles.text2}
               id="outlined-with-placeholder"
               margin="normal"
               variant="outlined"
               onChange={handleNotes1}
            />
          
          </DialogContent>
          <DialogActions style={{backgroundColor:"#2A3E4C",display:"flex"}}>
            <div style={{flex:"1"}}>
            <Button className={styles.but} onClick={handleClose} color="primary">Cancel</Button>
            </div>
            <div style={{justifyContent:"flex-end"}}>
            <Button className={styles.but} onClick={handleReset} color="primary">Reset</Button>
            <Button className={styles.but1} onClick={handleSubmit} color="primary">Save</Button>
            </div>
          </DialogActions>
        </Dialog>
      </>
    );
  }


FormDialog1.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default FormDialog1;
