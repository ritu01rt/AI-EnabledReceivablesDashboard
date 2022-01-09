import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import DropDown from "./drpcomp";

const viewStyle ={
    but:{
      backgroundColor:"#273D49",
      border:"1px solid #14AFF1",
      height:"1.8rem",
      fontSize:".7rem",
      margin:".5rem",
      color:"#fff",
    },
    but1:{
      backgroundColor:"#14AFF1",
      border:"1px solid #14AFF1",
      height:"1.8rem",
      fontSize:".7rem",
      margin:".5rem",
      color:"#fff"
    },
    back:{
      backgroundColor:"#2A3E4C",
      color:"#fff",   
    }
  };
function Correspondance() {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  return (
    <>
      <Button style={{backgroundColor:"#273D49",border:"1px solid #14AFF1",height:"1.8rem",fontSize:".7rem",color:"#fff",margin:"1.5vh"}} onClick={handleClickOpen}>View Correspondence</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle style={viewStyle.back} id="alert-dialog-title">View Correspondence
        <DropDown />
        <CloseIcon style={{position:"absolute",right:"1rem",color:"#97A1A9"}} onClick={handleClose}/>
        </DialogTitle>
        <DialogContent style={viewStyle.back}>
          <DialogContentText style={{color:"#C0C6CA"}} id="alert-dialog-description">
          Subject: Invoice Details - <br/><br/>
          Dear Sir/Madam,<br/>
          Greetings! <br/><br/>
          This is to remind you that there are one or more open invoices on your account. 
          lease provide at your earliest convenience an update on the payment details or clarify the reason for the delay. 
          If you have any specific issue with the invoice(s), please let us know so that we can address it to the correct Department.<br/><br/>
          Please find the details of the invoices below:




          In case you have already made a payment for the above items, please send us the details to ensure the payment is posted. Let us know if we can be of any further assistance. Looking forward to hearing from you.
          <br/><br/>
          With Regards,<br/>
          HighRadius
          </DialogContentText>
        </DialogContent>
        <DialogActions style={viewStyle.back} >
          <Button style={viewStyle.but} onClick={handleClose} color="primary">Cancel</Button>
          <Button style={viewStyle.but1} onClick={handleClose} color="primary">Download</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default Correspondance;