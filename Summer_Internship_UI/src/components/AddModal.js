import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';


const addstyle={
  buttonStyle:{
    backgroundColor:"#273D49",
    border:"1px solid #14AFF1",
    height:"1.8rem",
    fontSize:".7rem",
    color:"#fff",
    margin:".5rem"
  },
  addTheme:{
      backgroundColor:"#2A3E4C",
      color:"#fff",
  },
  display:{
      backgroundColor:"#2A3E4C",
      color:"#fff",
      display:"flex",
  },
  textStyle:{
    position:"relative",
    bottom:"1.5rem",
    left:"1.5rem",
    height:"2rem",
    border:"1px solid #356680",
  },
  lowerBut:{
    backgroundColor:"#2A3E4C",
    color:"#fff",
    display:"flex"
}}


 function FormDialog (){

  const [open, setOpen] = React.useState(false);
  const [custnameinp,setName]=React.useState('')
  const [custnum,setCustNum]=React.useState('')
  const [invnum,setInvnum]=React.useState('')
  const [duedate,setDueDate]=React.useState('')
  const [invamt,setInvAmt]=React.useState('')
  const [notein,setNotes]=React.useState('')
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handlecustname=(event,index) =>
  {
    setName(event.target.value);
  }
  const handlecustnum=(event,index) =>
  {
    setCustNum(event.target.value);
  }
  const handleduedate=(event,index) =>
  {
    setDueDate(event.target.value);
  }
  const handledInvnum=(event,index) =>
  {
    setInvnum(event.target.value);
  }
  const handleInvamt=(event,index) =>
  {
    setInvAmt(event.target.value);
  }
  const handleNotes=(event,index) =>
  {
    setNotes(event.target.value)
  }

  const handlesubmit = (event) =>
  {
    event.preventDefault();
    axios.get(`http://localhost:8080/1805054/AddServlet?cname=${custnameinp}&cnum=${custnum}&iamt=${invamt}&inum=${invnum}&ddate=${duedate}&nts=${notein}`)
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }
  

    return (
      <>
        <Button style={{backgroundColor:"#273D49",border:"1px solid #14AFF1",height:"1.8rem",fontSize:".7rem",color:"#fff",margin:"1.5vh"}} onClick={handleOpen} >+ Add</Button>
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="form-dialog-title"
        >
          <DialogTitle style={addstyle.addTheme} id="form-dialog-title">Add Invoice
          <CloseIcon style={{position:"absolute",right:"1rem",color:"#97A1A9"}} onClick={handleClose}/>
          </DialogTitle>
          <DialogContent style={addstyle.display} >
            <div>
            <span style={{color:"#97A1A9"}}>Customer Name</span>
            <TextField
              style={addstyle.textStyle}
              required
              id="outlined-bare"
              margin="normal"
              onChange={handlecustname}
            />
            <br/>
            <span style={{color:"#97A1A9"}}>Customer No</span>
             <TextField
              style={{position:"relative",bottom:"2rem",left:"2.7rem",border:"1px solid #356680"}}
              required
              id="outlined-bare"
              margin="normal"
              onChange={handlecustnum}
            />
            <br/>
            <span style={{color:"#97A1A9"}}>Invoice Number</span>
             <TextField
              style={addstyle.textStyle}
              required
              id="outlined-bare"
              margin="normal"
              onChange={handledInvnum}
            />
            <br/>
            <span style={{color:"#97A1A9"}}>Invoice Amount</span>
             <TextField
              style={addstyle.textStyle}
              required
              type="number"
              id="outlined-bare"
              margin="normal"
              onChange={handleInvamt}
            />
            <span style={{color:"#97A1A9"}}>Notes</span>
             <TextField
              style={addstyle.textStyle}
              required
              id="outlined-bare"
              margin="normal"
              onChange={handleNotes}
            />
            </div>
            <div>
            <span style={{color:"#97A1A9"}}>Due Date</span>
              <TextField
              id="date"
              type="date"
              onChange={handleduedate}
              InputLabelProps={{
                shrink: true,
               }}
            />
            </div>
          
          </DialogContent>
          <DialogActions style={addstyle.lowerBut}>
            <div style={{flex:"1"}}>
            <Button style={addstyle.buttonStyle} onClick={handleClose} color="primary">Cancel</Button>
            </div>
            <div style={{justifyContent:"flex-end"}}>
            <Button style={addstyle.buttonStyle} onClick={handleClose} color="primary">Clear</Button>
            <Button style={addstyle.buttonStyle} onClick={handlesubmit} color="primary">Add</Button>
            </div>
          </DialogActions>
        </Dialog>
      </>
    );
  }


export default FormDialog;
