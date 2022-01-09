import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import CloseIcon from '@material-ui/icons/Close';
import axios from 'axios';
import Table_data from './axiosComponent';


const deleteTheme={
    but:{
      backgroundColor:"#273D49",
      border:"1px solid #14AFF1",
      height:"1.8rem",
      fontSize:".7rem",
      color:"#fff",
      margin:"1.5vh"
    },
    but1:{
      backgroundColor:"#14AFF1",
      border:"1px solid #14AFF1",
      height:"1.8rem",
      fontSize:".7rem",
      color:"#fff",
    }    
}


var data;
 export const Tempcomponent=(props)=>{

  data=props;
  return(props);
}

const AlertDialog=()=> {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  
 
  const Delete=()=>{
   let len=data.length;
   let ids=data
  for(let i=0;i<len;i++){
    axios
    .get(`http://localhost:8080/1805054/DeleteServlet?doc_id=${ids[i]}`)
    .then((response) => {
      console.log(response);
      if(response.data==0){
      alert("cannot delete row")}
      else{alert("row deleted")}

      handleClose();
      Table_data();
    })
    .catch((error) => {
      console.log(error);
  })}}
 

  return (
    <>
      <Button style={deleteTheme.but} onClick={handleClickOpen} >- Delete</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle  style={{backgroundColor:"#2A3E4C",color:"#fff"}} id="alert-dialog-title">Delete Record(s)?
        <CloseIcon style={{position:"absolute",right:"1rem",color:"#97A1A9"}} onClick={handleClose}/>
        </DialogTitle>
        <DialogContent style={{backgroundColor:"#2A3E4C"}}>
          <DialogContentText style={{color:"#C0C6CA"}} id="alert-dialog-description">
          You'll lose your record(s) after this action. We can't recover them once you delete.<br/><br/>
          Are you sure you want to <span style={{color:"red"}}>permanently delete</span> them?
          </DialogContentText>
        </DialogContent>
        <DialogActions style={{backgroundColor:"#2A3E4C"}}>
          <Button onClick={handleClose} style={deleteTheme.but}>Cancel</Button>
          <Button onClick={Delete} style={deleteTheme.but1} >Delete</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AlertDialog;


